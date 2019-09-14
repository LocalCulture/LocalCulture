$(document).ready(function() {

    var hash = window.location.hash.substr(1);
    var href = $('#center-selectbar a').each(function(){
        var href = $(this).attr('href');
        if(hash===href.substr(0,href.length-4)){
            var toLoad = hash+'.html #use_inner_content';
            $('#use_inner_content').load(toLoad)
        }
    });

    $('#center-selectbar a').click(function(){
        var toLoad = $(this).attr('href')+' #use_inner_content';
        $('#use_inner_content').slideUp('normal',loadContent);
        $('#load').remove();
        $('#wrapper').append('<span id="load">LOADING...</span>');
        $('#load').fadeIn('normal');
        window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-4);
        function loadContent() {
            $('#use_inner_content').load(toLoad,'',showNewContent())
        }
        function showNewContent() {
            $('#use_inner_content').slideDown('normal',hideLoader());
        }
        function hideLoader() {
            $('#use_inner_content').fadeOut('normal');
        }
        return false;
    });

    $('.center-tab-a').click(function () {
        if(window.location.hash.toString()==='#user-work'){
            $('#user-create').show();
        }
        else if(window.location.hash.toString()==='#user'){
            $('#user-create').show();
        }
        else{
            $('#user-create').hide();
        }
        $('.center-tab-a-active').removeClass('center-tab-a-active');
        $(this).addClass('center-tab-a-active');
    })
});