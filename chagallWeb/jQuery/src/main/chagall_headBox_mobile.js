//chagall_headBox_mobile.js

(function($){
 var headBox=$('#headBox');
 var menuBtn=headBox.find('.menu_btn');
 var gnb=headBox.find('.gnb');  // 메뉴 navigator

 menuBtn.on('click',['button'],function(e){    //메뉴버튼을 클릭하면
     e.preventDefault();                       //기존 이벤트를 다 삭제하고
    /*  gnb.stop().fadeToggle(); 
     gnb.addClass('on');*/
    var gnbStatus=gnb.css('display');          //gnb의 css를 확인하는 변수
    console.log(gnbStatus); 
    if(gnbStatus==='none'){        //gnb의 창이 안 보이면
         gnb.stop().fadeIn();      //gnb를 fadeIn처리 하고
         menuBtn.addClass('mobile_action'); //메뉴버튼에 mobile_action이라는 클래스를 추가하라(X만들게 하기)
    }else{  //만약 gnb창이 보이면(block)

            gnb.stop().fadeOut();       //gnb를 fadeOut처리하고  
            menuBtn.removeClass('mobile_action'); //메뉴버튼에 mobile_action클래스를 없애라.
    } 
 });

 
})(jQuery);