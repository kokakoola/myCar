(function($){

    // directional modal
    $('.btn-serviceModal').click(function() {
        $('#serviceModal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
        $('#serviceModal').modal('show');

    });

    $('.btn-eventModal').click(function() {
        $('#eventModal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
        $('#eventModal').modal('show');

    });

    $('.btn-addCar').click(function() {
        $('#addCar')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
        $('#addCar').modal('show');

    });

    $('.link-Conditions').click(function() {
        $('#conditions')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
        $('#conditions').modal('show');

    });

    $('.btn-changePass').click(function() {
        $('#changePass')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
        $('#changePass').modal('show');

    });

    $('.close').click(function() {
        $(this).modal('hide');
    });

})(jQuery);
