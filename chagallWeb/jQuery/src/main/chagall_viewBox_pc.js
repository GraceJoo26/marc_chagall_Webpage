(function(){
    var pcView=$('.pc_view');
    var pcText=pcView.find('.pc_text');
    var pcEnter=pcView.find('.pc_enter');
    var pcMarc=pcView.find('.pc_marc_chagall')

    var timed=900;

    
    //mobileOn=mobileView.addClass('on');
    
        pcText.stop().delay(timed).fadeIn(function(){
        pcView.addClass('action');
        pcMarc.stop().delay(1000).fadeIn();
        pcEnter.stop().delay(2000).fadeIn();
    });

    // setTimeout(function(){
    // },timed);
})(jQuery);