(function($){
    var tWrap=$('.lap_wrap');
    var pEwrap=tWrap.find('.lap_PE_wrap');
    var picWrap=pEwrap.find('.lap_pic_wrap');
    var pUl=picWrap.children('.lap_frame');
    var pLi=pUl.children('li');

    cloneLi=pLi.eq(-1).clone(true);
    newUl=pUl.prepend(cloneLi);
    newLi=newUl.find('li');

    pUl.css({'position':'relative','left':-100+'%','width':(newLi.length*100)+'%'});
    newLi.css({'width':(100/newLi.length)+'%'});

    var explanation=[
    {title:'마을과 나',
     subtitle:'(I and the Village)',
     artist:'마르크 샤갈',
     year:'1911년',
     size:'1.92m x1.51m',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'뉴욕 현대 미술관 전시',
    content:'《나와 마을》(I and the Village)은 마르크 샤갈이 1911년에 제작한 작품이다. "나는 묘화(描畵)의 대상을 러시아에서 가지고 왔다. 그리고 파리는 그 위에 빛깔을 주었던 것이다" 라고 샤갈은 말하였는데, 사실에 있어서 파리에서 제작된 이 그림에도 갖가지 고향의 추억이 뒤범벅이 되어 있다. 소·바이올린·잉어·닭·꽃다발 등 모두 샤갈이 자랑으로 여기는 조형 언어이며,그의 소는 이집트의 Himmelkuh(천국의 소)와 같이 행복한 상징이라고도 말한다여기에는 입체파에 대한 관심도 엿보이며 원형, 삼각형이 교차하는 형식이 두드러진다.집과 농부가 거꾸로 서 있는 것도 과연 그다운 착상이며 이것은 하늘로 나는 인간이나 떨어진 목 등과 같아서비합리를 유머러스하게 표현해 보인다.'
    },
     {title:'손가락이 7개인 자화상',
     artist:'마르크 샤갈',
     year:'1913년',
     size:'45cm x56cm',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'시카고 미술관 chicago museum',
     content:'일곱 손가락으로 자화상은 1913 년 프랑스에서 그린 벨라루스 화가 마르크 샤갈의 유화이다. 캔버스에 그려진이 유채는 작가가 한 손에 일곱 손가락으로 러시아, 당나귀와 다른 사람의 축소판을 그리는 자화상이다. '
    },
    {title:'창문을 통해 본 파리',
     subtitle:'(Paris Through the Window)',
     artist:'마르크 샤갈',
     year:'1913년',
     size:'1.92m x1.51m',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'뉴욕 현대 미술관 전시',
     content:''
    },

    {title:'생일(BirthDay)',
    artist:'마르크 샤갈',
    year:'1915년',
    size:'81cm x99.7cm',
    ingredient:'유화',
    age:'역사화',
    content:'샤갈은 벨라와 결혼식을 치르기 열흘 전인 자신의 생일날(7월7일) 열광적인 사랑을 ‘생일’이란 작품에 담아냈다. 벨라를 현란한 색채의 소용돌이 속으로 끌어들여 공중에 떠오르게 하고, 자신도 날아올라 몸을 길게 늘어뜨린 채로 키스하는 모습을 초현실적으로 잡아냈다. 샤갈의 날아다니는 멋진 모습에 감격한 벨라는 작품 제목을 ‘생일’로 지었다고 한다. 검은 드레스의 흰색 옷깃은 두 사람의 순결하고 깨끗한 영혼을 상징하고, 붉은 바닥과 곳곳에 걸린 화려한 장식물들은 열정적인 사랑을 포근하게 감싸는 듯하다.'
    },
    {title:'도시 위에서',
    subtitle:'(Over the Town)',
    artist:'마르크 샤갈',
    year:'1914년-1918년',
    size:'45cm x56cm',
    ingredient:'유화',
    age:'입체파',
    location:'The Tretyakov Gallery, Moscow,Russia',
    content:'이 그림은 모스크바의 트레차코프 국립 미술관에 보관되어 있는 마르크샤갈의 <도시위에서>라는 제목의 작품으로 두 연인이 꼭 포옹하고 있는 장면을 묘사하고 있다.아름다운 벨라를 사랑하는 러시아의 화가가 그린 이 대작에서 자신이 태어난 도시인 비테프스크의 창공을 행복한 얼굴로 날고 있다. 이작품은 1차 세계대전 중에 그려졌음에도 시적이고 평온한 느낌이 든다.'
    },
    {title:'하얀 십자가(White Cross)',
    artist:'마르크 샤갈',
    year:'1914년-1918년',
    size:'45cm x56cm',
    ingredient:'유화',
    age:'입체파',
    location:'The Tretyakov Gallery, Moscow,Russia',
    content:'White Crucifixion은 Marc Chagall이 예수님의 십자가를 묘사 한 그림이다. 샤갈이 유럽을 방문한 후 1938 년에 그려졌으며 시카고 아트 인스티튜트 (Art Institute of Chicago)에서 볼 수 있다.'
    },
    {title:'와인잔을 든 이중 자화상',
     subtitle:'(Double portrait au verre de vin)',
     artist:'마르크 샤갈',
     year:'1917년 ~ 1918년경',
     size:'235 x 137 cm',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'조르주 퐁피두센터',
     content:'915년에 28세가 된 마르크 샤갈의 인생을 바꾸어 놓았던 일이 생긴다. 바로 벨라 로젠펠트와 결혼을 하게 된 것이다. 샤갈은 벨라를 자신의 캔버스에 자주 등장시켰다. 그는 벨라를 가리켜 자신의 예술을 인도한 이로 회고했다. 1918년 샤갈이 그린 <와인잔을 든 이중 자화상>에 등장하는 이도 바로 벨라다. 이 작품은 30여 년간 자신의 곁에서 예술적 영감을 주었던 아내 벨라와의 결혼식을 기념해서 그린 그림으로 벨라의 어깨 위에 걸터 올라 있는 자신과 그 위의 천사가 등장한다. 중앙에 인물을 배치시킨 수직적 구조의 구도는 아래에서부터 벨라의 오른쪽 다리로 시작, 천사를 자주 색으로 연결되고 있으며 샤갈 자신의 웃옷과 포도주는 적색으로 호응하고 있다.'
    },
    {title:'산책(Walk)',
     artist:'마르크 샤갈',
     year:'1917년-1918년',
     size:'169.6 × 163.4cm',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'뉴욕 현대 미술관 전시',
     content:"샤갈의 연인 벨라는 사랑의 기쁨으로 하늘에 떠오르고, 맞잡은 두 손에는 어떠한 불안도 느껴지지 않는다. 바람에 나부끼는 드레스에는 움직임이 가득하고 그림 곳곳에 두 사람의 행복이 샤갈만의 색채로 넘쳐 흐른다.  '산책'은 벨라와의 결혼으로 샤갈의 인생에서 가장 행복했던 시기에 완성되었다. 오늘날 이 작품이 샤갈의 가장 사랑받는 작품 중 하나인 것은 그림 가득 그들의 사랑이 담겨있기 때문일 것이다." 
    },
    {title:"곡예사(L'acrobate)",
     artist:'마르크 샤갈',
     year:'1930년',
     size:'117 x 73.5 cm',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'국립 샤갈 성서 박물관',
     content:'그의 일생은 급변하는 20세기 현대사의 수레 바퀴와 함께했다. 유대인인 샤갈은 전쟁을 피해 프랑스, 미국으로 거처를 옮겨 다니는 망명 생활을 하면서도 죽는 순간까지 화가의 꿈을 접지 않았다. 밝고 화려하며 환상적인 그의 그림은 비극과 불행을 행복으로 승화한 역설의 미학을 담고 있다. 1930년에 제작한 이 작품도 샤갈 특유의 상상력과 서정성이 돋보인다. 위태롭게 외줄을 타는 곡예사의 표정은 불안하기는커녕 오히려 행복해 보인다. 곡예사의 얼굴 옆에 바짝 붙어 귓속말을 전하는 얼굴은 마치 수호 천사처럼 보인다.'
    },

    {title:'에펠탑의 신랑신부',
     subtitle:'(Bride and Broom in Eiffel tower)',
     artist:'마르크 샤갈',
     year:'1938년',
     size:'150 x 136.5 cm',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'	조르주 퐁피두센터',
     content:'말년의 마르크 샤갈이 거주한 라콜린 저택 응접실의 벽난로 위로 그림 한 점이 걸려있었는데, 그게 바로 <에펠탑의 신랑 신부>다. 이 그림은 벨라루스 태생으로 파리로 건너와 본격적인 작가의 이력을 쌓던 샤갈이 나치의 위협을 피해 프랑스 생활을 청산하고 미국 이민을 떠나기 직전 완성한 것이다. <에펠탑의 신랑 신부>도 그런 점에서 그가 평생 매달린 주제에서 멀리 있지 않다. 동물과 인물이 뒤섞인 편성, 이제 막 결혼식을 마친 신혼의 로맨스, 예술 도시 거주자의 자부심이 드러난 에펠탑의 전경 등이 그렇다.'
    },

    
    {title:'푸른 빛의 서커스',
     subtitle:'(Le cirque bleu)',
     artist:'마르크 샤갈',
     year:'1950년',
     size:'232.5 x 175.8 cm',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'국립 샤갈 성서 박물관',
     content:'샤갈의 색채는 자연에 있는 색을 그대로 캔버스에 옮기는 것이 아니었다. 오히려 무의식적인 환상의 세계에서 본 듯한 색채를 사용했는데 이는 그의 어린 시절 영향도 컸다. 러시아식 교회의 의례에서 쓰이던 빨강, 노랑, 보라색을 응용해 작품의 색채를 더욱 풍부하게 했다. 스스로도 색채화가임을 자부하던 샤갈이었다.<푸른 빛의 서커스>에서도 푸른 캔버스가 전체적인 분위기를 장악하는 가운데 중심의 여성 곡예사의 붉은 의상과 아래 노란색 달빛 조명이 푸른색과 대비된다. 이러한 대비는 비물리적인 요소의 배치와 맞물려 환상적인 분위기를 자아낸다. 이는 색채와 공간이 함께 만들어내는 것으로 이러한 조형방식은 샤갈의 주요한 특징이다. 샤갈은 파란색을 평화의 자유와 우애가 수반되어야만 가능한 색으로 신을 경배하는 종교적인 숭배의 색으로 생각했다고 한다.' 
    },
    {title:'신부(The bride)',
     artist:'마르크 샤갈',
     year:'1950년',
     size:'68 × 53 cm',
     ingredient:'Gouache, pastel',
     age:'초현실주의, 입체파',
     location:'Private collection, Japan',
     content:'샤갈 그림에는 종종 젊은 여성이나 커플이 등장 하지만 La Mariée 에서는 꽃다발을 들고 결혼식 복장을 한 젊은 여성에 초점을 맞춘다. 샤갈의 한 팬이 "젊은 사랑에 대한 찬사"로 묘사 한 여성은 마치 감상인이 그녀와 결혼 한 것처럼 대담하고 눈에 띄는 방식으로 감상자에게 보여진다.'},


];


var explainWrap=$('.lap_explainwrap');
var explain='<div class="lap_text_wrap"><div class="lap_divWrap"><dl><dt class="lap_name"></dt><dd class="lap_subtitle"></dd><dd class="lap_year"></dd><dd class="lap_size"></dd><dd class="lap_meterial"></dd><dd class="lap_age"></dd><dd class="lap_location"></dd><dd class="lap_content"></dd></dl></div></div>'

var i=0;
var dl, dt, dd, name, artist, year, textWrap, size, ingredient, age, location, content, divWrap, divWrapEq, ex;
for(i=0; i<explanation.length; i+=1){

    explainWrap.append(explain);
    textWrap   = explainWrap.children('.lap_text_wrap');
    divWrap    = explainWrap.children('.lap_divWrap');
    divWrapEq  = divWrap.eq(i);
    textWrapEq = textWrap.eq(i);
    ex         = explanation[i];
    dl         = textWrapEq.find('dl');
    dt         = textWrapEq.find('dt');
    dd         = textWrapEq.find('dd');
    
    name       = textWrapEq.find('.lap_name');
    subtitle   = textWrapEq.find('.lap_subtitle');
    artist     = textWrapEq.find('.lap_artist');
    year       = textWrapEq.find('.lap_year');
    size       = textWrapEq.find('.lap_size');
    ingredient = textWrapEq.find('.lap_ingredient');
    age        = textWrapEq.find('.lap_age');
    location   = textWrapEq.find('.lap_location');
    content    = textWrapEq.find('.lap_content');
    
    name.text(ex.title);
    subtitle.text(ex.subtitle);
    year.text(ex.year);
    artist.text(ex.artist);
    size.text(ex.size);
    ingredient.text(ex.ingredient);
    age.text(ex.age);
    location.text(ex.location);
    content.text(ex.content);

}


var cloneDiv =  textWrap.eq(-1).clone(true);
cloneDiv.prependTo(explainWrap);
reDiv= explainWrap.find('.lap_text_wrap');

explainWrap.stop().css({'float':'left','position':'relative', 'left':-100+'%','width': newLi.length * 100 + '%', 'height':'1000px', 'top':'7.08vw'});
reDiv.stop().css({'width':(100/reDiv.length)+'%','float':'left','height':59.583333+'vw'});



var timed=500;

var permission;
permission=true;


/* var perTrue = function(){
    setTimeout(function(){
        permission=true;
    },timed);
}
 */



var lapAgeLine=$('.lap_ageline');
var lineUl=lapAgeLine.find('.lap_line');
var lineLi=lineUl.children('li');

/* lineLi.find('a').on('mouseenter focus click', function(e){
    e.preventDefault();
    // console.error('~!!!')
    
    
}) */
var itCheck= 0;
lineLi.children('a').on('mouseenter focus click',function(e){
    e.preventDefault();         
    /*  console.log(lineLi); */
  
  var it =$(this);
  itCheck=it.parent('li').index();
  lineLi.eq(itCheck).addClass('action');
  lineLi.eq(itCheck).siblings().removeClass('action');
  
  if(e.type === 'focus' || e.type ==='mouseenter'){
      pUl.stop().animate({'marginLeft':itCheck*-100+'%'},timed);
      explainWrap.stop().animate({'marginLeft':itCheck*-100+'%'},timed);
    }else if(e.type == 'click'){
        var thatLink = it.attr('href');
        $(thatLink).attr({'tabIndex':0});
        // pLi.eq(itCheck).siblings().find('a').attr({'tabIndex':-1});
        /* $(thatLink).focus(); */
    }
});

lineLi.find('a').on('blur',function(){
    $(this).attr({'tabIndex':-1});
 });

})(jQuery);





/* 
next.on('click',function(e){
    e.preventDefault();
    if(permission){
        permission=false;
        if(slideN>=pLi.length-1){
            slideN=-1;
            
         console.log(slideN); 
            pUl.stop().css({'marginLeft':slideN*-100+'%'});
            explainWrap.css({'marginLeft':(slideN*-100)+'%'});  
        } 
        slideN+=1;
        // slideT+=1;

        pUl.stop().animate({'marginLeft':slideN*-100+'%'}, perTrue);
        explainWrap.stop().animate({'marginLeft':(slideN*-100)+'%'}, perTrue);

    }
});

prev.on('click',function(e){
    e.preventDefault();
    if(permission){
        permission=false;
        if(slideN<=-1){
            slideN=pLi.length-1;
        

            pUl.stop().css({'marginLeft':slideN*-100+'%'});
            explainWrap.css({'marginLeft':(slideN*-100)+'%'});  
        } 
        slideN-=1;
        // slideT+=1;

        pUl.stop().animate({'marginLeft':slideN*-100+'%'}, perTrue);
        explainWrap.stop().animate({'marginLeft':(slideN*-100)+'%'}, perTrue);
    }
});
 */
/* 
next.mouseenter(function(e){
    e.preventDefault();
    next.addClass('on');
})
next.mouseleave(function(e){
    e.preventDefault();
    next.removeClass('on');
})

prev.mouseenter(function(e){
    e.preventDefault();
    prev.addClass('on');
})
prev.mouseleave(function(e){
    e.preventDefault();
    prev.removeClass('on');
}) */

/* textWrap.css({'width':40.902778+'vw','marginLeft':100+'px'}) */
