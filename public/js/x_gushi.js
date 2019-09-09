var  dianzan=0;
function dianzan_b() {
    if(dianzan==0)
    {
        document.getElementById("dianzan").src="images/tp_xiang/gushi/dianzan_k.png";
        dianzan=1;
    }
    else
    {
        document.getElementById("dianzan").src="images/tp_xiang/gushi/dianzan_g.png";
        dianzan=0;
    }
}