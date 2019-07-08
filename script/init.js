const PAGE_TEMPLATE_PATH = '../template/pageTemplate.mustache';
const STYLE_TEMPLATE_PATH = '../template/styleTemplate.mustache';

const Colors = require('colors');
const Log = console.log;
const fs = require('fs');
const Mustache = require('mustache');
const Path = require('path');

const { resolveApp, parsePath } = require('../config/defaultPaths');
const { get } = require('../util/request');
const { existsSync, mkdir } = require('../util/fileService');



function toLine(str) { // 小驼峰转连字符 loginIn -> login-in
	var temp = str.replace(/[A-Z]/g, function (match) {	
		return "-" + match.toLowerCase();
  });
  if(temp.slice(0,1) === '-'){ 
  	temp = temp.slice(1);
  }
	return temp;
}

function toCamel(str) { // 小驼峰转大驼峰 首字母转为大写
  return str[0].toUpperCase() + str.substring(1)
}




