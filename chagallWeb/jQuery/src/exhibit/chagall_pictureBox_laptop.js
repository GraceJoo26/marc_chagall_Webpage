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
    newLi.css({'width':(100/ newLi.length)+'%'});

    var next=pEwrap.find('.lap_next');
    var prev=pEwrap.find('.lap_prev');
        
    var permission;
    var slideN=0;
    permission=true;
    timed=100;

var explanation=[
    {title:'마을과 나(I and the Village)',
     artist:'마르크 샤갈',
     year:'1911년',
     size:'1.92m x1.51m',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'뉴욕 현대 미술관 전시',
     content:'《나와 마을》(I and the Village)은 마르크 샤갈이 1911년에 제작한 작품이다. "나는 묘화(描畵)의 대상을 러시아에서 가지고 왔다. 그리고 파리는 그 위에 빛깔을 주었던 것이다" 라고 샤갈은 말하였는데, 사실에 있어서 파리에서 제작된 이 그림에도 갖가지 고향의 추억이 뒤범벅이 되어 있다. 소·바이올린·잉어·닭·꽃다발 등 모두 샤갈이 자랑으로 여기는 조형 언어이며,그의 소는 이집트의 Himmelkuh(천국의 소)와 같이 행복한 상징이라고도 말한다여기에는 입체파에 대한 관심도 엿보이며 원형, 삼각형이 교차하는 형식이 두드러진다.집과 농부가 거꾸로 서 있는 것도 과연 그다운 착상이며 이것은 하늘로 나는 인간이나 떨어진 목 등과 같아서비합리를 유머러스하게 표현해 보인다.그러나 에콜 드 파리의 많은 고향 상실자에게는 이러한 비합리적인 꿈만이 생활의 지주이며 신화였을 것이다.'
    },
    {title:'생일(BirthDay)',
    artist:'마르크 샤갈',
    year:'1915년',
    size:'81cm x99.7cm',
    ingredient:'유화',
    age:'역사화',
    content:'샤갈은 벨라와 결혼식을 치르기 열흘 전인 자신의 생일날(7월7일) 열광적인 사랑을 ‘생일’이란 작품에 담아냈다. 벨라를 현란한 색채의 소용돌이 속으로 끌어들여 공중에 떠오르게 하고, 자신도 날아올라 몸을 길게 늘어뜨린 채로 키스하는 모습을 초현실적으로 잡아냈다. 샤갈의 날아다니는 멋진 모습에 감격한 벨라는 작품 제목을 ‘생일’로 지었다고 한다. 검은 드레스의 흰색 옷깃은 두 사람의 순결하고 깨끗한 영혼을 상징하고, 붉은 바닥과 곳곳에 걸린 화려한 장식물들은 열정적인 사랑을 포근하게 감싸는 듯하다.'
    },
    {title:'도시 위에서(Over the Town)',
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
    content:'White Crucifixion은 Marc Chagall이 예수님의 십자가를 묘사 한 그림이다. 샤갈이 유럽을 방문한 후 1938 년에 그려졌으며 시카고 아트 인스티튜트 (Art Institute of Chicago)에서 볼 수 있다.'}
    
    ,{title:'손가락이 7개인 자화상',
    artist:'마르크 샤갈',
    year:'1913년',
    size:'45cm x56cm',
    ingredient:'유화',
    age:'초현실주의, 입체파',
    location:'시카고 미술관 chicago museum',
    content:'일곱 손가락으로 자화상은 1913 년 프랑스에서 그린 벨라루스 화가 마르크 샤갈의 유화이다. 캔버스에 그려진이 유채는 작가가 한 손에 일곱 손가락으로 러시아, 당나귀와 다른 사람의 축소판을 그리는 자화상이다. '}
];

var explainWrap=$('.lap_explainwrap');
var explain='<div class="lap_text_wrap"><div class="lap_divWrap"><dl><dt class="lap_name"></dt><dd class="lap_year"></dd><dd class="lap_size"></dd><dd class="lap_meterial"></dd><dd class="lap_age"></dd><dd class="lap_location"></dd><dd class="lap_content"></dd></dl></div></div>'

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
    artist     = textWrapEq.find('.lap_artist');
    year       = textWrapEq.find('.lap_year');
    size       = textWrapEq.find('.lap_size');
    ingredient = textWrapEq.find('.lap_ingredient');
    age        = textWrapEq.find('.lap_age');
    location   = textWrapEq.find('.lap_location');
    content    = textWrapEq.find('.lap_content');
    
    name.text(ex.title);
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
reDiv.stop().css({'width':(100/reDiv.length)+'%','float':'left','height':59.583333+'vw'})


var permission;
permission=true;


var perTrue = function(){
    setTimeout(function(){
        permission=true;
    },timed);
}

next.on('click',function(e){
    e.preventDefault();
    if(permission){
        permission=false;
        if(slideN>=pLi.length-1){
            slideN=-1;
            
/*             console.log(slideN); */
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
})

/* textWrap.css({'width':40.902778+'vw','marginLeft':100+'px'}) */


})(jQuery);
