// team-item text modal

$('.sup-team .cont-modal').click(function(e){

    $('#fperson').val($(this).closest('.team-item').find('h3').text());
    $('#fperson_email').val($(this).closest('.team-item').find('.person-email').val());

});

// team-item text modal end