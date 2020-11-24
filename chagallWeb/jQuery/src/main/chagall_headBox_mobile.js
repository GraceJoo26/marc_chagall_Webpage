//chagall_headBox_mobile.js

(function($){
 var headBox=$('#headBox');
 var menuBtn=headBox.find('.menu_btn');
 var gnb=headBox.find('.gnb');

 menuBtn.on('click',['button'],function(e){
     e.preventDefault();
    /*  gnb.stop().fadeToggle();
     gnb.addClass('on');*/
    var gnbStatus=gnb.css('display');
    console.log(gnbStatus); 
    // 
    if(gnbStatus==='none'){
        
         gnb.stop().fadeIn();
         menuBtn.addClass('on'); 
    }else{

            gnb.stop().fadeOut();         
            menuBtn.removeClass('on');
    } 
 });
})(jQuery);