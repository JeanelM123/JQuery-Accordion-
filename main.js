//first line of jQuery allows the full accordion to collapse fully

$('section:not).is(:first').addClass('hidden')
$('.accordion').on('click', 'dt', function() {
  $(this).parent().removeClass('hidden').siblings().addClass('hidden');

});


//(this) refers you back to the original variable  


 
