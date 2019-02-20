//数组扩展
module.exports="hello webpack";

{
	//array.of 把一组数据变量，变成数据类型
	let  arr= Array.of(3,4,5,6,7);
	console.log(arr);

	//当Array.of里面都没有值，返回一个空的集合
	let  arr2=Array.of();
	console.log(arr2);
}

{

//Array.form  集合转数组
	let p=document.querySelectorAll('p');
	let pArr=Array.from(p);
	pArr.forEach(function(item){
		console.log(item.textContent);
	});
	// 先遍历然后再根据函数乘以2
	console.log(Array.from([1,3,5],function(item){return item*2}));
}


{

	//fill填充数组的一个功能，当fill(7)的时候，该数组里面都为7
	console.log('fill-7',[1,'a',undefined].fill(7));

	//fill()里面有多个数的时候，第一个数是要填充的数字，第二个数字是从该数字开始，到第三个数字结束(不包括3)。
	console.log('fill,pos',['a','b','c'].fill(7,1,3))
}


{
	//keys 遍历下标
  for(let index of ['1','c','ks'].keys()){
  	console.log('keys',index);
  }

  //values 遍历值
 for(let values of ['1','c','ks'].values()){
  	console.log('values',values);
  }
//entries遍历值和下标
	for(let  [index,value] of ['1','c','ks'].entries()){
		console.log('value、keys',index,value);
	}

}


{
	//copyWithin替换位置,
	//第一个值是从下标为1的数开始，第二个值是起始值，第三值是结束值(不包含值)
	console.log([1,2,3,4,5].copyWithin(1,0,4));
}

{	
	//find数值,查找大于3的数,只返回一个数
	console.log([1,2,3,4,5].find(function(item){return item>3}));//返回 4
	//findIndex 返回下标,只返回一个数
	console.log([1,2,3,4,5].findIndex(function(item){return item>3}))
}

{
//includes 是否包含这个值
console.log('number',[1,2,NaN].includes(1));
console.log('number',[1,2,NaN].includes(NaN));//true
}