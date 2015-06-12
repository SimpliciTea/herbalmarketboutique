var currentSlide = 1; //starting slide 
var maxNum = 3; //this is the max number of slides
var ImgPrefix = "images/CarouselImg";
var ImgPostfix = ".jpg";




// ON PAGE LOAD
$(document).ready(function () {
    
    //INITIAL CAROUSEL IMAGE
    goto(currentSlide);
    
    $(function() {      
      //Enable swiping...
      $("#Carousel").swipe( {
        //Swipe handlers for left and right touch-swipe
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          event.preventDefault();
          goto(currentSlide-1);  
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          event.preventDefault();
          goto(currentSlide+1);
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });
    });

    //NEXT arrow click listener and function
    $('#goNext').click(function () {
        event.preventDefault();
    	goto(currentSlide+1);
        resetInterval();
    });
    
    //BACK arrow click listener and function
    $('#goBack').click(function () {
        event.preventDefault();
    	goto(currentSlide-1);
        resetInterval();
    });

    //Interval to change slide every 3 seconds
    var interval = setInterval( function() {goto(currentSlide+1)} , 5000);
    
    

}); //END ON PAGE LOAD

function resetInterval() {
    clearInterval(interval);
    interval = setInterval( function() {goto(currentSlide+1)} , 5000)
};

// CAROUSEL FUNCTIONS
function goto(n){
    if(n<1) {
		n=maxNum
        }
    if(n > maxNum) {
		n= 1;
        }
	currentSlide = n
	update()
    return;
}

function update() {
    //$('#CarouselImg').attr("src", ImgPrefix + currentSlide + ImgPostfix);
    //Hide everything
    $('.carouselContent').hide();
    //show the current slide
    $('#slide' + currentSlide).show();
}