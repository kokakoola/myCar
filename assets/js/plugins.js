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

    $('#calendar').clndr()

                  var currentMonth = moment().format('YYYY-MM');
              var nextMonth    = moment().add('month', 1).format('YYYY-MM');
              var events = [
                { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
                { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
                { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
                { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
              ];

            $('#mini-clndr').clndr({
                template: $('#calendar-template').html(),
                events: events,
                clickEvents: {
                  click: function(target) {
                    if(target.events.length) {
                      var daysContainer = $('#mini-clndr').find('.days-container');
                      daysContainer.toggleClass('show-events', true);
                      $('#mini-clndr').find('.x-button').click( function() {
                        daysContainer.toggleClass('show-events', false);
                      });
                    }
                  }
                },
                adjacentDaysChangeMonth: true
              });
}());

// Place any jQuery/helper plugins in here.
