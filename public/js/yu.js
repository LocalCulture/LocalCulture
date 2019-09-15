<!--渔舟唱晚，下拉导航栏-->
$(function(){
    $('#chanpin'+1).show();
    // $('#chanpin'+1).hide();
    $('#chanpin'+2).hide();
    $('#chanpin'+3).hide();
    $('#chanpin'+4).hide();

    var li = $('#tabs');
    var cc=$('#tabs option');
    var len=cc.length;
    var i;
    li.change(function(){
        for(var j= 0;j<=len;j++){
            $('#chanpin'+j).hide();
        }
        //alert(123);
        var t = parseInt(li.get(0).selectedIndex);
        for(i= 0;i<len;i++){
            if(t===i){
                // alert(i);
                $('#chanpin'+(i+1)).show();

            }
        }
    });
});
<!--渔舟唱晚动态效果代码-->
function chanpin1_show1()
{
    document.getElementById("chanpin1_1").style.display='block';
    document.getElementById("chanpin1_2").style.display='none';
    document.getElementById("chanpin1_3").style.display='none';
    document.getElementById("chanpin1_4").style.display='none';
    document.getElementById("chanpin1_5").style.display='none';
    document.getElementsByClassName("button111")[0].className = 'button11';
}
function chanpin1_show2()
{
    document.getElementById("chanpin1_1").style.display='none';
    document.getElementById("chanpin1_2").style.display='block';
    document.getElementById("chanpin1_3").style.display='none';
    document.getElementById("chanpin1_4").style.display='none';
    document.getElementById("chanpin1_5").style.display='none';
    document.getElementsByClassName("button11")[0].className = 'button111';
}
function chanpin1_show3()
{
    document.getElementById("chanpin1_1").style.display='none';
    document.getElementById("chanpin1_2").style.display='none';
    document.getElementById("chanpin1_3").style.display='block';
    document.getElementById("chanpin1_4").style.display='none';
    document.getElementById("chanpin1_5").style.display='none';
    document.getElementsByClassName("button11")[0].className = 'button111';
}
function chanpin1_show4()
{
    document.getElementById("chanpin1_1").style.display='none';
    document.getElementById("chanpin1_2").style.display='none';
    document.getElementById("chanpin1_3").style.display='none';
    document.getElementById("chanpin1_4").style.display='block';
    document.getElementById("chanpin1_5").style.display='none';
    document.getElementsByClassName("button11")[0].className = 'button111';
}
function chanpin1_show5()
{
    document.getElementById("chanpin1_1").style.display='none';
    document.getElementById("chanpin1_2").style.display='none';
    document.getElementById("chanpin1_3").style.display='none';
    document.getElementById("chanpin1_4").style.display='none';
    document.getElementById("chanpin1_5").style.display='block';
    document.getElementsByClassName("button11")[0].className = 'button111';
}
function chanpin2_show1()
{
    document.getElementById("chanpin2_1").style.display='block';
    document.getElementById("chanpin2_2").style.display='none';
    document.getElementById("chanpin2_3").style.display='none';
    document.getElementById("chanpin2_4").style.display='none';
    document.getElementById("chanpin2_5").style.display='none';
    document.getElementsByClassName("button222")[0].className = 'button22';
}
function chanpin2_show2()
{
    document.getElementById("chanpin2_1").style.display='none';
    document.getElementById("chanpin2_2").style.display='block';
    document.getElementById("chanpin2_3").style.display='none';
    document.getElementById("chanpin2_4").style.display='none';
    document.getElementById("chanpin2_5").style.display='none';
    document.getElementsByClassName("button22")[0].className = 'button222';
}
function chanpin2_show3()
{
    document.getElementById("chanpin2_1").style.display='none';
    document.getElementById("chanpin2_2").style.display='none';
    document.getElementById("chanpin2_3").style.display='none';
    document.getElementById("chanpin2_4").style.display='block';
    document.getElementById("chanpin2_5").style.display='none';
    document.getElementsByClassName("button22")[0].className = 'button222';
}
function chanpin2_show4()
{
    document.getElementById("chanpin2_1").style.display='none';
    document.getElementById("chanpin2_2").style.display='none';
    document.getElementById("chanpin2_3").style.display='none';
    document.getElementById("chanpin2_4").style.display='none';
    document.getElementById("chanpin2_5").style.display='block';
    document.getElementsByClassName("button22")[0].className = 'button222';
}
function chanpin2_show5()
{
    document.getElementById("chanpin2_1").style.display='none';
    document.getElementById("chanpin2_2").style.display='none';
    document.getElementById("chanpin2_3").style.display='none';
    document.getElementById("chanpin2_4").style.display='none';
    document.getElementById("chanpin2_5").style.display='block';
    document.getElementsByClassName("button22")[0].className = 'button222';
}
function chanpin3_show1()
{
    document.getElementById("chanpin3_1").style.display='block';
    document.getElementById("chanpin3_2").style.display='none';
    document.getElementById("chanpin3_3").style.display='none';
    document.getElementById("chanpin3_4").style.display='none';
    document.getElementsByClassName("button33")[0].className = 'button333';
}
function chanpin3_show2()
{
    document.getElementById("chanpin3_1").style.display='none';
    document.getElementById("chanpin3_2").style.display='block';
    document.getElementById("chanpin3_3").style.display='none';
    document.getElementById("chanpin3_4").style.display='none';
    document.getElementsByClassName("button33")[0].className = 'button333';
}
function chanpin3_show3()
{
    document.getElementById("chanpin3_1").style.display='none';
    document.getElementById("chanpin3_2").style.display='none';
    document.getElementById("chanpin3_3").style.display='block';
    document.getElementById("chanpin3_4").style.display='none';
    document.getElementsByClassName("button33")[0].className = 'button333';
}
function chanpin3_show4()
{
    document.getElementById("chanpin3_1").style.display='none';
    document.getElementById("chanpin3_2").style.display='none';
    document.getElementById("chanpin3_3").style.display='none';
    document.getElementById("chanpin3_4").style.display='block';
    document.getElementsByClassName("button33")[0].className = 'button333';
}
function chanpin4_show1()
{
    document.getElementById("chanpin4_1").style.display='block';
    document.getElementById("chanpin4_2").style.display='none';
    document.getElementById("chanpin4_3").style.display='none';
    document.getElementsByClassName("button444")[0].className = 'button44';
}
function chanpin4_show2()
{
    document.getElementById("chanpin4_1").style.display='none';
    document.getElementById("chanpin4_2").style.display='block';
    document.getElementById("chanpin4_3").style.display='none';
    document.getElementsByClassName("button44")[0].className = 'button444';
}
function chanpin4_show3()
{
    document.getElementById("chanpin4_1").style.display='none';
    document.getElementById("chanpin4_2").style.display='none';
    document.getElementById("chanpin4_3").style.display='block';
    document.getElementsByClassName("button44")[0].className = 'button444';
}

<!--授人以鱼展开全屏动态效果-->
var fsmActual = document.createElement('div');
fsmActual.setAttribute('id', 'fsm_actual');
document.body.appendChild(fsmActual);
var $fsm = document.querySelectorAll('.fsm');
var $fsmActual = document.querySelector('#fsm_actual');
$fsmActual.style.position = "absolute";
var position = {};
var size = {};

var openFSM = function(event) {
    var $this = event.currentTarget;
    position = $this.getBoundingClientRect();
    var total = document.body.clientHeight;

    size = {
        width: window.getComputedStyle($this).width,
        height: window.getComputedStyle($this).height
    };
    $fsmActual.style.position = "absolute";
    $fsmActual.style.top =4195+'px';
    $fsmActual.style.left = position.left + 'px';
    $fsmActual.style.height = size.height;
    $fsmActual.style.width = size.width;
    $fsmActual.style.margin = $this.style.margin;

    setTimeout(function(){
        var classes = $this.classList.value.split(' ');
        for (var i = 0; i < classes.length; i++) {
            $fsmActual.classList.add(classes[i]);
        }
        $fsmActual.classList.add('growing');
        $fsmActual.style.height = '100vh';
        $fsmActual.style.width = '100%';
        $fsmActual.style.top = total-document.getElementById("yuzhou").offsetTop+100+ 'px';
        $fsmActual.style.left = '0';
        $fsmActual.style.margin = '0';
    }, 10);
    setTimeout(function(){
        $fsmActual.innerHTML = $this.innerHTML;
        // $fsmActual.appendChild();
        $fsmActual.classList.remove('growing');
        $fsmActual.classList.add('full-screen');
        var top=$(document).scrollTop();
        $(document).on('scroll.unable',function (e){
            $(document).scrollTop(top);
        });
        // yu_open();
    }, 1000);
};

var closeFSM = function(event){
    var $this = event.currentTarget;
    $this.style.height = size.height;
    $this.style.width = size.width;
    $this.style.top =4340+ 'px';
    $this.style.left = position.left + 'px';
    // $this.style.margin = '0';
    $this.classList.remove('full-screen');
    $this.classList.add('shrinking');
    setTimeout(function(){
        while($this.firstChild) $this.removeChild($this.firstChild);
        var classList = $this.classList;
        while (classList.length > 0) {
            classList.remove(classList.item(0));
        }
        $this.style = '';
        $(document).unbind("scroll.unable");
    }, 1000);
};

function yu_open(){
    document.getElementById("yu-btn").style.marginTop='735px';
    setTimeout(document.getElementById("yu-btn").style.marginTop='0px',1000);
    setTimeout(document.getElementById("yu-content").style.display='block',1000);
    document.getElementById("yu-content").style.transitionDuration='2s';
}
function xia_open(){
    document.getElementById("xia-btn").style.marginTop='735px';
    setTimeout(document.getElementById("xia-btn").style.marginTop='0px',1000);
    setTimeout(document.getElementById("xia-content").style.display='block',1000);
    document.getElementById("xia-content").style.transitionDuration='2s';
}
function bei_open(){
    document.getElementById("bei-btn").style.marginTop='735px';
    setTimeout(document.getElementById("bei-btn").style.marginTop='0px',1000);
    setTimeout(document.getElementById("bei-content").style.display='block',1000);
    document.getElementById("bei-content").style.transitionDuration='2s';
}
function xie_open(){
    document.getElementById("xie-btn").style.marginTop='735px';
    setTimeout(document.getElementById("xie-btn").style.marginTop='0px',1000);
    setTimeout(document.getElementById("xie-content").style.display='block',1000);
    document.getElementById("xie-content").style.transitionDuration='2s';
}
function yu_close(){
    document.getElementById("yu-content").style.display='none';
}
function xia_close(){
    document.getElementById("xia-content").style.display='none';
}
function bei_close(){
    document.getElementById("bei-content").style.display='none';
}
function xie_close(){
    document.getElementById("xie-content").style.display='none';
}

for (var i = 0; i < $fsm.length; i++) {
    if(i===0)
    {
        $fsm[0].addEventListener("click", openFSM);
        $fsm[0].addEventListener("click", yu_open);
    }
    else if(i===1)
    {
        $fsm[1].addEventListener("click", openFSM);
        $fsm[1].addEventListener("click", xia_open);
    }
    else if(i===2)
    {
        $fsm[2].addEventListener("click", openFSM);
        $fsm[2].addEventListener("click", bei_open);
    }
    else if(i===3)
    {
        $fsm[3].addEventListener("click", openFSM);
        $fsm[3].addEventListener("click", xie_open);
    }
}
$fsmActual.addEventListener("click", closeFSM);
$fsmActual.addEventListener("click", yu_close);
$fsmActual.addEventListener("click", xia_close);
$fsmActual.addEventListener("click", bei_close);
$fsmActual.addEventListener("click", xie_close);
