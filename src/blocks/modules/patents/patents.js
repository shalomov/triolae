$('.patent-tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.patent-tabs li').removeClass('current');
    $('.patent-tab_content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');

});


$('.patents-list_products li').click( function(){

  


    var tab_id = $(this).attr('data-active');


    $('.patents-list_products li').removeClass('active-patent_product');
    $('.content-patents_item').removeClass('active-patent_product');

    if ( $(this).hasClass('active-patent_product') == false ) {
        $('.patents-list_products li').removeClass('active-patent_product');
        $(this).addClass('active-patent_product');
    }


    $("#"+tab_id).addClass('active-patent_product');

});