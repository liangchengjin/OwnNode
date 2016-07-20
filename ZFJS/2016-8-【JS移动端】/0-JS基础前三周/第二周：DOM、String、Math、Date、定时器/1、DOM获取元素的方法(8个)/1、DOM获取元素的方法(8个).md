# 1、DOM获取元素的方法(8个)
#### css样式
  ```
  *{margin:0; padding:0;}
  body{font-family: "Hiragino Sans GB","Microsoft Yahei",arial,\5b8b\4f53,"Helvetica Neue",Helvetica,STHeiTi,sans-serif;}

  .tab{
  border:1px solid red;
  }
```
#### html元素
```
  <div id="tab" class="tab">
      <ul>
          <li>视频</li>
          <li>新闻</li>
          <li>综艺</li>
      </ul>
      <div name="cc"></div>
      <div></div>
      <div name="cc"></div>
  </div>

  <label><input type="radio" name="sex" checked="true" value="男">男</label>
  <label><input type="radio" name="sex" value="女">女</label>
  <label><input type="radio" name="marry" checked="true">已婚</label>
  <label><input type="radio" name="marry">未婚</label>
  <input type="button" id="btn" value="获取性别">
```

## DOM：document object model 文档对象模式
## BOM: 就是描述整个html页面中节点关系的图谱

#### 1. 文档对象模型，在DOM中，提供了很多的获取元素的方法和之间关系的属性以及操作这些元素的方法
#### -1:获取页面中元素的方法
```
   1).document.getElementById("元素的ID");
	在整个文档中，通过元素的ID获取到这个元素对象(获取的是一个元素)

	注意点：如果页中id重复了，那这个方法默认只获取第一个元素

    01.在IE6、7中，会把表单元素(input)的name属性值当着ID来使用
		var oDiv = document.getElementById("tab");
		console.log(oDiv);
		console.log(oDiv.tagName);

	02.在IE6、7中, 不区分ID的大小写
	   在项实战注意：不要让表单元素的name和其他元素的id名重复、不要用id的大小写来区分我们的不同元素
	   如果没有获取，返回的结果是null

		<input type="text" name="tab">
		<div id="tab">
			<ul>
				<li>视频</li>
				<li>新闻</li>
				<li>综艺</li>
			</ul>
			<div></div>
			<div></div>
			<div></div>
		</div>

		var oDiv = document.getElementById("tab");
		console.log(oDiv);
		console.log(oDiv.tagName);

	3).我们可以直接的用ID来代表当前这个元素的对象,我们可以不用写 var oDiv = document.getElementById("tab");
		<div id="tab">
			<ul>
				<li>视频</li>
				<li>新闻</li>
				<li>综艺</li>
			</ul>
			<div></div>
			<div></div>
			<div></div>
		</div>
		var oDiv = tab; // 这样也就可以直接获取id元素
		console.log(oDiv)

		改变tab的样式,可以直接如下写法
		tab.style.border = "1px solid red";
```

#### -2:通过元素的标签名，来获取一组元素(有几个获取几个)
```
		1).document.getElementsByTagName("元素标签名");

		    在整个文档中，通过元素的标签名获取一组元素
			var oLis = document.getElementsByTagName("li");
			console.log(oLis);

		2).获取的是一个对象数组类型结果，并且是一个类数组(以数字作为索引，索引从0开开始，逐级递增，索引代表的是当前对应的某一个元素，有一个叫做length的属性代表获取的个数)
			var oTab = document.getElementById("tab");
			var oLis = oTab.getElementsByTagName("li");
			console.dir(oLis);

			HTMLCollection[3]
				0: li
				1: li
				2: li
				length: 3
				__proto__: HTMLCollection

			oLis.length 代表获取元素的个数
			oLis["length"] 也可以通过中括号 ["length"] 来获取它的个数
			oLis[0] 获取第一个li
			oLis.item(0) 也可通过item(0) 来获取第一个li元素



			document称之为上下文(context)，就是我们自己可以限定当前获取元素的范围
			var oTab = document.getElementById("tab");
			var oLis = oTab.getElementsByTagName("li");
			console.dir(oLis);
```
#### -3.context.getElementsByName() 通过元素name属性的值来获取一组元素
```
		<div name="cc"></div>
		<div><>
		<div na/divme="cc"></div>

		操作方法：
		var oCt = document.getElementsByName("cc");
		console.log(oCt);

		[div]
			0: div
			length: 1
			__proto__: NodeList

		注意：在ie浏览器上只对表单元素起作用
		这个方法应用于获取具有同样name表单元素


		<label><input type="radio" name="sex" checked="true">男</label>
		<label><input type="radio" name="sex">女</label>
		<label><input type="radio" name="marry" checked="true">已婚</label>
		<label><input type="radio" name="marry">未婚</label>

		// 第一种方法
			var oBtn = document.getElementsByName("btn");
			oBtn.onclick = function(){
				var cur = "";
				for(var i = 0; i < oSex.length; i++){
					if(oSex[i].checked === true){
						cur = oSex[i].value;						
						break; // 单选只能有珍上选中，当前选中，那后面肯定就没的选中
					}
				}
				console.log(cur);
			}

		// 第二种方法：正确的
			var oBtn = document.getElementById("btn");
			oBtn.onclick = function(){
				var oSex = document.getElementsByName("sex");
				var cur = "";
				for(var i = 0; i < oSex.length; i++){
					if(oSex[i].checked === true){
						cur = oSex[i].value;						
						break; // 单选只能有珍上选中，当前选中，那后面肯定就没的选中
					}
				}
				console.log(cur);
			}
```

#### -4.context.getElementsByClassName(); 通过元素的类名(class值)
```		
	01.是项目中最常用的一种方法，但是、这个方法不兼容，在IE6~8中会报错

	02.获取多个的这几个方法，即使你获取的只有一个，他也是类数组，也是一个集合, 如果相用其中的第一个，你也要通过索引拿出来用

	var oList = document.getElementsByClassName("tab");
	console.dir(oList[0]);  // div#tab.tab

	console.dir(oList);
		HTMLCollection[1]
		0: div#tab.tab
		length: 1
		tab: div#tab.tab
		__proto__: HTMLCollection
```

#### -5.获取当前屏幕的宽度和高度
```
	  1). document.documentElement	// 获取HTML元素
	  2). document.body				// 获取body元素

		var curWidth = document.documentElement.clientWidth || document.body.clientWidth; // 获取当前屏幕的宽度
		console.log(curWidth);

		var curHeight = document.documentElement.clientHeight || document.body.clientHeight; // 获取当前屏幕的高度
		console.log(curHeight);
```
#### -6. 在移动端我们获取元素常用的方法(IE6~8不兼容)
	```
			这是HTML5提供的新方法

			1). document.querySelector();		//获取一个
			2). document.querySelectorAll();	//获取多个 类数组集合

				var oDiv =  document.querySelector("#tab");
				// 括号里可以这个写的 ("#id") (".class") ("li")
				console.log(oDiv);

				var oList = document.querySelectorAll("#tab li");

			3).获取页面所有的Input的type类型的radio
				var oRadio = document.querySelectorAll("input[type='radio']");		

			4). querySelectior、 jQuery中的选择器参考是css选择器的规则

	```
