window.onload=function(){

    $(window).on('resize',onResizeFunc);
    var headerHeight = $('header').innerHeight();
    var window_width = $( window ).width();
    var window_height = $( window ).height();
    var landingBg = $('.landing-page');

    if(window_height > 620)
        landingBg.css('height',window_height);
    else
        landingBg.css('height',620);  
    
    
    
    $('header nav ul a').on('click',function(){
       if($('header nav').hasClass('open')){
           $('header nav').removeClass('open');
       }
    });

    
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
    var closeMenu = document.getElementById("closeMenu");
    closeMenu.addEventListener("touchstart", function(e){
    if($('header nav').hasClass('open')){
        $('header nav').removeClass('open');
    }
    }, false);
    
    var openMenu = document.getElementById("openMenu");
    openMenu.addEventListener("touchstart", function(e){
        $('header nav').addClass('open');
    }, false);
}else{
    $('.menu-icon').on('click',function(){
        $('header nav').addClass('open');
    });
    $('.closeMenu').on('click',function(){
        if($('header nav').hasClass('open')){
            $('header nav').removeClass('open');
        }
    });
}
    

    function onResizeFunc(e){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
        {}else{
            window_width = $( window ).width();
            window_height = $( window ).height();
            if(window_height > 620)
                landingBg.css('height',window_height);
            else
                landingBg.css('height',620);

            if(window_width > 980 && $('header nav').hasClass('open'))
                $('header nav').removeClass('open');
        }
    }
    
};

