/*
@license Apache 2.0
Copyright (c) 2017 Horacio "LostInBrittany" Gonzalez 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
A script to generate Polymer style modules from CSS files
*/
if (process.argv.length != 4) {
    console.log("Use: node granite-css-modularizer.js SOURCE_FOLDER TARGET_FOLDER\n");
    process.exit();
  }
  
  let folder = process.argv[2];
  let targetFolder = process.argv[3];
  
  const  fs = require('fs-extra');
  const klaw = require('klaw')
  
  let moduleName = function(filename) {
    return `granite-${filename.replace('.css', '').replace('.min','-min')}`;
  }
  
  let getHeader = function() {
    return `  /**
    @license Apache 2.0
    Copyright (c) 2017 Horacio "LostInBrittany" Gonzalez for the style module encapsulation of CSS files
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    @demo demo/index.html
    */

    const styleElement = document.createElement('dom-module');
    styleElement.innerHTML = \`<template><style>\n`;
  }
  let getFooter = function(filename) { 
    return `
    </style></template>\`;
    styleElement.register('${moduleName(filename)}'); 
    `;
  }
  
  let transformFile = function(item) {
    
    if (item.stats.isFile() && item.path.endsWith('css')) {
      
      let splittedPath = item.path.split(/[\/\\]/);
      let filename = splittedPath[splittedPath.length-1];
      
      fs.ensureDirSync(targetFolder);
      
      let data = fs.readFileSync(item.path, "utf8").replace(/\\/g,'\\\\');
      
      let out = getHeader() + data + getFooter(filename);
      
      fs.writeFileSync(`${targetFolder}/${moduleName(filename)}.js`, out);    
          
    }
    
  }
  
  fs.ensureDir(targetFolder)
  .then(() => {
    klaw(folder).on('data', transformFile);
  })
  .catch(err => {
    console.error(err)
  });