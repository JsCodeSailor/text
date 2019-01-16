module.exports = {
	entry: "./app/index.js",
	output:{
		path:__dirname +"./build/",
		filename:"build.js"
	},
	module:{
		rules:[
			{
				test:/.css$/,
				use:["style-loader","css-loader"],
				exclude:"/node_modules/"
			}
		]
	},
	resolve:{
		extensions:['.js','.css','jsx']//自动补全识别后缀
	},
	
}