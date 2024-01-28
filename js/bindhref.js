// Bind all a href clicks to this function
$(document).on('click', 'a', function(event){
    
    // Animate the body (html page) to scroll to the referring element 
    var offset = $(window).height() / Math.PI * 0.8;
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top - offset
    }, 1000);
});