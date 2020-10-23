$(document).ready( function(){

    $('.doc-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.doc-tabs li').removeClass('current');
		$('.doc-tab_content').removeClass('current');

		$(this).addClass('current');
		  $("#"+tab_id).addClass('current');
    });

	// filter content toggle
	
	$('.products-list_item > a').click( function(e){

		$(this).toggleClass('active-elem');
		if ( $('.products-list_item > .active-elem').length > 1 ) {
			$('.products-list_item > a').removeClass('active-elem');
			$(this).toggleClass('active-elem');
		}

	});

	$('.products-list a , .read-more_link' ).click( function(e){
		e.preventDefault();
	});
	$('.search-results_page .read-more_link').unbind('click');
	
	// filter content toggle

	
	//

	$('.lines-list li a').click(function(e){
		let targetItem = event.target;
		$('.lines-list li a').removeClass('active-line');
		$(targetItem).addClass('active-line');
	});

    //
    
});