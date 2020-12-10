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
        moreFn=function(j){
          var k;
          k=j||myViewLen;
          myLen=i+k;
          for(; i<myLen; i+=1){
            if(i>=maxLen){
              more.remove();
              break;
            }else{
              goodsWrap.append(goodShow);
              
              var gs = goodsWrap.children('dl').eq(i);
  
              dt=gs.find('dt');
              title=gs.find('.pc_title');
              artist=gs.find('.pc_artist');
              price=gs.find('.pc_price');
              
              dt.css({
                'backgroundImage':'url('+ url + dataFile[i].picture+')',
                'backgroundPosition':'50% 50%', 
                'backgroundSize':'contain',
                'backgroundRepeat':'no-repeat'});
              title.text(dataFile[i].title);
              artist.text(dataFile[i].artist);
              price.text(dataFile[i].price);
             }
            }
  
            
            //하트버튼 누르면 로그인 창 뜨게 구현하기
            var heartBtn=goodsWrap.find('.pc_heart');
            var loginBox=$('.pc_login');
            heartBtn.on('click',function(e){
              e.preventDefault();
              var it=$(this);
              
            if(it.hasClass('on')){
              it.removeClass('on');
              loginBox.stop().fadeOut();
              
            }else{
              it.addClass('on');
              loginBox.stop().fadeIn();
              
            }
          });
  
  
  
  
          // X 버튼 누르면 사라지게하기
          var exitBtn=$('.pc_exit');
          exitBtn.on('click',function(e){
            e.preventDefault();
            if(loginBox.css({'display':'block'})){
              loginBox.stop().fadeOut();
              heartBtn.removeClass('on');
            }
          })
    
          
        };
        moreFn(8);//처음에 보여지는 물품갯수
  
        moreBtn.on('click',function(e){
          e.preventDefault();
          moreFn(8);//더보기 눌렀을 때 보여지는 물품갯수
        });
  
  
  
  
        //topButton 만들기
  
        var win=$(window);
        var topBtn=$('.pc_top_move_button')
        win.on('scroll',function(e){
          e.preventDefault();
          var winst=win.scrollTop();//scrollTop을 정해서
          (winst>=2500)?topBtn.stop().fadeIn():topBtn.stop().fadeOut();//2500px이상이 되면 버튼 생기게
        });
        
        
  
  
      });
    })(jQuery);