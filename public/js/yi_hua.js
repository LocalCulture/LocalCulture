
/*主_01*/
//画板选择
$('#chuanyi').click(function () {
   $('#huaban01').css('display','');
    $('#huaban02').css('display','none');
    $('#chuanyi').addClass("xiahuaxian");
    $('#tianse').removeClass("xiahuaxian");
});
$('#tianse').click(function () {
    $('#huaban01').css('display','none');
    $('#huaban02').css('display','');
    $('#tianse').addClass("xiahuaxian");
    $('#chuanyi').removeClass("xiahuaxian");
});
//画板选择
//填色
<!--选栏左右移动JS-->
var xl_cishu=$('.yingcang_k div.item').length-4;
var xl_cot=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
console.log("xl_cishu:"+xl_cishu);
console.log("xl_cot:"+xl_cot);
function xl_nex(){
    if(xl_cot<=xl_cishu){
        console.log("xl_cota:"+xl_cot);
        $('.yingcang_k div.item').eq(xl_cot).animate({'margin-top':'-180px'},500);
        xl_cot++;
        console.log("xl_cotb:"+xl_cot);
    }
}
function xl_pre(){
    if(xl_cot>0){
        xl_cot--;
        console.log("xl_cot:"+xl_cot);
        $('.yingcang_k div.item').eq(xl_cot).animate({'margin-top':'8px'},500);
    }
}
<!--选栏左右移动JS-->
//填色
/*主_01*/