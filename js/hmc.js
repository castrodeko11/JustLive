var pos=true;


$(function(){



$('.next').click(function() {

if (pos==false) {
  $('#homem2').css('display', 'none');
  $('#homem').css('display', 'block');
  $('#mulher2').css('display', 'none');
  $('#mulher').css('display', 'block');
  $('#cri2').css('display', 'none');
  $('#cri').css('display', 'block');
  

  pos=true;
}
 else if (pos==true){
  $('#homem').css('display', 'none');
  $('#homem2').css('display', 'block');
  $('#mulher').css('display', 'none');
  $('#mulher2').css('display', 'block');
  $('#cri').css('display', 'none');
  $('#cri2').css('display', 'block');
 
  pos=false;

}

});

$('.prev').click(function() {
  if (pos==false) {
  $('#homem2').css('display', 'none');
  $('#homem').css('display', 'block');
  $('#mulher').css('display', 'block');
  $('#mulher2').css('display', 'none');
  $('#cri').css('display', 'block');
  $('#cri2').css('display', 'none');
 pos=true;
}

else if (pos==true){
  $('#homem').css('display', 'none');
  $('#homem2').css('display', 'block');
  $('#mulher2').css('display', 'block');
  $('#mulher').css('display', 'none');
  $('#cri2').css('display', 'block');
  $('#cri').css('display', 'none');
  pos=false;
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