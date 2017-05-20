var  fs = require('fs-extra');

var folder = "./bower_components/bootstrap/dist/css";
var targetFolder = "."


var getHeader = function(filename) {
  return `
<!--
@license MIT
Copyright (c) 2016 Horacio "LostInBrittany" Gonzalez for the webcomponent encapsulation of Bootstrap code
@demo demo/index.html
-->
<dom-module id="granite-${filename.replace('.css', '').replace('.min','-min')}"><template><style>\n`;
}
var getFooter = function() {
  return `\n</style></template></dom-module>`;
}

fs.walk(folder).on('data', function (item) {
  
  if (item.stats.isFile() && item.path.endsWith('css')) {
    
    var splittedPath = item.path.split(/[\/\\]/);
    var cssFilename = splittedPath[splittedPath.length-1];
    
    fs.ensureDirSync(targetFolder);
    
    var data = fs.readFileSync(item.path, "utf8");
    
    var outFile = getHeader(cssFilename) + data + getFooter();

    var htmlFilename = cssFilename.replace('.css', '.html').replace('.min','-min');
    
    fs.writeFileSync(targetFolder + '/granite-' + htmlFilename, outFile);    
  }
  
});