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
