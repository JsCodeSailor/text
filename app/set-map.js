//set中集合元素不能重复

 {
 	let list=new Set();
 	list.add(6);
 	list.add(7); //添加

 	console.log('size:',list.size,list);//长度为2
 }

 {
 	let arr=[1,2,3,4,5];
 	let list=new Set(arr);//把数组填进去，list就是成为了一个集合。
 	console.log(list.size);//5
 }

 {
 	//set的唯一性
 	let list=new Set();
 	list.add(1);
 	list.add(2);
 	list.add(2);//自动去重，定义了一个后，第二个定义无效。
 	list.add("2");//字符串和number数据类型不一样，所以可以显示
 	console.log('size',list.size,list);

 	let arr=[1,2,3,1,2];  //set的唯一性，数据类型不一样，不能去重，例如2和'2';
 	let list2=new Set(arr);
 	console.log(list2);
 }

{
	//set() 几个方法。
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);
	console.log('size',list.size);//4
	console.log('add',list.add('yj'));//添加
	console.log('size',list.size);//添加以后
	console.log('has',list.has('add'));//查出找是否存在add
	console.log('delete',list.delete('add'),list);//删除
	console.log('size',list.size);
	console.log('clear',list.clear(),list);//清空
}

//遍历let.....of...

{
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	for(let  key of list.keys()){     //key()、value()、list  值都是一样的
		console.log("key", key);
	}

	for(let value of list.values()){
		console.log("values",value);
	}

	for(let values2 of list){   //list.value 不写value，返回的也是values
		console.log("values2",values2);
	}


	//entries 遍历key和value

	for(let [key,values] of list.entries()){
		console.log("entries",key,values);
	}

	//forEach 
	list.forEach(item=>console.log("item",item))
}


	
	/*
	weakset 
	1、和set的区别是，WeakSet只能处理对象，弱类型
	2、不能垃圾回收，不能遍历，没有size方法  没有clear属性
	*/
{
	let weakList=new WeakSet();//和set的区别是，WeakSet只能处理对象，弱类型
	let arg={};
	weakList.add(arg);
	console.log('weakList',weakList);
}



//Map
{
	let map=new Map();
	let arr=['123']

	map.set(arr,456);//key,value
	console.log(map,map.get(arr));//get() 取值
}


{
	let map=new Map([['a',123],['b',456]]);
	console.log(map);
	console.log(map.size);
	console.log(map.delete('a'),map);
	console.log('clear',map.clear(),map);
}

 
{

	/*
	WeakMap 
	1、和set的区别是，WeakMap只能处理对象，弱类型
	2、不能垃圾回收，不能遍历，没有size方法  没有clear属性
	*/
	let weakmap=new WeakMap();
	let o={};
	weakmap.set(o,123);
	console.log(weakmap.get(o));
}

/*
Map 和 Array的对比
Set 和 Array的对比
*/
