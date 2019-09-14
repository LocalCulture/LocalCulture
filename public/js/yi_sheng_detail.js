/*视频图文转换*/
 $("#shiping_b").click(function () {
        $('#tuwen_b img').attr('src', 'images/tp_yi/sheng_detail/xuan_b.png');
        $('#shiping_b img').attr('src', 'images/tp_yi/sheng_detail/xuan_b_h.png');
        $('#tuwen_b span').css({'font-size': '31px', 'margin-left': '60px', 'margin-top': '25px'});
        $('#shiping_b span').css({'font-size': '44px', 'margin-left': '70px', 'margin-top': '30px'});
        $('#tuwen').css('display', 'none');
        $('#shiping').css('display', '');
    });
    $("#tuwen_b").click(function () {
        document.getElementById('shengjie_sp').pause();
        document.getElementById('shengjie_sp').currentTime=0;
        $('#shiping_b img').attr('src', 'images/tp_yi/sheng_detail/xuan_b.png');
        $('#tuwen_b img').attr('src', 'images/tp_yi/sheng_detail/tuwen_b_h.png');
        $('#shiping_b span').css({'font-size': '31px', 'margin-left': '60px', 'margin-top': '25px'});
        $('#tuwen_b span').css({'font-size': '44px', 'margin-left': '70px', 'margin-top': '3px'});
        $('#shiping').css('display', 'none');
        $('#tuwen').css('display', '');
    });
/*视频图文转换*/
