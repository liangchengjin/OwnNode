// 第一步：分析需求这个思路

    // 选项卡的思路

    // 鼠标滑到某一个li上面，先让所有的li个div都没有select样式，然后再让当前有的这个select样式

// 第二步：要操作谁就有先获取谁
    var oTab = document.getElementById("tab");
    var oLis = oTab.getElementsByTagName("li");

    var oDivs = oTab.getElementsByTagName("div");

// 第三步：制定一个功能方法,实现一个功能方法
    /**
     * nIndex 是我我们定义的形参，代表当前被选中元素的索引
     * @param nIndex
     */
    function tabCange(nIndex){
        for(var i = 0; i < oLis.length; i++){
            oLis[i].className = "";
            oDivs[i].className = "";
        }
        oLis[nIndex].className = "select";
        oDivs[nIndex].className = "select";
    }

// 第四步：给我们的li绑定鼠标称上去的事件
/**
 * js加载完后(for循环加载完成 i = 3)，我们才会手动触发omouseover事件
 */
for(var i = 0; i < oLis.length; i++){
        oLis[i].own = i; // 在每一次循环的时候，把每一个li的索引定义在自己的自定义属性own上
        oLis[i].onmouseover = function(){
            tabCange(this.own);
        }

    }


