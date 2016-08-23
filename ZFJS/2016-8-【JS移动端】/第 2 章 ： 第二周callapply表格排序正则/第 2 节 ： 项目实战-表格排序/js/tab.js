

var oTab = document.getElementById("tab");
var tHead = oTab.tHead;		// 获取表格的头部的第一个
//var oThs = tHead.rows[0];	// 获取所有的表样的行 [0] 是代表第一列 "rows" 是代表所的行
//var oCells = oThs.cells;	// 获取所有head表格列	"cells" 是代表所有的列

// 获取头部下面的第一行的所有的列
var oThs = tHead.rows[0].cells;
// 获取表的第一个tbody标签 
var tBody = oTab.tBodies[0];
// 获取tbody下所有的行
var oRows = tBody.rows;
var data = null;

// 1. 首先获取后台(data.txt)中的数据-->也就是 "JSON格式的字符串", 用Ajax(async javascript and xml)
	//1). 先创建一个Ajax对象
	var xhr = new XMLHttpRequest;

	//2).打开我们需要请求数据的那个文件地址
	xhr.open("get", "json/data.json", false);

	//3).监听请求的状态		
	xhr.onreadystatechange = function(){
		if(this.readyState === 4 && /^2\d{2}$/.test(xhr.status)){		
				var val = xhr.responseText;
				data = utils.jsonParse(val);
				//console.log(data);				
			}
	};
	//4).发送请求
	xhr.send(null);
// 2. 现实我们的数据绑定
console.log(data);


function bind(){
	var frg = document.createDocumentFragment();
	for(var i = 0; i < data.length; i++){
		var cur = data[i];
		var oTr = document.createElement("tr"); // -->每一次循环创建一个tr
		// 每一个tr中还需要创建四个td，因为每一个对象中有四组键值对
		for(var key in cur){
			var oTd = document.createElement("td");			
			if(key === "sext"){
				oTd.innerHTML = cur[key] === 0? "男" : "女";
			}			
			oTr.appendChild(oTd);
		}
		frg.appendChild(oTr);
	}
	tBody.appendChild(frg);
	frg = null;
}

bind();

// 现实隔行变色
function changeBg(){
	for(var i = 0; i < oRows.length; i++){
		oRows[i].className = i % 2 === 1 ? "bg" : null;
	}
}
