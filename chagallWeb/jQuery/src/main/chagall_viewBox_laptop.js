(function(){
    var laptopView=$('.laptop_view');
    var laptopText=laptopView.find('.laptop_text');
    var laptopEnter=laptopView.find('.laptop_enter');
    var laptopMarc=laptopView.find('.laptop_marc_chagall')

    var timed=900;

    
    //mobileOn=mobileView.addClass('on');
    
        laptopText.stop().delay(timed).fadeIn(function(){
        laptopView.addClass('action');
        laptopMarc.stop().delay(1000).fadeIn();
        laptopEnter.stop().delay(2000).fadeIn();
    });

    // setTimeout(function(){
    // },timed);
})(jQuery);