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

// owl carousel
  $('.owl-carousel').owlCarousel({
    singleItem:true,
    // navigation: true,
    //     navigationText: [
    //   "<i class='icon-chevron-left icon-white'></i>",
    //   "<i class='icon-chevron-right icon-white'></i>"
    //   ],
    autoPlay: true,
    slideSpeed: 300,
    stopOnHover: true,
    pagination: false

  });

  $('.owl-carousel-1').owlCarousel({
    loop:true,
    nav:true,
    items: 2,
    margin: 0,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,3]
});

  var owl = $(".owl-carousel-1");
    // Custom Navigation Events
  $(".carousel-control.right").click(function(){
    owl.trigger('owl.next');
  })
  $(".carousel-control.left").click(function(){
    owl.trigger('owl.prev');
  })


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

      $('#nav-secondary-level').localScroll({
        target: 'body', // could be a selector or a jQuery object too.
        queue:true,
        duration:1000,
        hash:true,
        onBefore:function( e, anchor, $target ){
          // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
          // The 'this' contains the scrolled element (#content)
        }
      });


}());





// Place any jQuery/helper plugins in here.
