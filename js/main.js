//$('#field')|document.getElementById('field');

//$('.field')|document.getElementsByClassName('.field');

//$('h1')|document.getElementsByTagName('h1');


/*
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function() {
  $(this).addClass('sunkist');
})

$('li').on('click', function(){
  $(this).slideUp();
})

$('header').on('click', function () {
  $(this).slideDown();
})
*/

$(document).ready(function(){
  var userInput = $('#userInput');
  $('#userInput').on('keyup', function(){
    $('#result').html(userInput.val())
  });

});
