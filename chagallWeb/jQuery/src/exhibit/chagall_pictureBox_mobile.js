(function($){
    var mWrap=$('.m_wrap');
    var pEwrap=mWrap.find('.m_PE_wrap');
    var picWrap=pEwrap.find('.m_pic_wrap');
    var pUl=picWrap.children('.mob_frame');
    var pLi=pUl.children('li');

    cloneLi=pLi.eq(-1).clone();
    newUl=pUl.prepend(cloneLi);
    newLi=newUl.find('li');

    pUl.css({'position':'relative','left':-100+'%','width':(newLi.length*100)+'%'});
    newLi.css({'width':(100/ newLi.length)+'%'});

    var next=pEwrap.find('.m_next');
    var prev=pEwrap.find('.m_prev');
    var slideBtn=pEwrap.find('.button')
    
    var permission;
    var slideN=0;
    permission=true;
    timed=500;
    
    next.on('click',function(e){
        e.preventDefault();
        if(permission){
            permission=false;
            if(slideN>=pLi.length-1){
                    slideN=-1;
                    pUl.stop().css({'marginLeft':slideN*-100+'%'});
            } 
            slideN+=1;

            pUl.stop().animate({'marginLeft':slideN*-100+'%'},function(){
                setTimeout(function(){
                    permission=true;
                },timed);
            });//animate function
           
        }//if permission 
    });

    prev.on('click',function(e){
        e.preventDefault();
        slideN-=1;
        console.log(slideN);
        pUl.stop().animate({'marginLeft':slideN*-100+'%'}, function(){
            if(slideN<=-1){
                slideN=pLi.length-1;
                pUl.stop().css({'marginLeft':slideN*-100+'%'});
            }
        });
  

    });

})(jQuery);