//函数的扩展
{
	//默认值
	//当参数有默认值的情况下。
	function test(x,y='es6'){
	console.log('默认值',x,y);
	}

	test('hello',);//调用时，y没赋值时，直接取默认值
	test('hello','es7');//调用时赋值了，默认值就不会生效
}

{
	let x='test';
	function f(x,y=x){  //当这里参数有x的时候，就调用函数块内的x；
		console.log(x,y);
	}
	f('Yj');


}

{
	let x='test';
	function f(z,y=x){  //当这里参数没有x的时候，就调用函数块外的x；
		console.log(x,y);
	}
	f('Yj');
}

{
	//rest  把参数转成一个数组
	function test3(...arg){
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4);
}

{
		function fot(...args){
    console.log(args)
}
fot(1,2,3,4,5,5,6,6)
}

{
	console.log(...[1,3,4]);//把数组转成参数
	console.log('a',...[1,3,4]);
}

{
	//尾调用  提高性能
	function tail(x){
		console.log('tail',x);
	}

	function tset5(x){
		return tail(x);
	}

	tset5(100);
}


{
	//箭头函数

	let arr=['apple','banana','orange'];
	let baeakfast =arr.map(fruit=>{
    return fruit +"s"
});
	console.log(baeakfast);
}

{
	 function Person() {
  this.age = 0;
  setInterval(()=> {
    this.age++;
  }, 1000);
}
var person = new Person();
    console.log(person)
}

{
	let nicknames = ['di', 'boo', 'punkeye'];
for (let nickname in nicknames) {  //in显示下标  of显示值
console.log(nickname);}
}


