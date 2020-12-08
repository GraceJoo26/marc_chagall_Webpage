(function($){
  $.ajax({
      url:'../data/goods.json',
      dataType:'json',
      context:document.body
  }).done(function(data){
      var goods=data;
     
      var dataFile=data.sort(function(a,b){
        return b.id-a.id;
      });

 
      var goodsClass=$('.lap_goods');
      var goodsWrap=$('.lap_goodsWrap');
      var goodShow='<dl><button type="button" class="lap_heart"><i class="fas fa-heart"></i></button><dt></dt><dd class="lap_title"></dd><dd class="lap_artist"></dd><dd class="lap_price"></dd></dl>';
      var url="../img/goods/";
      
      
      var i=0;
      var goodsLen=6;
      var dl, dt, title, artist, price, heartBtn;
      dl=goodsWrap.find('dl');
      

      var resetting=function(n){
        i= n || 0;
        var j=0;
        var gLen=i+goodsLen;
        goodsWrap.empty();
        for(; i<gLen;i+=1){
          if(dataFile[i]===undefined){
            break;
          }else{
            goodsWrap.append(goodShow);    
            var gs = goodsWrap.children('dl').eq(j);
            dt=gs.find('dt');
            title=gs.find('.lap_title');
            artist=gs.find('.lap_artist');
            price=gs.find('.lap_price');
            heartBtn=goodsWrap.find('.lap_heart');
        
            dt.css({'backgroundImage':'url('+url+ dataFile[i].picture+')',
                    'backgroundPosition':'50% 50%', 
                    'backgroundSize':'contain',
                    'backgroundRepeat':'no-repeat'});
            title.text(dataFile[i].title);
            artist.text(dataFile[i].artist);
            price.text(dataFile[i].price);
          
          } 
          j+=1;  
         ;} // for()
         
         var loginBox=$('.lap_login');
         
         heartBtn.on('click',function(e){
           e.preventDefault();
          var it=$(this);   
          var viewBox=$('#viewBox'); 

          if(it.hasClass('on')){
            it.removeClass('on');
            loginBox.stop().fadeOut();
            viewBox.removeClass('action');

            //loginBox.css({'display':'none'});
          }else{
            it.addClass('on');
            loginBox.stop().fadeIn();
            viewBox.addClass('action');
            //loginBox.css({'display':'block'});
          }
          
        });
        var exitBtn=$('.lap_exit');
        
        exitBtn.on('click',function(e){
          e.preventDefault();
          if(loginBox.css({'display':'block'})){
            loginBox.stop().fadeOut();
            heartBtn.removeClass('on');
          }
        })
  
     
        }; //resetting
      resetting();
     
      

        var indiUl=goodsClass.find('.lap_indicator');
        var indiCode='<li><a href="#"></a></li>'

       
        var indiLen=Math.ceil(data.length/goodsLen);
        var indiN=0;
        var indiLi;
        for(;indiN<indiLen;indiN+=1){
          indiUl.append(indiCode);
          indiLi=indiUl.children('li').eq(indiN);
          indiLi.find('a').text(indiN+1);
        }

      var indiLiBtn=indiUl.children('li').children('a');
      indiLiBtn.on('click',function(e){
        e.preventDefault();
        var liN=parseInt($(this).text())-1;
        var liSetN=liN*goodsLen;
        resetting(liSetN);
      });


      



  });
})(jQuery);