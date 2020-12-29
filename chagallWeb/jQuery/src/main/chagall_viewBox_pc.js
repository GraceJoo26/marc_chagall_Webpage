(function(){
    var pcView=$('.pc_view');
    var pcText=pcView.find('.pc_text');
    var pcEnter=pcView.find('.pc_enter');
    var pcMarc=pcView.find('.pc_marc_chagall')

    var timed=900;

    
    //mobileOn=mobileView.addClass('on');
    
        pcText.stop().delay(timed).fadeIn(function(){  // 0.9초 뒤  fadeIn처리하고
        pcView.addClass('action');                     //viewBox에 action처리 하라(뒷배경 뿌옇게 하는 처리)
        pcMarc.stop().delay(1000).fadeIn();            // 1초 뒤에 Marc Chagall Box가 나오게 하고
        pcEnter.stop().delay(2000).fadeIn();           // 2초 뒤에 EnterBox가 나오게 하라.
    });

    // setTimeout(function(){
    // },timed);
})(jQuery);