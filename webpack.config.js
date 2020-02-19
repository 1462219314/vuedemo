
//由于 webpack 是基于Node进行构建的，所以 webpack 的配置文件中，任何合法的Node代码都是支持的

//导入node.js中 专门操作路径的模块
const path = require('path')
//导入生成预览页面的插件,得到一个构造函数
const htmlWebpackPlugin = require('html-webpack-plugin')
//创建插件的实例对象
//这个插件的两个作用
//1 ：自动在内存中根据指定页面生成一个内存的页面
//2 ： 自动把打包好的 bundle.js 追加到页面中去
const htmlPlugin = new htmlWebpackPlugin({
	template : './src/index.html',//指定要用到的模板文件
	filename : 'index.html'//指定生成的文件名称，改文件存在于内存中，在目录中不显示
})

const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader 插件，它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块

const vueLoader =  new VueLoaderPlugin();

module.exports = {
	//编译模式
	mode: 'development', //development production
	entry : path.join(__dirname ,  './src/index.js'), //入口文件  __dirname ：项目根目录 
	output :{
		path : path.join(__dirname , './dist'),//输出文件存放路径
		filename : 'bundle.js' //输出文件的名称
	},
	plugins: [htmlPlugin , vueLoader],//plugins数组是webpack打包期间会用到的一些插件列表
	//所有第三方文件模块的加载器
	module:{
		rules :[//所有第三方模块的 匹配规则
			{
				test : /\.css$/ , use : [ 'style-loader' ,'css-loader' ]//匹配处理css文件 的第三方loader
				//test 表示匹配的文件类型 ， use表示对应要调用的 loader
				//use 数组中指定的 loader 顺序是固定的， 多个loader 的调用顺序是：从后往前调用
				
			},
			{
				test: /\.less$/ , use : [ 'style-loader' , 'css-loader' , 'less-loader']//配置处理less 文件的第三方loader
			},
			{
				test: /\.scss$/ , use : [ 'style-loader' , 'css-loader' , 'sass-loader']//配置处理scss 文件的第三方loader
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/ , use : 'url-loader?limit=3639&name=[hash:16]-[name].[ext]' //处理图片路径的loader
			//limit 给定的值是 图片的大小 单位是byte，如果我们引用的图片大于limit 值 ，则不会被转为base64格式的字符串
			},
			// {
			// 	test: /\.(png|jpg|jpeg|gif)$/,
            // use: [{ // url-laoder配置 了解详细==>(https://blog.csdn.net/qq20004604/article/details/78745994)
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10000,
            //         name: '[name].[ext]',
            //         outputPath: 'assets/img',
            //         publicPath: ''
            //     }
            // }]
			// },
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/ , use : 'url-loader'//这是配置字体文件的loader
			},
			{
				test :/\.js$/ , use: 'babel-loader' , exclude : /node-modules/
			},//配置babel 来转换高级的ES语法
			{
				test :/\.vue$/ , use: 'vue-loader' 
			}//配置vue loader
		]
	},
	// resolve:{
	// 	alias:{ //修改Vue被导入时包的路径
	// 		"vue$" : "vue/dist/vue.js"
	// 	}
	// }
}