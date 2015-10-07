 
 $('.section1').click(function() {
    
    if($('.section1').hasClass('abc')) {       
        $(this).removeClass('abc').addClass('ccc');
    }
    else{
        $(this).removeClass('ccc').addClass('abc');
    }
});