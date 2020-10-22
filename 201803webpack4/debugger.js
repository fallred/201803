// var webpackPath = require('path').resolve(__dirname, 'node_modules', 'webpack-cli', 'bin', 'cli.js');
// require(webpackPath);

const webpack = require("webpack");
//1.读取配置文件
const config = require('./webpack.config.1.js');
// const config = require('./webpack.config.js');
const compiler = webpack(config);
function compilerCallback(err, stats) {
    // modules 记录了所有解析后的模块
    // chunks 记录了所有的chunk
    // assets 记录了所有要生成的文件
    const statsString = stats.toString();
    console.log(statsString);
}
compiler.run((err,stats)=>{
    compilerCallback(err, stats);
});
