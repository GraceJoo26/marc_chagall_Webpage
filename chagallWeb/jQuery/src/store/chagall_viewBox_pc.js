(function($){
    $.ajax({
        url:'../data/goods.json',
        dataType:'json',
        context:document.body
    }).done(function(data){
       
      
        var dataFile=data.sort(function(a,b){
          return b.id-a.id;
        });
   
        var goodsClass=$('.pc_goods');
        var goodsWrap=$('.pc_goodsWrap');
        var goodShow='<dl><button type="button" class="pc_heart"><i class="fas fa-heart"></i></button><dt></dt><dd class="pc_title"></dd><dd class="pc_artist"></dd><dd class="pc_price"></dd></dl>';
        var url="../img/goods/";
        
        
        var i=0;
        var myLen=i;
        var myViewLen=6;
        var maxLen=dataFile.length;
        var more=$('.pc_more_button');
        var moreBtn=more.children('button');
        
        var dl, dt, title, artist, price;
        dl=goodsWrap.find('dl');
  
        // ajax의 배열을  for문을 써서 내가 원하는 갯수만큼 보이게 && 더보기 버튼 누르면 원하는 갯수만큼 더 보이게끔 만들기
        moreFn=function(j){              //moreFn 함수화
          var k; 
          k=j||myViewLen;                //k=j or myViewLen(내가 첫 화면에 보여지게 하고싶은 상품의 갯수);
          myLen=i+k;                     //myLen=i+k
          for(; i<myLen; i+=1){          //i가 0부터 시작해서 myLen갯수 미만이면, i에 +1씩 하고, 
            if(i>=maxLen){               // 만약 i가 총 상품의 갯수보다 크거나 같다면
              more.remove();             //more버튼을 없애라.
              break;                     //빠져나오고,
            }else{                       //만약 i가 0부터시작해서 myLen개수 이상이면,
              goodsWrap.append(goodShow);//goodsWrap에 goodShow를 앞쪽에 삽입하라.
              
              var gs = goodsWrap.children('dl').eq(i);//gs는 goodsWrap에 있는 dl의 몇 번째(x) 값이다.
  
              dt=gs.find('dt');                       //gs에서 dt를 찾아라
              title=gs.find('.pc_title');             //gs에서 클래스 pc_title을 찾아서 title이라고 하고
              artist=gs.find('.pc_artist');           //gs에서 클래스 pc_artist를 찾아서 artist라고 하고
              price=gs.find('.pc_price');             //gs에서  클래스 pc_price를 찾아서 price라고 하라. 
              dt.css({
                'backgroundImage':'url('+ url + dataFile[i].picture+')',// dt의 css의 backgroundImage를 내가 지정한 url의 이미지로 넣고,
                'backgroundPosition':'50% 50%',                         //backgroundPosition을 50% 50%로 지정하고, 
                'backgroundSize':'contain',                             //backgroundSize를 다 포함시키는 것으로 하고,
                'backgroundRepeat':'no-repeat'});                       //backgroundRepeat을 하지 않는것으로 지정한다.
              title.text(dataFile[i].title);                            //title에는 ajax의 title text을 넣고,
              artist.text(dataFile[i].artist);                          //artist에는 ajax의 artist text를 넣고,
              price.text(dataFile[i].price);                            //price에는 ajax의 price text를 넣으라.
             }
            }
  
            
            //하트버튼 누르면 로그인 창 뜨게 구현하기
            var heartBtn=goodsWrap.find('.pc_heart');  //heart버튼을 goodsWrap에서 찾아라.
            var loginBox=$('.pc_login');               // loginBox 지정
            heartBtn.on('click',function(e){           //하트버튼을 클릭하면,
              e.preventDefault();                      //click시 내부의 이벤트를 삭제하고
              var it=$(this);                          //내가 누른 하트를 it이라고 지정
              
            if(it.hasClass('on')){                     //만약에 내가 누른 하트에 on이라는 class가 있으면,
              it.removeClass('on');                    //on class를 제거하고,
              loginBox.stop().fadeOut();               //loginBox를 fadeOut시켜라
              
            }else{                                     //만약 내가 누른 하트에 on이라는 class가 없으면,
              it.addClass('on');                       //on class를 추가하고,
              loginBox.stop().fadeIn();                //loginBox를  fadeIn처리 하라.
              
            }
          });
  
  
  
  
          // X 버튼 누르면 사라지게하기
          var exitBtn=$('.pc_exit');              //html상 exit버튼을 찾아서
          exitBtn.on('click',function(e){         //exit버튼을 클릭하면,
            e.preventDefault();                   //exit버튼의 이벤트를 삭제하고
            if(loginBox.css({'display':'block'})){//loginBox의 css가 dispaly: block처리가 되어있으면
              loginBox.stop().fadeOut();          //loginBox를 fadeOut처리하고,
              heartBtn.removeClass('on');         //heart버튼의 on class를 삭제시켜라.
            }
          })
    
          
        };
        moreFn(8);//처음에 보여지는 물품갯수
  
        moreBtn.on('click',function(e){
          e.preventDefault();
          moreFn(8);                            //더보기 눌렀을 때 보여지는 물품갯수
        });
  
  
  
  
        //topButton 만들기
  
        var win=$(window);                  //윈도우 브라우저를 변수로 지정
        var topBtn=$('.pc_top_move_button') //html상에서 top 버튼 찾기
          win.on('scroll',function(e){      //윈도우에서 스크롤시
          e.preventDefault();               //이벤트의 기능을 없애고
          var winst=win.scrollTop();        //scrollTop을 정해서(위에서부터 얼만큼의 거리가 되는지 파악)
          (winst>=2500)?topBtn.stop().fadeIn():topBtn.stop().fadeOut();
          //2500px이상이 되면 버튼 생기게하라.
        });
        
        
  
  
      });
    })(jQuery);