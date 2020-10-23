
$('.lines-tab_content ul li ul').parent('li').css({
    'color':'#000',
    'font-weight': 'bold'
});


$('.video-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.video-tabs li').removeClass('current');
    $('.video-tab_content').removeClass('current');

    $(this).addClass('current');
      $("#"+tab_id).addClass('current');
});

// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});

$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("style");
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("width");
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("border");
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("cellpadding");
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("cellspacing");
$(".custom-wrapp_table table , .custom-wrapp_table table tr , .custom-wrapp_table table td , .custom-wrapp_table table th , .custom-wrapp_table table div").removeAttr("valign");