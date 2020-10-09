// Bind all a href clicks to this function
$(document).on('click', 'a', function(event){

    // Animate the body (html page) to scroll to the referring element 
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top - 250
    }, 1000);
});