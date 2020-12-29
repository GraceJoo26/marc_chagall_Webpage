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

 
      var goodsClass=$('.m_goods');
      var goodsWrap=$('.m_goodsWrap');
      var goodShow='<dl><button type="button" class="m_heart"><i class="fas fa-heart"></i></button><dt></dt><dd class="m_title"></dd><dd class="m_artist"></dd><dd class="m_price"></dd></dl>';
      var url="../img/goods/";
      
      
      var i=0;
      var goodsLen=6;
      var dl, dt, title, artist, price, heartBtn;
      dl=goodsWrap.find('dl');
      

      var resetting=function(n){                     //resetting함수 정의
        i= n || 0;                                   //i가 n 또는 0
        var j=0;                                     //j=0
        var gLen=i+goodsLen;                         //gLen = i+상품갯수
        goodsWrap.empty();                           //goodsWrap 비우고
        for(; i<gLen;i+=1){                          //gLen만큼 반복하라
          if(dataFile[i]===undefined){               //만약 dataFile이 undefined라고 뜨면
            break;                                   //그냥 빠져나오고,
          }else{                                     //그렇지 않으면
            goodsWrap.append(goodShow);              //goodWrap HTML에 넣으려고 했던 goodShow의 변수값을 집어넣어라. 
            var gs = goodsWrap.children('dl').eq(j); //gs는 goodsWrap에 있는 dl의 몇 번째(x) 값이다.
            dt=gs.find('dt');                        //gs에서 dt를 찾아라
            title=gs.find('.m_title');               //gs에서 클래스 m_title을 찾아서 title이라고 하고
            artist=gs.find('.m_artist');             //gs에서 클래스 m_artist를 찾아서 artist라고 하고
            price=gs.find('.m_price');               //gs에서  클래스 m_price를 찾아서 price라고 하라. 
            heartBtn=goodsWrap.find('.m_heart');     //heartBtn은 goodsWrap에서 클래스 m_heart찾아라. 
        
            dt.css({'backgroundImage':'url('+url+ dataFile[i].picture+')',
            // dt의 css의 backgroundImage를 내가 지정한 url의 이미지로 넣고,
                    'backgroundPosition':'50% 50%',   //backgroundPosition을 50% 50%로 지정하고,
                    'backgroundSize':'contain',       //backgroundSize를 다 포함시키는 것으로 하고,
                    'backgroundRepeat':'no-repeat'}); //backgroundRepeat을 하지 않는것으로 지정한다.
            title.text(dataFile[i].title);            //title에는 ajax의 title text을 넣고,
            artist.text(dataFile[i].artist);          //artist에는 ajax의 artist text를 넣고,
            price.text(dataFile[i].price);            //price에는 ajax의 price text를 넣으라.
          
          } 
          j+=1;   //j에 1씩 더하라.
         ;} // for()
         
       
       
       
       
       
       
         var loginBox=$('.m_login');         //로그인 박스 정의
        
         heartBtn.on('click',function(e){    //하트버튼을 누르면
           e.preventDefault();               //click 이벤트의 모든 기능을 없애고
          var it=$(this);                    //내가 클릭하는 것을 it이라고 하자. 
          var viewBox=$('#viewBox');         //viewBox정의

          if(it.hasClass('on')){             //내가 누른 하트버튼에 on(crimson색으로 나타냄)이라는 클래스가 있으면
            it.removeClass('on');            //하트버튼에 on 클래스를 안 보이게하고(색을 없애고)
            loginBox.stop().fadeOut();       // loginBox를 fadeOut처리하라.
            

            //loginBox.css({'display':'none'});
          }else{
            it.addClass('on');               //내가 누른 하트버튼에 on이라는 클래스가 없으면 (색이 없으면)
            loginBox.stop().fadeIn();        //로그인 박스를 fadeIn처리 하라.
            //loginBox.css({'display':'block'});
          }
          
        });
        var exitBtn=$('.m_exit');                //exit버튼 정의
        
        exitBtn.on('click',function(e){          //exit버튼을 클릭하면, 
          e.preventDefault();                    //클릭에 대한 이벤트를 없애고
          if(loginBox.css({'display':'block'})){ //만약 loginBox의 css가 display:block처리가 되어있다면
            loginBox.stop().fadeOut();           //loginBox fadeOut처리 하라.
            heartBtn.removeClass('on');          //하트버튼에 on클래스를 없애라.
          }
        })
  
     
        };                                  //resetting
      resetting();                          //resetting함수 실행
     
      
      
      

      

        var indiUl=goodsClass.find('ul');        //goodsClass에서 ul을 찾아 indiUl이라고 정의하라.
        var indiCode='<li><a href="#"></a></li>' //삽입할 html-> indiCode

       
        var indiLen=Math.ceil(data.length/goodsLen);
        //indiLen을 goods의 갯수를 goodsLen(브라우저에 보이도록 놔둔 값)으로 나눈 값을 나머지까지 반올림하여 나타내라. 
        var indiN=0;
        var indiLi;
        for(;indiN<indiLen;indiN+=1){            //indiN=0부터 시작해서 indiN이 indiLen보다 작으면, indiN에 1씩더하고,
          indiUl.append(indiCode);               //indiUl의 앞쪽에 indiCode를 붙여라.
          indiLi=indiUl.children('li').eq(indiN);//indiLi는 indiUl 내의 indiN번째 li를 지칭
          indiLi.find('a').text(indiN+1);        //indiLi에서 a 태그를 찾아서 indiN+1을 텍스트화 시켜라.
        }

      var indiLiBtn=indiUl.children('li').children('a');
      //indiLiBtn은 ul내에있는 li에 a 태그를 지칭
      indiLiBtn.on('click',function(e){          //indiBtn을 클릭하면,
        e.preventDefault();                      //클릭이벤트를 모두 없애고
        var liN=parseInt($(this).text())-1;      //내가누른 li를 몇 번째인지 숫자화 시켜서 -1을 해준것을 liN이라고 하고 
        var liSetN=liN*goodsLen;                 //liSetN은 liN에 goodsLen(브라우저에 보이도록 하는 상품갯수)을 곱한 값.
        resetting(liSetN);                       //resetting함수에 liSetN만큼 for문 돌리기.
      });


      



  });
})(jQuery);