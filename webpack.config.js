const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const path = require('path');

module.exports = {
    entry: './src/main.js',//入口
    output: {//出口
        path: path.resolve(__dirname, 'dist'),//出口路径文件夹名字
        filename: 'bundle.js',//出口文件名字（代码打包进这里）
    },
    plugins: [new HtmlWebpackPlugin({//plugins插件配置
        template: './public/index.html'//告诉webpack使用插件时，以我们自己的html文件作为模板去生成dist/html文件
    })],
    module: {//加载器配置
        rules: [//规则
            {//一个具体的规则对象
                test: /\.css$/i,//匹配以.css结尾的文件
                use: ["style-loader", "css-loader"],//让webpack使用这两个loader处理css文件
                // 从右到左的顺序，所以不能颠倒顺序
                // css-loader: webpack解析css文件-把css代码一起打包进js中
                // style-loader: css代码插入到DOM上（style标签）
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {//图片文件的配置（仅适用于webpack5）
                test: /\.(gif|png|jpg|jpeg)$/,
                type: 'asset'//匹配上面的文件后，webpack会把他们当做静态资源处理打包
                // 如果你设置的asset模式
                // 以8kb大小区分图片
                // 小于8kb的，吧图片转成base64，打包进js中
                // 大于8kb，直接把图片文件输出到dist下面
            },
            { //字体文件的配置（仅适用于webpack5）
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',//所有的字体图标，都输出到dist下
                generator: {//生成文件的名字 - 定义规则
                    filename: 'fonts/[name].[hash:6][ext]'//[ext]会替换成.eot/.woff
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,//不去匹配这些文件夹下的文件
                use: {
                    loader: 'babel-loader',//使用这个loader处理js文件
                    options: {//加载器选项
                        presets: ['@babel/preset-env']//预设：@babel/preset-env 降级规则-按照这里的规则降级我们的js语法
                    }
                }
            }
        ],
    },
    devServer:{
        port:3000//端口号
    }
};