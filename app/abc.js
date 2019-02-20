module.exports="解构赋值";

{
	//数组赋值
	let a,b,rest;
	[a,b]=[1,2];
	console.log(a,b);
}

{
	let a,b,c,rest;
	//默认值，如果c不赋值，返回值为undefined
	[a,b,c=3]=[1,2];
	console.log(a,b,c);
}

{
	//数组赋值
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);
}

{
	//对象赋值
	let a,b;
	({a,b}={a:1,b:2})
	console.log(a,b);
}

{
	//直接交换位置
	let a=1;
	let b=2;
	[a,b]=[b,a];
	console.log(a,b);
}

{

	//解构直接获取函数里的返回值
	function f(){
		return [1,3];
	}
	let a,b;
	[a,b]=f();
	console.log(a,b);
}

{
	//数组解构的常用场景
	function f(){
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,...b]=f();
	console.log(a,b);
}
  {
  	//对象解构的形式,左侧一定是对象的格式。
  	let o={p:42,q:true};
  	let {p,q}=o;
  	console.log(p,q)
  }

  {
  	//有默认值的，也有赋值，就优先赋值
  	let {a=10,b=5}={a:1};	 
  	console.log(a,b);
  }


  {
  let metaData={
  	title:'abc',
  	test:[{
  		title:'test',
  		desc:'description'
  	}]
  }
  let {title:esTitle,test:[{title:cnTitle,desc}]}=metaData;
  console.log(esTitle,cnTitle,desc);
  }

