
 var posc='homemc';

$(function(){

$('.next').click(function() {

if (posc=='homemc2') {
 $('.co').css('display', 'none');
  $('#mulherc').css('display', 'block');

posc='mulherc';

}

else if (posc=='mulherc') {
  $('.co').css('display', 'none');
  $('#mulherc2').css('display', 'block');
  
  posc='mulherc2';
}


else if (posc=='mulherc2') {
  $('.co').css('display', 'none');
  $('#cric').css('display', 'block');
  
  posc='cric';
}


else if (posc=='cric') {
  $('.co').css('display', 'none');
  $('#cric2').css('display', 'block');
  
  posc='cric2';
}


else if (posc=='cric2') {
  $('.co').css('display', 'none');
  $('#homemc').css('display', 'block');
  
  posc='homemc';
}

else if (posc=='homemc') {
  $('.co').css('display', 'none');
  $('#homemc2').css('display', 'block');
  
  posc='homemc2';
}



});

$('.prev').click(function() {

  if (posc=='homemc2') {
  $('#homemc').css('display', 'block');
  $('#homemc2').css('display', 'none');

posc='homemc';

}

else if (posc=='mulherc') {
  $('#homemc2').css('display', 'block');
  $('#mulherc').css('display', 'none');
  
  posc='homemc2';
}


else if (posc=='mulherc2') {
  $('#mulherc').css('display', 'block');
  $('#mulherc2').css('display', 'none');
  
  posc='mulherc';
}


else if (posc=='cric') {
  $('#mulherc2').css('display', 'block');
  $('#cric').css('display', 'none');
  
  posc='mulherc2';
}


else if (posc=='cric2') {
  $('#cric').css('display', 'block');
  $('#cric2').css('display', 'none');
  
  posc='cric';
}

else if (posc=='homemc') {
  $('#cric2').css('display', 'block');
  $('#homemc').css('display', 'none');
  
  posc='cric2';
}
 

});


$('.example-image ').click(function(event) {
  $('.seta').hide();
});

$('.lb-close').click(function(event) {
  $('.seta').show();
});

$('.lightbox').click(function(event) {
  $('.seta').show();
});



});