{
	let regex=new RegExp('s','i');
	let regex2=new RegExp(/xyzzoo/i);
	console.log(regex.test('xsyz121'),regex2.test('xxyzzoo'));

	let regex3=new RegExp(/xyz/ig,'i');//在es6中后面的i，会覆盖前面的ig
	console.log(regex3.flags);//flags是Es6新增标识符,用于获取检测正则对象的修饰符
}



//Es6中增加了 y 和 u 修饰符
{
	//g 和 y 修饰符的区别：
	//首先都是全局匹配, g修饰符匹配到bbb后，可以越过下划线_,继续匹配bb,而y则不可以越过下划线 _ ;导致匹配不到。
	let s='bbbb_bb_b';
	let a1=/b+/g;//执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
	let a2=/b+/y;//执行全局匹配
	//exec() 方法用于检索字符串中的正则表达式的匹配。
	console.log('noe',a1.exec(s),a2.exec(s));
	console.log('two',a1.exec(s),a2.exec(s)); //g：a1 匹配到bb; y:a2匹配到null;
	console.log('three',a1.exec(s),a2.exec(s));//g:a1 匹配到b; y:a2匹配到第一次的bbbb,因为无法跨越下划线 _ ;

	//sticky用于检测正则是否开启了带y表达式的功能。
	console.log(a1.sticky,a2.sticky);
}

	{
		//修饰符U
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//这里没加u,会把test里的数值当作两个字符
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//这里加了u,会把test里的数值当作一个字符


	}