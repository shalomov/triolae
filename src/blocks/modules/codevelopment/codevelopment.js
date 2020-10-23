
  if ( $('.codev').length > 0 ) {
      
    var block_show = false;
    
    function scrollTrackingCodev(){
        if (block_show) {
            return false;
        }
    
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.co-development_list').offset().top;
        var eh = $('.co-development_list').outerHeight();
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            

            $('.co-development-count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                    }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                    });
                });
        }
    }
    
    $(window).scroll(function(){
        scrollTrackingCodev();
    });
        
    $(document).ready(function(){ 
        scrollTrackingCodev();
    });


var block_show_second = false;
 
function scrollTrackingSecond(){
    if (block_show_second) {
        return false;
    }
 
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.codev-innov_list').offset().top;
    var eh = $('.codev-innov_list').outerHeight();
    var dh = $(document).height();   
 
    if (wt + wh >= et || wh + wt == dh || eh + et < wh){
        block_show_second = true;
        

           $('.codev-count').each(function () {
               $(this).prop('Counter',0).animate({
                Counter: $(this).text()
                }, {
                 duration: 2000,
                 easing: 'swing',
                 step: function (now) {
                    $(this).text(Math.ceil(now));
                 }
                });
            });


    }
}
 
$(window).scroll(function(){
    scrollTrackingSecond();
});
    
$(document).ready(function(){ 
    scrollTrackingSecond();
});


}

$(' .codev-wrapp .footer-form_btn').click(function(e){
    $('.footer-form').addClass('d-block');
    $('body').addClass('implementations-modal');
});
