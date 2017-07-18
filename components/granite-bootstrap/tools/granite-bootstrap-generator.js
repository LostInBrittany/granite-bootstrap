var  fs = require('fs-extra');

var folder = "./bower_components/bootstrap/dist/css";
var targetFolder = "."


var getHeader = function(filename) {
  return `
<!--
@license MIT
Copyright (c) 2016 Horacio "LostInBrittany" Gonzalez for the webçcomponent encapsulation of Bootstrap code
@demo demo/index.html
-->
<dom-module is="granite-${filename.replace('.css', '').replace('.min','-min')}"><template><style>\n`;
}
var getFooter = function() {
  return `\n</style></template></dom-module>`;
}

fs.walk(folder).on('data', function (item) {
  
  if (item.stats.isFile() && item.path.endsWith('css')) {
    
    var splittedPath = item.path.split(/[\/\\]/);
    var filename = splittedPath[splittedPath.length-1];
    
    fs.ensureDirSync(targetFolder);
    
    var data = fs.readFileSync(item.path, "utf8");
    
    var out = getHeader(filename) + data + getFooter();
    
    fs.writeFileSync(targetFolder + '/granite-' + filename.replace('.css', '.html').replace('.min','-min'), out);    
        
  }
  
});