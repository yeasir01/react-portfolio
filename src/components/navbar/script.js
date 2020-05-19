$('window').scroll(function(){
    
    var scroll = $('window').scrollTop();
    
    if(scroll < 15){
        $('.fixed-top').removeClass('scroll-nav');
    } else{
        $('.fixed-top').addClass('scroll-nav');
    }
});