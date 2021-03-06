```
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <title>2、DOM中的节点和关系属性</title>
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <!--css-->
  <style>
  *{margin:0; padding:0;}
  body{font-family: "Hiragino Sans GB","Microsoft Yahei",arial,\5b8b\4f53,"Helvetica Neue",Helvetica,STHeiTi,sans-serif;}

  </style>
 </head>
 <body>
  <div id="div1">
	<h1>2016年最前沿的技术休息</h1>
	<!--以下是2016最新的课程体系-->
	<ul>
		<li>HTML5+CSS3课程</li>
		<li>JavaScript课程</li>
		<li>NodeJs课程</li>
		<li>Java课程</li>
		<li>SQL课程</li>
	</ul>
  </div>  
  ```

# <font color=#F00; face="微软雅黑" >获取关系的属性和节点</font>

##### <font color=#FFF>节点：Node 是一个页面中的标签、文字、注释....都是节点

	var oDiv = document.getElementById("div1");
	console.log(oDiv);

	// 获取关系的属性和节点，
		// 返回的结果都是以数组形式的

	//1. childNodes 是获取所有的子节点，
		var oDiv = document.getElementById("div1");
		var oNode = oDiv.childNodes;
		console.log(oNode); // [text, h1, text, ul, text]
		console.log(oNode[1]); // 这是找到它的第一个元素内容

	// 2.children	是获取所有的元素子节点
		var oDiv = document.querySelector("#div1");
		var oChildren = oDiv.children;
		console.log(oChildren); // [h1, ul]		
		console.log(oChildren[0]);

	// 3.parentNode	是获取父亲的节点
		var oDiv = document.querySelector("#div1");
		var oParentNode = oDiv.parentNode;
		console.log(oParentNode);	// <body>...</body>

	// 4.previousSibling 获取上一个哥哥节点，也就是同一个的第一个节点
		var oDiv = document.querySelector("#div1");
		var oPreviousSibling = oDiv.previousSibling;
		console.log(oPreviousSibling);	// #text

	// 5.nextSibling	获取下一个弟弟节点
		var oDiv = document.querySelector("#div1");
		var oNextSibling = oDiv.nextSibling;
		console.log(oNextSibling);	// #text


	// 6.firstChild		获取所有子节点中的第一个
		var oDiv = document.querySelector("#div1");
		var oFirstChild = oDiv.firstChild;
		console.log(oFirstChild);	// #text

	// 7.lastChild		获取所有的子节点中的最后一个
		var oDiv = document.querySelector("#div1");
		var oLastChild = oDiv.lastChild;
		console.log(oLastChild)		// #text



	// 8.在js中需要我们掌握的节点类型
		/*
			nodeType(节点类型)		nodeName(节点名)		nodeValue(节点值)
				1					   大写的标签名				null
				3						#text					文字内容
				8						#comment				注释内容
				9						#document				null


			重点：在标准浏览器下，我们把空格space(空格) Enter(回车)都当我们的文本节点处理
		*/
		var oDiv = document.getElementById("div1");
		console.log(oDiv.childNodes[3]);
		// 1). 元素节点(元素标签)			
			console.log(oDiv.nodeType);		// 1
			console.log(oDiv.nodeName[3]);
		// 2). 文本节点(文字)		
			console.log(oDiv.nodeName);		// DIV
		// 3). 注释节点(注释)
			console.log(oDiv.nodeValue);	// Null
		// 4). document

	// 9.方法：模拟我们的children方法，实现获取指定元素下的元素子节点

		/*
		  getMyChildren: 获取所定元素下的所有的元素节点
		  @parameter:
			 ele: 我们要获取谁下面的，就把谁传递进来
			 tagName: 你告诉我的获取哪种类型的元素，例如："div"就是代表只获取div元素节点
		  @return:
			 我们最后获取的元素子节点

			by 呈琛  on 2016/06/29
		*/
		function getMyChildren(ele, tagName){
			// 1. 弄一个空盒子放我们想的元素，然后获取ele下载所有的子节点(包含文本、注释、元素)
			var ary = [];
			var nodes = ele.childNodes;
			// 2. 循环所有的子节点
			for(var i = 0; i < nodes.length; i++){
			// 3. 把每一次循环得到的对应的节点赋值给cur,而且可能是文本，可能是注释，可能是元素....
				var cur = nodes[i];
			// 4. 我们只需要把元素的放到我们的盒子中就可以了，那么我们就通过nodeType等于1的就是我们的元素节点的这个规律，把我们的元素节点放到盒子中
				if(cur.nodeType === 1){			
					if(tagName){
						// 5.如果要你传递给我 tagName了, 我就进一步筛选,在这里我们的nodeName是大写，我们的tagName可能是大写，也可能是小写，所以我们先把两边调用toLowerCase都转换成小写在比较
							/*如果你不传就是 undefined*/

							if(cur.nodeName.toLowerCase() === tagName.toLowerCase()){
								ary.push(cur);
							}
					}else{
						// 6.如果你没有传，默认就把所有的元素都扔到盒子里
						ary.push(cur);
					}

				}
			}
			return ary;
		}

		var oDiv = document.querySelector("#div1");
		console.log(getMyChildren(oDiv,"ul"));	 // [h1, ul]

  </script>
 </body>
</html>
