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
    timed=100;

var explanation=[
    {title:'마을과 나',
     subtitle:'(I and the Village)',
     artist:'마르크 샤갈',
     year:'1911년',
     size:'1.92m x1.51m',
     ingredient:'유화',
     age:'초현실주의, 입체파',
     location:'뉴욕 현대 미술관 전시',
    content:'《나와 마을》(I and the Village)은 마르크 샤갈이 1911년에 제작한 작품이다. 파리에서 제작된 이 그림에도 갖가지 고향의 추억이 뒤범벅이 되어 있다. 소·바이올린·잉어·닭·꽃다발 등 모두 샤갈이 자랑으로 여기는 조형 언어이며,그의 소는 이집트의 Himmelkuh(천국의 소)와 같이 행복한 상징이라고도 말한다여기에는 입체파에 대한 관심도 엿보이며 원형, 삼각형이 교차하는 형식이 두드러진다.집과 농부가 거꾸로 서 있는 것도 과연 그다운 착상이며 이것은 하늘로 나는 인간이나 떨어진 목 등과 같아서비합리를 유머러스하게 표현해 보인다.'
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
    }
];

var explainWrap=$('.m_explainwrap'); 
var explain='<div class="m_divWrap"><dl><dt class="m_name"></dt><dd class="m_year"></dd><dd class="m_size"></dd><dd class="m_meterial"></dd><dd class="m_age"></dd><dd class="m_location"></dd><dd class="m_content"></dd></dl></div>'
//html에 삽입할 내용

var i=0;
var dl, dt, dd, name, artist, year, size, ingredient, age, location, content, divWrap, divWrapEq, ex; //function내부에서 쓸 변수를 밖에서 한번 더 지정
for(i=0; i<explanation.length; i+=1){ //반복문->그림과 설명박스를 몇개 만들것인지에 대하여

    explainWrap.append(explain);
    divWrap    = explainWrap.children('div');
    divWrapEq  = divWrap.eq(i);
    ex         = explanation[i];

    dl         = divWrapEq.find('dl');
    dt         = divWrapEq.find('dt');
    dd         = divWrapEq.find('dd');
    
    name       = divWrapEq.find('.m_name');
    artist     = divWrapEq.find('.m_artist');
    year       = divWrapEq.find('.m_year');
    size       = divWrapEq.find('.m_size');
    ingredient = divWrapEq.find('.m_ingredient');
    age        = divWrapEq.find('.m_age');
    location   = divWrapEq.find('.m_location');
    content    = divWrapEq.find('.m_content');
    
    name.text(ex.title);
    year.text(ex.year);
    artist.text(ex.artist);
    size.text(ex.size);
    ingredient.text(ex.ingredient);
    age.text(ex.age);
    location.text(ex.location);
    content.text(ex.content);
}


var cloneDiv =  divWrap.eq(-1).clone(true); //divWrap에 맨 마지막 li를 복제
cloneDiv.prependTo(explainWrap);            //복제한 li를 explainWrap 앞쪽에 붙임
reDiv= explainWrap.find('.m_divWrap');      //explainWrap에 복제된 li가 잘 삽입 되었는지 확인하는 변수

explainWrap.stop().css({'position':'relative', 'left':-100+'%','width': reDiv.length * 100 + '%'});

//explainWrap의 css(플롯:왼쪽, 포지션:렐러티브,왼쪽으로 -100%만큼, 가로:새로운Li의 길이*100%만큼, 높이 1000px, 위여백:7.08vw)를 다시 재설정 
//slide를 넘기려면 li를 담는 Ul이 복제된 li갯수만큼 가로값이 커져야 하므로 이렇게 css를 재정비 한다.

reDiv.stop().css({'width':(100/reDiv.length)+'%','float':'left'})
//reDiv의 css(가로:100%를 기준으로 복제한 li갯수만큼 나눈것의 %,플롯 왼쪽; 높이)를 다시 재설정


var permission;
permission=true;


var perTrue = function(){
    setTimeout(function(){
        permission=true;       //나중에 편하게 function을 쓰기위해 미리 변수로 function을 지정해놓고 사용
    },timed);                  //일정시간이 지난다음에 또 클릭할 수 있습니다~하는 것!
}

next.on('click',function(e){       //next버튼을 클릭하면 함수를 실행하라
    e.preventDefault();            //내부에 있는 event를 삭제하고
    if(permission){                //만약 permission이면
        permission=false;          //permission을 잠깐 stop시키고
        if(slideN>=pLi.length-1){  //slideN이 그림slide갯수-1보다(4개) 많거나 같으면
            slideN=-1;             //slideN을 -1으로 바꾸고
          

            pUl.css({'marginLeft':slideN*-100+'%'});            //사진이 담긴 ul에 css를 왼쪽으로 
            explainWrap.css({'marginLeft':(slideN*-100)+'%'});  //설명이 담긴 dl을 클릭한 횟수만큼 왼쪽으로 넘겨라.
        } 
        slideN+=1;                                              // slideN은 한번 클릭시마다 +1이 된다.
       

        pUl.stop().animate({'marginLeft':slideN*-100+'%'}, perTrue);
        //ul에 0.1초마다 -100%*내가누른 li의 index만큼 왼쪽으로 이동하는 애니메이션 적용을 하라.(그림slide왼쪽으로 넘어가라)
        explainWrap.stop().animate({'marginLeft':(slideN*-100)+'%'}, perTrue);
        //explainWrap에는 0.1초마다 왼쪽으로 내가누른 li index만큼 왼쪽으로 넘어가게 하라.(설명slide왼쪽으로 넘어가라)



    }
});

prev.on('click',function(e){     //이전 버튼을 클릭시
    e.preventDefault();          //내부 event를 없애고
    if(permission){              //만약 permission이면
        permission=false;        //permission을 잠시 중단시키고
        if(slideN<=-1){          //slideN이 -1보다 작거나 같으면
            slideN=pLi.length-1; //slideN을 사진갯수-1만큼 정의해라.(4번째)
           

            pUl.css({'marginLeft':slideN*-100+'%'});            //사진을 담은 ul의 css을 왼쪽으로 -100%넘겨라.
            explainWrap.css({'marginLeft':(slideN*-100)+'%'});  //설명을 담은 dl의 css를 왼쪽으로 -100%넘겨라
        } 
        slideN-=1;                                              //slideN을 prev버튼 누를때마다 -1씩 더하라
        

        pUl.stop().animate({'marginLeft':slideN*-100+'%'}, perTrue);           
        //사진이 담긴 ul에 왼쪽으로 누른횟수*-100% 만큼 0.1초 간격으로 애니매이션 실행하라
        explainWrap.stop().animate({'marginLeft':(slideN*-100)+'%'}, perTrue);
        //설명이 담긴 dl에 왼쪽으로 누른횟수*-100% 만큼 0.1초 간격으로 애니매이션 실행하라



    }
});


next.mouseenter(function(e){    //next버튼 누를때 색변화 시키는 함수 
    e.preventDefault();
    next.addClass('on');
})   
next.mouseleave(function(e){   //next버튼에서 마우스를 치우면 'on' Class가 사라지게
    e.preventDefault();
    next.removeClass('on');
})

prev.mouseenter(function(e){   //prev버튼 누를때 색변화 시키는 함수 
    e.preventDefault();
    prev.addClass('on');
})
prev.mouseleave(function(e){   ///prev버튼에서 마우스를 치우면 'on' Class가 사라지게
    e.preventDefault();
    prev.removeClass('on');
})

})(jQuery);
