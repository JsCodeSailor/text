// 对象的扩展

{

	// 对象得属性
	let k=0;
	let o=1;
	let es5={
		k:k,
		o:o
	}
	console.log(es5);
	//es6写法
	let es6={
	k,
	o
	}
	console.log(es6);
}

{
	//对象的方法
	let es5={
		hello:function(){
			console.log('es5');
		}
	}
	let es6={
		hello(){
			console.log('es6');
		}
	}

	console.log(es5.hello(),es6.hello());
}

{
	//属性表达式
	let a='b';
	let es5_obj={
		a:'c',
		b:'c'
	}
	console.log(es5_obj);

	let es6_obj={
		[a]:'c'     //这里的a加了中括号，因为上面赋值了a=b，所以这里显示的是b=c；
	}
	console.log(es6_obj);
}

{
	//新增api

	//Object.is()就相当于 ===
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
	//两个空的数组虽然值是一样的，但是是引用类型，所以地址不一样
	console.log('数组',Object.is([],[]),[]===[]);//false
	//浅拷贝:
	//引用类型的话引用地址，而不是把值复制过来
	//拷贝自身属性，不可以拷贝继承属性
	console.log('浅拷贝',Object.assign({a:'a'},{b:'b '}));
}

{
	let test={k:123,o:456};
	for(let [key,value] of Object.entries(test)){
		console.log([key,value]);
	}
}

for(let  [index,value] of ['1','c','ks'].entries()){
		console.log('value、keys',index,value);
	}