//marcChagallmain_01.js
//jQ import module

(function(){
    var nowW=deviceSize();
    var deviceType=['mobile','tablet','laptop','pc'];
    var url="./marcChagall_main/";
    var headBox=$('#headBox');
    var viewBox=$('#viewBox');
    var footBox=$('#footBox');

   

    var importMobile=function(){
        headBox.append('<script src="../js/src/main/chagall_headBox_mobile.js"></script>');
        viewBox.append('<script src="../js/src/main/chagall_viewBox_mobile.js"></script>');
        footBox.append('<script src="../js/src/main/chagall_footBox_mobile.js"></script>');
       
    };
    var importTablet = function(){
        viewBox.append('<script src="../js/src/main/chagall_viewBox_tablet.js"></script>');
        footBox.append('<script src="../js/src/main/chagall_footBox_tablet.js"></script>');
    };
    var importLaptop = function(){
        viewBox.append('<script src="../js/src/main/chagall_viewBox_laptop.js"></script>');
        footBox.append('<script src="../js/src/main/chagall_footBox_laptop.js"></script>');
    }
    var importPc = function(){
        viewBox.append('<script src="../js/src/main/chagall_viewBox_pc.js"></script>');
        footBox.append('<script src="../js/src/main/chagall_footBox_pc.js"></script>');
    }


    if(nowW===deviceType[0]){
        headBox.load(url+'mobile_Chagall_main_headBox.html', importMobile);
        viewBox.load(url+'mobile_Chagall_main_viewBox.html', importMobile );
        footBox.load(url+'mobileAndTablet_Chagall_main_footBox.html',importMobile);
    }else if(nowW===deviceType[1]){
        viewBox.load(url+'tablet_Chagall_main_viewBox.html',importTablet);
        footBox.load(url+'mobileAndTablet_Chagall_main_footBox.html',importTablet);
    }else if(nowW===deviceType[2]){
        viewBox.load(url+'laptop_Chagall_main_viewBox.html',importLaptop);
        footBox.load(url+'laptop_Chagall_main_footBox.html',importLaptop);
    }else if(nowW===deviceType[3]){
        viewBox.load(url+'pc_Chagall_main_viewBox.html',importPc);
        footBox.load(url+'pc_Chagall_main_footBox.html',importPc);
    }
})(jQuery);

/*
 div.text('글자를 삽입')
 div.html('<a></a>')
 .prepend('<a></a>')
 .append()
 .before()
 .after()

*/



//marcChagallmain_01.js
//jQ import module

/* 
썜 보충설명
 (function(){
    var nowW=deviceSize();
    var deviceType=['mobile','tablet','laptop','pc'];
    var url="./marcChagall_main/";
    var headBox=$('#headBox');
    var viewBox=$('#viewBox');
    var footer=$('footer');

    var jurl = '../js/src/';
    var scriptFn = function(file, url){
        var u = url || jurl;
        u = '../marc/';
        return '<script src="'+ u + file +'.js"></script>';
    };

    var viewImportMobile=function(){
        viewBox.append( scriptFn('marcChagallmain_mobile') );
        viewBox.append( scriptFn('marcChagallmain_mobile', '../marc/') );
        viewBox.append('<script src="../js/src/marcChagallmain_mobile.js"></script>');
        viewBox.append('<script src="../js/src/marcChagallmain_mobile.js"></script>');
        viewBox.append('<script src="../js/src/marcChagallmain_mobile.js"></script>');
        viewBox.append('<script src="../js/src/marcChagallmain_mobile.js"></script>');
    };
    var viewImportTablet = function(){
        viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
    }


    if(nowW===deviceType[0]){
        headBox.load(url+'mobile_Chagall_main_headBox.html');
        viewBox.load(url+'mobile_Chagall_main_viewBox.html', viewImportMobile );
        footer.load(url+'mobileAndTablet_Chagall_main_footBox.html');
    }else if(nowW===deviceType[1]){
        viewBox.load(url+'mobile_Chagall_main_viewBox.html', function(){
            viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
            viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
            viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
            viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
            viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
            viewBox.append('<script src="../js/src/marcChagallmain_tablet.js"></script>');
        } );
    }
})(jQuery); */