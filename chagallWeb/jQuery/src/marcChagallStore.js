(function(){
    var nowW=deviceSize();
    var deviceType=['mobile','tablet','laptop','pc'];
    var url="./marcChagall_store/";
    var url_01="./marcChagall_main/";
    var url_02="./marcChagall_exhibition/";
    var body = $('body');
    var headBox=$('#headBox');
    var viewBox=$('#viewBox');
    var footBox=$('#footBox');

   

    var importMobile=function(){
        // headBox.append('<script src="../jQuery/src/main/chagall_headBox_mobile.js"></script>');
        // viewBox.append('<script src="../jQuery/src/main/chagall_viewBox_mobile.js"></script>');
        // footBox.append('<script src="../jQuery/src/main/chagall_footBox_mobile.js"></script>');
        setTimeout(function(){
            body.append('<script src="../jQuery/src/main/chagall_headBox_mobile.js"></script>'+
                        '<script src="../jQuery/src/store/chagall_viewBox_mobile.js"></script>'+
                        '<script src="../jQuery/src/main/chagall_footBox_mobile.js"></script>');
        }, 100);
       
    };
    var importTablet = function(){

        setTimeout(function(){
        body.append(
            
            '<script src="../jQuery/src/exhibit/chagall_headBox_tablet.js"></script>'+
            '<script src="../jQuery/src/store/chagall_viewBox_tablet.js"></script>'+
            '<script src="../jQuery/src/main/chagall_footBox_tablet.js"></script>');
    },100);
};


    var importLaptop = function(){
       
        setTimeout(function(){
        body.append(
            '<script src="../jQuery/src/exhibit/chagall_headBox_laptop.js"></script>'+
            '<script src="../jQuery/src/store/chagall_viewBox_laptop.js"></script>'+
            '<script src="../jQuery/src/main/chagall_footBox_laptop.js"></script>');
    },100);
};


    var importPc = function(){
        
        setTimeout(function(){
        body.append(
            '<script src="../jQuery/src/exhibit/chagall_headBox_pc.js"></script>'+
            '<script src="../jQuery/src/store/chagall_viewBox_pc.js"></script>'+
            '<script src="../jQuery/src/main/chagall_footBox_pc.js"></script>');
    },100);
};


    if(nowW===deviceType[0]){
        headBox.load(url_01+'chagall_main_headBox_mobile.html');
        viewBox.load(url+'chagall_store_viewBox_mobile.html');
        footBox.load(url_01+'chagall_main_footBox_mobile.html');
        importMobile();

    }else if(nowW===deviceType[1]){
        headBox.load(url_02+'chagall_headBox_tablet.html');
        viewBox.load(url+'chagall_store_viewBox_tablet.html');
        footBox.load(url_01+'chagall_main_footBox_tablet.html');
        importTablet();

    }else if(nowW===deviceType[2]){
        headBox.load(url_02+'chagall_headBox_laptop.html');
        viewBox.load(url+'chagall_store_viewBox_laptop.html');
        footBox.load(url_01+'chagall_main_footBox_laptop.html');
        importLaptop();

    }else if(nowW===deviceType[3]){
        headBox.load(url_02+'chagall_headBox_pc.html');
        viewBox.load(url+'chagall_store_viewBox_pc.html');
        footBox.load(url_01+'chagall_main_footBox_pc.html');
        importPc();
    }
})(jQuery);

