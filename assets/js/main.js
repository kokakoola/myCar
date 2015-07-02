$(function () {

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

    $("#scrollServicesListed").click(function() {
        $('.modal-content').animate({
            scrollTop: 600
        }, 500);
    });

});

var translateCss = function ($obj, $x, $y) {
    $obj.css({
        "-webkit-transform":"translate("+ $x +"px, "+ $y +"px)",
        "-ms-transform":"translate("+ $x +"px, "+ $y +"px)",
        "-o-transform":"translate("+ $x +"px, "+ $y +"px)",
        "transform":"translate("+ $x +"px, "+ $y +"px)"
    });
}

$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        translateCss($("#logo-big"), 0, -160);
        $('#logo-medium').css({opacity: 1});
    } else {
        translateCss($("#logo-big"), 0, 0);
        $('#logo-medium').css({opacity: 0});
    }
});
