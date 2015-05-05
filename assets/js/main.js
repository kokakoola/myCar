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

  var source   = $("#page-footer-template").html();
  var template = Handlebars.compile(source);
  var data = {
    "hooldus": [
      {"tegevus": "Jalamati kinnituse kontroll"},
      {"tegevus": "Piduripedaali kõrguse ja seisupiduri töötamise kontroll"},
      {"tegevus": "Tulede (ka salongi- ja armatuurivalgustus) ja helisignaali kontroll (vajadusel lampide vahetus lisatööna)"},
      {"tegevus": "Klaasipuhastite ja -pesurite (ka laternapesurid) töötamise kontroll"},
      {"tegevus": "Sisepõlemismootori jahutusvedeliku taseme ja külmakindluse kontroll"},
      {"tegevus": "Määrde-, jahutus- ja soojendussüsteemide voolikute ja liidete kontroll"},
      {"tegevus": "Aku kontroll: vedelikutase, kinnitus, klemmide puhtus ja kinnitus"},
      {"tegevus": "Akutesti tegemine Midtronics akutestriga ja aku seisukorra märkimine kontroll-lehele"},
      {"tegevus": "Mootori abirihmade kontroll ja pingutus (vajadusel vahetus lisatööna)"},
      {"tegevus": "Mootori õhufiltri kontroll ja puhastus"},
      {"tegevus": 'Rehvi remontgeeli "Parim enne" kuupäeva kontroll (vajadusel vahetus kliendi nõusolekul'},
      {"tegevus": "Ketaspidurite kontroll (hõõrdkatted ja kettad, vajadusel vahetus lisatööna) ja hooldus (puhastamine ja määrimine), 15 000 km hoolduses ainult kontroll"},
      {"tegevus": "Seisupiduritrumlite kontroll ja puhastus ning piduriklotside hõõrdkatete paksuse kontroll (vajadusel vahetus lisatööna)"},
      {"tegevus": "Rehvirõhkude kontroll (vajadusel korrigeerimine) ja rehvi kulumise mõõtmine"},
      {"tegevus": "Rooliliigendite kaitsekatete ja roolilõtku kontroll"},
      {"tegevus": "Alusvankri kontroll: summuti kinnitused ja korrosioon; piduri- ja kütusetorude ja -voolikute murdumine, lekkimine ja korrosioon; kuulliigendite ja veovõllide ning nende kummist kaitsekatete kontroll"},
      {"tegevus": "Põhja ja värvipinna korrosiooni kontroll (kaitsekihi lisamine vajadusel lisatööna)"},
      {"tegevus": "Jõuülekande lekete kontroll"}
      ]
  };
  var html    = template(data);
  $("#placeholder-page-footer").html(html);

//////////////// 

  // var currentMonth = moment().format('YYYY-MM');
  // var nextMonth    = moment().add('month', 1).format('YYYY-MM');
  // var source   = $("#clndr-template").html();
  // var template = Handlebars.compile(source);
  // var dataClndr = {
  //   "clndr": [
  //   { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats', kind: 'important' },
  //   { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park', kind: 'low' },
  //   { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats', button: 'Broneeri' },
  //   { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
  //  ]
  // };
  // var html    = template(dataClndr);
  // $("#placeholder-clndr").html(html);

  /////
