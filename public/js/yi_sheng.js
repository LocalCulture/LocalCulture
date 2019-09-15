/*绳结类型切换*/

    var oDiv = document.getElementById("list01");
    var lis = oDiv.getElementsByTagName("li");
    var oDivCon = document.getElementById("listCon");
    var lisDiv = oDivCon.getElementsByTagName("article");
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onclick = function(){
            show(this.index);
        }
    }
    function show(a){
        for(var j=0;j<lis.length;j++){
            lis[j].className = "";
            lisDiv[j].className = "";
        }
        lis[a].className = "cur";
        lisDiv[a].className = "cur";
    }

/*绳结类型切换*/

/*类型卡片滑动*/
//a
$("#xl_01").click(function(){
    $("#long_neirong_a").animate({'margin-left':'0'},800);
    $("#xl_01").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_02").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_03").css({"background-color":"white","color":'#ACACAC'});
});
$("#xl_02").click(function(){
    $("#long_neirong_a").animate({'margin-left':'-1800px'},800);
    $("#xl_02").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_01").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_03").css({"background-color":"white","color":'#ACACAC'});
});
$("#xl_03").click(function(){
    $("#long_neirong_a").animate({'margin-left':'-3600px'},800);
    $("#xl_03").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_01").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_02").css({"background-color":"white","color":'#ACACAC'});
});
//a
//b
$("#xl_01b").click(function(){
    $("#long_neirong_b").animate({'margin-left':'0'},800);
    $("#xl_01b").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_02b").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_03b").css({"background-color":"white","color":'#ACACAC'});
});
$("#xl_02b").click(function(){
    $("#long_neirong_b").animate({'margin-left':'-1800px'},800);
    $("#xl_02b").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_01b").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_03b").css({"background-color":"white","color":'#ACACAC'});
});
$("#xl_03b").click(function(){
    $("#long_neirong_b").animate({'margin-left':'-3600px'},800);
    $("#xl_03b").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_01b").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_02b").css({"background-color":"white","color":'#ACACAC'});
});
//b
//c
$("#xl_01c").click(function(){
    $("#long_neirong_c").animate({'margin-left':'0'},800);
    $("#xl_01c").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_02c").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_03c").css({"background-color":"white","color":'#ACACAC'});
});
$("#xl_02c").click(function(){
    $("#long_neirong_c").animate({'margin-left':'-1800px'},800);
    $("#xl_02c").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_01c").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_03c").css({"background-color":"white","color":'#ACACAC'});
});
$("#xl_03c").click(function(){
    $("#long_neirong_c").animate({'margin-left':'-3600px'},800);
    $("#xl_03c").css({"background-color":"#3a9dff","color":'white'});
    $("#xl_01c").css({"background-color":"white","color":'#ACACAC'});
    $("#xl_02c").css({"background-color":"white","color":'#ACACAC'});
});
//c
/*类型卡片滑动*/
