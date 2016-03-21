/*var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

function tabChange(n){
    for(var i = 0; i < oLis.length; i++){
        oLis[i].className = "";
        oDivs[i].className = "";
    }

    oLis[n].className = "select";
    oDivs[n].className = "select";
}

for(var i = 0; i < oLis.length; i++){
    oLis[i].own = i;
    oLis[i].onmouseover = function(){
        tabChange(this.own);
    }
}*/


// 合并后的方法
    var oTab = document.getElementById("tab");
    var oLis = oTab["getElementsByTagName"]("li");
    var oDivs = oTab.getElementsByTagName("div");

    for(var i = 0 ; i < oLis["length"]; i++){
        var oLi = oLis[i];
        oLi["own"] = i;
        oLi["onmouseover"] = function(){
            for(var j = 0; j < oLis.length;j++){
                oLis[j]["className"] = "";
                oDivs[j]["className"] = "";
            }
            this.className = "select";
            oDivs[this["own"]]["className"] = "select";
        }
    };

