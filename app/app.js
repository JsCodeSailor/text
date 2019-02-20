module.exports="hello webpack";

function test() {
	for(let  a=0;a<3;a++){
		console.log(a)
	}
	
	console.log(a);
}
test();

 function test(){
 	const pi=3.1415926;
 	 const p={a:1}
 	 p.b=3;
 	 p.c=4;
 	console.log(pi,p);
 }
test();



{

let a1=Symbol(); 
let a2=Symbol();
console.log(a1===a2); //false 值不相等
let a3=Symbol.for('a3');//Symbol.for('a3')调用这个a3这个值，如果a3这个值在全局中注册过，就返回这个值。如果没有注册过就调用symbol生成一个独一无二的值;

let a4=Symbol.for('a3'); //此时的a4,拿到的是a3的值。
console.log(a3===a4);//true

}

{
	let a1=Symbol.for('abc');
	let obj={
	[a1]:'123','abc':345,'c':456
	};
	console.log(obj);

//通过let of  无法取得 sybmol属性的值。
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
	}
//通过Object.getOwnPropertySymbols 可以拿到Symbol的值，但是拿不到其他值。
Object.getOwnPropertySymbols(obj).forEach(function(item){
	console.log(obj[item]);
})

//Reflect.ownKeys 可以拿到所有的值
Reflect.ownKeys(obj).forEach(function(item){
	console.log('ownKeys',item,obj[item])
})
}


