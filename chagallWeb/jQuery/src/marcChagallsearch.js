(function(){
    var nowW=deviceSize();
    var deviceType=['mobile','tablet','laptop','pc'];
    var url="./marcChagall_store/";
    var url_01="./marcChagall_main/";
    var url_02="./marcChagall_exhibition/";
    var url_03="./marcChagall_search/";
    var body = $('body');
    var headBox=$('#headBox');
    var searchBox=$('#searchBox');
    
   

    var importMobile=function(){
        // headBox.append('<script src="../jQuery/src/main/chagall_headBox_mobile.js"></script>');
        // viewBox.append('<script src="../jQuery/src/main/chagall_viewBox_mobile.js"></script>');
        // footBox.append('<script src="../jQuery/src/main/chagall_footBox_mobile.js"></script>');
        setTimeout(function(){
            body.append(
                '<script src="../jQuery/src/main/chagall_headBox_mobile.js"></script>'+
                '<script src="../jQuery/src/search/chagall_searchBox_mobile.js"></script>');
        }, 100);
       
    };
    var importTablet = function(){

        setTimeout(function(){
        body.append(
            
            '<script src="../jQuery/src/exhibit/chagall_headBox_tablet.js"></script>'+
            '<script src="../jQuery/src/search/chagall_searchBox_tablet.js"></script>');
    },100);
};


    var importLaptop = function(){
       
        setTimeout(function(){
        body.append(
            '<script src="../jQuery/src/exhibit/chagall_headBox_laptop.js"></script>'+
            '<script src="../jQuery/src/search/chagall_searchBox_laptop.js"></script>');
    },100);
};


    var importPc = function(){
        
        setTimeout(function(){
        body.append(
            '<script src="../jQuery/src/exhibit/chagall_headBox_pc.js"></script>'+
            '<script src="../jQuery/src/search/chagall_searchBox_pc.js"></script>');
    },100);
};


    if(nowW===deviceType[0]){
        headBox.load(url_01+'chagall_main_headBox_mobile.html');
        searchBox.load(url_03+'chagall_searchBox_mobile.html');
        importMobile();

    }else if(nowW===deviceType[1]){
        headBox.load(url_02+'chagall_headBox_tablet.html');
        searchBox.load(url_03+'chagall_searchBox_tablet.html');
        importTablet();

    }else if(nowW===deviceType[2]){
        headBox.load(url_02+'chagall_headBox_laptop.html');
        searchBox.load(url_03+'chagall_searchBox_laptop.html');
        importLaptop();

    }else if(nowW===deviceType[3]){
        headBox.load(url_02+'chagall_headBox_pc.html');
        searchBox.load(url_03+'chagall_searchBox_pc.html');
        importPc();
    }
})(jQuery);

