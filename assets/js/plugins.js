// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }

  // bootstrap popover
  $('[data-toggle="popover"]').popover();

  // bootstrap datepicker
  $('.date').datepicker();

  // owl carousel news list
  var owl = $(".owl-carousel-list");
  owl.owlCarousel({
    singleItem:true,
    autoPlay: true,
    slideSpeed: 300,
    stopOnHover: true,
    pagination: false
  });

  // carousel for offers
  var owl1 = $(".owl-carousel-1");
  owl1.owlCarousel({
    loop:true,
    nav:true,
    items: 2,
    margin: 0,
    scrollPerPage: true,
    slideSpeed: 1800,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,3]
  });

  var owl3 = $(".owl-carousel-nav");
  owl3.owlCarousel({
    loop: true,
    autoPlay: true,
    autoWidth:true,
    slideSpeed: 300,
    pagination: false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });

  // Custom Navigation Events
  $("#offers .carousel-control.right").click(function(){
    owl1.trigger('owl.next');
  });
  $("#offers .carousel-control.left").click(function(){
    owl1.trigger('owl.prev');
  });

  //carousel for accessories
  var owl2 = $(".owl-carousel-accessories");
  owl2.owlCarousel({
    loop:true,
    nav:true,
    items: 4,
    margin: 0,
    scrollPerPage: true,
    slideSpeed: 1800,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3]
  });
  // Custom Navigation Events
  $("#accessories .carousel-control.right").click(function(){
    owl2.trigger('owl.next');
  });
  $("#accessories .carousel-control.left").click(function(){
    owl2.trigger('owl.prev');
  });

  // Bind to the click of all links with a #hash in the href
  $('.scrollTo').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true, offset: {top: -120}});
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
  });

  // http://jsfiddle.net/duck/aEwNt/

  // $('#calendar').clndr();
  var currentMonth = moment().format('YYYY-MM');
  var prevMonth    = moment().add( -1, 'month').format('YYYY-MM');
  var nextMonth    = moment().add(-1, 'month').format('YYYY-MM');
  var events = [
    { time: '14.00 - 16.00', date: currentMonth + '-' + '14', title: 'Autopesu ja vahatamine', location: 'Mustakivi Auto', linkto: '' },
    { time: '14.00 - 16.00', date: currentMonth + '-' + '19', title: 'Teenindus 32 417 km', location: 'Mustakivi Auto', type: 'important', linkto: '' },
    { time: '14.00 - 16.00', date: currentMonth + '-' + '23', title: 'Rehvivahetus', location: 'Kummimeister', linkto: ''  },
    { time: '14.00 - 16.00', date: currentMonth + '-' + '07',    title: 'Hooldus', location: 'Mustakivi Auto', linkto: '' }
  ];

  $('#mini-clndr').clndr({
    template: $('#calendar-template').html(),
    events: events,
    weekOffset: 1,

    clickEvents: {
      click: function(target) {
        $('#eventModal')
        .prop('class', 'modal fade') // revert to default
        .addClass( 'right' );
        $('#eventModal').modal('show');
      }
    },
    adjacentDaysChangeMonth: true
  });

  $("#collapseBtn").on('click', firstClick);

  function firstClick() {
    $("#collapsePass").collapse('show');
  }

  $('#collapsePass').on('shown.bs.collapse', function () {
    $('.btn').on('click', function () {
      if ($(this).data('target') == '#collapsePass') {
        window.location.href="index.html";
      }
    });
  });

  // dialogs - more methods at:
  //http://nakupanda.github.io/bootstrap3-dialog/#available-options

}());
