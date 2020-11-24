(function(){
    var mobileView=$('.mobile_view');
    var mobileText=mobileView.find('.mobile_text');
    var mobileEnter=mobileView.find('.mobile_enter');
    var mobileOn;
    var timed=900;

    
    //mobileOn=mobileView.addClass('on');
    
    mobileText.stop().delay(timed).fadeIn(function(){
        mobileView.addClass('action');
        mobileEnter.stop().delay(timed/3).fadeIn();
    });

    // setTimeout(function(){
    // },timed);
})(jQuery);