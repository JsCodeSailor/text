//字符串扩展

{
	console.log('a',`\u0061`); //unicode码;
	console.log('s',`\u20BB7`);//这里会分为两个字节识别
	console.log('s',`\u{20BB7}`);//使用{}就可以整合成一个字节。
}

{
	let s='𠮷';//四个字节
	console.log('length',s.length);//长度计算方式：每两个字节显示长度为1
	console.log('0',s.charAt(0));//取第一个位置的字符（charAt只能取两个字节的字符，现在的字符是四个字节，所以出现乱码）
	console.log('1',s.charAt(1));//取第二个位置的字符： 乱码
	console.log('at0',s.charCodeAt(0));//取第一个unicode码值： 虽然取出来了，但是，是错的
	console.log('at1',s.charCodeAt(1));//取第二个unicode码值


	let s1='𠮷a'//a为两个字节，总共6个字节。
	console.log('length',s1.length);//每两个字节为长度1，故长度为3
	console.log('code1',s1.codePointAt(0));//取码值
	console.log('code2',s1.codePointAt(0).toString(16));//转换成unicode
	console.log('code3',s1.codePointAt(1));//取第二个码值，就是第1234字节中的3、4两个字节
	console.log('code4',s1.codePointAt(2));//取a的字节
}

{
	console.log(String.fromCharCode("0x20bb7"));//es5方法，乱码
	console.log(String.fromCodePoint("0x20bb7"));//es6方法，显示正确

}

{
	//es5 遍历
	let str='\u{20BB7}abc';
	for(let i=0;i<str.length;i++){
		console.log('es5',str[i]);
	}

	//es6 遍历

	for(let code of str){
		console.log('es6',code);
		}
}


{
	let str="string";
	console.log("includes",str.includes('i'));//包含某个数字
	console.log("start",str.startsWith('str'));//是否str开头
	console.log("end",str.endsWith('ng'));//是否ng结尾
}


{
	let str="abc";
	console.log(str.repeat(3)); //repeat打印次数;
}

{
	let name="list";
	let info="hello es6";
	let m=`i am ${name} ${info}`//字符串的拼接
	console.log(m);
}

{
	//在数字的前后加数字,规定数字的长度
	console.log('1'.padStart(2,'0'));//长度为2,前面用0补上
	console.log('1'.padEnd(2,'0'));//长度为2,后面用0补上
}


{
	//标签模板
	let user={
		name:'list',
		info:'  hello world'
	};
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		 return s+v1+v2;
	}
}

{
	//显示\n转义字符
	console.log(String.raw`HI\n${1+2}`);
	console.log(`HI\n${1+2}`);
}