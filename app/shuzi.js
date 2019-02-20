//数值扩展  新增方法

{
//二进制的表示方式
console.log('二进制的表示方式',0b111110111);
//八进制的表示方式
console.log('八进制的表示方式',0o767);
}

{
	//判断是否是无穷数
	console.log('15',Number.isFinite(15));//true
	console.log('NaN',Number.isFinite(NaN));//flase
	console.log('1/0',Number.isFinite("true"/0));
	console.log('isNaN',Number.isNaN(NaN));//非数值 true 
 	console.log('isNaN',Number.isNaN(0));//flase 
}
console.log('25',Number.isInteger(25));//true
console.log('25.0',Number.isInteger(25.0));//true
console.log('25.1',Number.isInteger(25.1));//false
console.log('25',Number.isInteger('25'));//false
{
	
}


{
//-2的53次方 和  2的53次方（不包含这两个端点），超过这个范围精度就不准了。
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//isSafeInteger 判断是否是有效数(再max和min之间的数)
console.log('a',Number.isSafeInteger('a'));
console.log('10',Number.isSafeInteger(10));
}

{
//Math.trunc() 取整;
console.log('4.1',Math.trunc(4.1));//4
console.log('4.9',Math.trunc(4.9));//4
}

{
//Math.sign判断是正数还是负数，还是0,参数只能是数字
console.log('-5',Math.sign(-5));//-1
console.log('0',Math.sign(0));//0
console.log('5',Math.sign(5));//1
console.log('5000',Math.sign('5000'));//1 参数只能是数字
console.log('foo',Math.sign('foo'));//非数字 NaN
}

{

//立方跟
console.log('-1',Math.cbrt(-1));//-1
console.log('8',Math.cbrt(8));//2
} 

