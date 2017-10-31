/*
    webpack  -> 强行多写，难点，报错英文
    react-router -> 熟练（熟背）
    redux -> 多练多理解（思想）

    npm install --save-dev babel-loader babel-core babel-preset-env webpack


    回去以后，用node进入目录，npm i(如果全局没有安装webpack那么要使用：
        npm i webpack -g
    )

*/
const path = require('path');//node中的path模块
module.exports = {
    entry: './2.js',//让它找哪个文件（这个文件各种引）
    output:{//出口文件
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }

};