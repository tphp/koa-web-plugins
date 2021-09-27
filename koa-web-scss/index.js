'use strict';

const fs = require("fs");
const sass = require("sass");

module.exports = async (setMid) => {
  setMid('css', async hd => {
    hd.age();
    
    let cssStr = hd.read();
    let isCss = false;
    if (cssStr !== undefined && cssStr.constructor.name == 'Buffer') {
      cssStr = cssStr.toString();
      if (cssStr.trim() !== '') {
        isCss = true;
      }
    }
    
    if (isCss) {
      return cssStr;
    }

    let scssFile = hd.data.rootPath + hd.data.ctxDir + ".scss";

    if (!fs.existsSync(scssFile) || !fs.statSync(scssFile).isFile()) {
      return;
    }

    var result = sass.renderSync({file: scssFile});

    return result.css;
  });
};