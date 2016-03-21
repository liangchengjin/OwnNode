function log(content){
	if(console){
		console.dir("【输出的结果为】：" + content);
	}else{
		alert("【输出的结果为】：" + content);
	}
}
