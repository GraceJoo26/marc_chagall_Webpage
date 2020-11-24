(function(){
    var tabletView=$('.tablet_view');
    var tabletText=tabletView.find('.tablet_text');
    var tabletEnter=tabletView.find('.tablet_enter');
    
    var timed=900;

    
    //mobileOn=mobileView.addClass('on');
    
        tabletText.stop().delay(timed).fadeIn(function(){
        tabletView.addClass('action');
        tabletEnter.stop().delay(timed/3).fadeIn();
    });

    // setTimeout(function(){
    // },timed);
})(jQuery);