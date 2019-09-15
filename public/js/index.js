//导航点击后颜色+定位
function Redirect(type) {
    document.getElementById("nav_xiang").style.color="#fff";
    document.getElementById("nav_yu").style.color="#fff";
    document.getElementById("nav_su").style.color="#fff";
    document.getElementById("nav_yi").style.color="#fff";

    var id = ""; //定位ID
    if (type === "1") {
        id = "#home_xiang"; //乡
    }
    else if (type === "2") {
        id = "#home_yu"; //渔
    }
    else if (type === "3") {
        id = "#home_su"; //俗
    }
    else if (type === "4") {
        id = "#home_yi"; //艺
    }
    if (id !== "") {
        $("body,html").animate({ scrollTop: $(id).offset().top + 50 }, 500); //scroll top offset 指的是滚动条相对于其顶部的偏移
    }
}

// 乡景导航栏
function displaySubMenu(x) {

    var subMenu = x.getElementsByTagName("ul")[0];

    subMenu.style.display = "block";

}

function hideSubMenu(x) {

    var subMenu = x.getElementsByTagName("ul")[0];

    subMenu.style.display = "none";

}
// 乡景导航栏

//渔
function yu_dong01i(x)
{
    document.getElementById("yu_dong01_btn1").src="images/tp_home/轮船2.png";
    document.getElementById("yu_dong01_btn1").style.cursor="pointer";
}
function yu_dong01o(x)
{
    document.getElementById("yu_dong01_btn1").src="images/tp_home/轮船.png";
}

function yu_dong02i(x)
{
    document.getElementById("yu_dong01_btn2").src="images/tp_home/渔网2.png";
    document.getElementById("yu_dong01_btn2").style.cursor="pointer";
}
function yu_dong02o(x)
{
    document.getElementById("yu_dong01_btn2").src="images/tp_home/渔网.png";
}

function yu_dong03i(x)
{
    document.getElementById("yu_dong01_btn3").src="images/tp_home/鱼类2.png";
    document.getElementById("yu_dong01_btn3").style.cursor="pointer";
}
function yu_dong03o(x)
{
    document.getElementById("yu_dong01_btn3").src="images/tp_home/鱼类.png";
}
//渔

//俗
function su_dong01i(x)
{
    document.getElementById("su_jiesu").src="images/tp_home/节日%20(1).png";
    document.getElementById("su_btn1").style.display="block";
}
function su_dong01o(x)
{
    document.getElementById("su_jiesu").src="images/tp_home/节日.png";
    document.getElementById("su_btn1").style.display="none";
}
function su_dong02i(x)
{
    document.getElementById("su_xisu").src="images/tp_home/孩子%20(1).png";
    document.getElementById("su_btn2").style.display="block";
}
function su_dong02o(x)
{
    document.getElementById("su_xisu").src="images/tp_home/孩子.png";
    document.getElementById("su_btn2").style.display="none";
}
function su_dong03i(x)
{
    document.getElementById("su_jisi").src="images/tp_home/祭拜台%20(1).png";
    document.getElementById("su_btn3").style.display="block";
}
function su_dong03o(x)
{
    document.getElementById("su_jisi").src="images/tp_home/祭拜台.png";
    document.getElementById("su_btn3").style.display="none";
}
function su_dong04i(x)
{
    document.getElementById("su_chuanshuo").src="images/tp_home/佛%20(1).png";
    document.getElementById("su_btn4").style.display="block";
}
function su_dong04o(x)
{
    document.getElementById("su_chuanshuo").src="images/tp_home/佛.png";
    document.getElementById("su_btn4").style.display="none";
}
document.getElementById("su_01").addEventListener("mouseover",su_dong01i,false);
document.getElementById("su_01").addEventListener("mouseout",su_dong01o, false);
document.getElementById("su_02").addEventListener("mouseover",su_dong02i,false);
document.getElementById("su_02").addEventListener("mouseout",su_dong02o,false);
document.getElementById("su_03").addEventListener("mouseover",su_dong03i,false);
document.getElementById("su_03").addEventListener("mouseout",su_dong03o,false);
document.getElementById("su_04").addEventListener("mouseover",su_dong04i,false);
document.getElementById("su_04").addEventListener("mouseout",su_dong04o,false);

function gotochuan() {
    window.location.href='yi_chuan';
}
function gotosheng() {
    window.location.href='yi_sheng';
}
function gotohua() {
    window.location.href='yi_hua';
}
function gotodiao() {
    window.location.href='yi_diao';
}