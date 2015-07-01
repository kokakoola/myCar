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

    $('.js-scroll-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

})(jQuery);

$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        document.getElementById("logo-big").style.transform = "translate(0, -160px)";
        $('#logo-medium').css({opacity: 1});
    } else {
        document.getElementById("logo-big").style.transform = "translate(0, 0)";
        $('#logo-medium').css({opacity: 0});
    }
});
