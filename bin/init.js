#! /usr/bin/env node

const program = require('commander');
const colors = require('colors');  // 提示有颜色
const inquirer = require('inquirer');  // 终端文字提示 并获取交互信息

const { realpathSync } = require('fs');  // node fs模块 提供文件相关操作API
const appDirectory = realpathSync(process.cwd()); // 获取项目的绝对路径
function resolveApp(relativePath) {  // 根据相对路径获取绝对路径
    return resolve(appDirectory, relativePath);
}

// const init = require('../script/init.js');
const logs = console.log;
program
    .option('-p, --path', '自定义生成目录')
    .parse(process.argv);

try {
    let question = [{
        type: 'Input',
        name: 'fileName',
        message: '请输入文件名(以小驼峰法命名，如：loginIn)',
    }] 
    program.path && question.push({
        type: 'Input',
        name: 'path',
        message: '请输入生成目录(当前项目为根目录,默认为src/pages/)',
        default: ''
    })
    inquirer
        .prompt(question)
        .then((answers) => { // 待添加 文件名输入格式判断处理
            if (answers.swagger == '') {
                logs(colors.red('请输入文件名'));
            } else {
                if(!answers.path || answers.path == ''){
                    answers.path = resolveApp('src/pages/');
                }
                // init(answers.swagger, answers.path)
            }
        })
} catch (err) {
    logs(colors.red(err || '服务启动失败'));
}