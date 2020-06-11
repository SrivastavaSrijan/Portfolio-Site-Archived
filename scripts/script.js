//Arrow to jump to experience
var leadDown=$('#lead-down');
leadDown.click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });
 $(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
 //Scroll to top
$('#to-top').click(function() {
$('html, body').animate({
    scrollTop: 0
}, 500);
});

//Typewriter Script
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(' am a Coffee Snob')
    .pauseFor(800)
    .deleteAll()
    .typeString(' cook')
    .pauseFor(800)
    .deleteAll()
    .typeString(' code')
    .pauseFor(800)
    .deleteAll()
    .typeString(' write' )
    .pauseFor(800)
    .deleteAll()
    .typeString(' binge')
    .pauseFor(800)
    .deleteAll()
    .typeString(' give back')
    .pauseFor(800)
    .deleteAll()
    // .typeString('Cadet Who Develops')
    // .pauseFor(00)
    // .deleteChars(8)
    // .typeString('Codes')
    // .pauseFor(3200)
    .start();


// //Transparent Navbar
var nav=document.querySelector('.navbar');
function checkScroll(){
    containerPos = container.getBoundingClientRect();
    var startY = nav.style.height * 2; //The point where the navbar changes in px
    if($(window).scrollTop()> startY){
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
}

$(window).on("scroll load resize", function(){
        checkScroll();
});


//Progress bar
const progressBar=document.getElementById('progressBarCont');
const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');

var containerHeight;
window.onscroll = function() {
    if( progressBar.style.visibility==='hidden'){
        progressBar.style.visibility='visible'
    }
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPos = container.getBoundingClientRect();
    diff = containerHeight + containerPos.top;
    progressPercentage =  diff / containerHeight * 100;
    cssWidth = Math.floor(100 - progressPercentage);

    if(cssWidth<100){
        progressBar.style.position ='visible'
        highlight.style.width = cssWidth + "%"; 
    }
    else{
        progressBar.style.position ='hidden'
    }
    var delayInMilliseconds1=1500;
    var delayInMilliseconds2=1500;
    setTimeout(function() {
         progressBar.style.visibility='hidden';
    }, delayInMilliseconds2);

};
 function GFG_Fun() { 
            var res = "Device is not Android Phone"; 
            var userAgent = navigator.userAgent.toLowerCase(); 
            var Android = userAgent.indexOf("android") > -1; 
            if(Android) { 
                console.log("Device is Android Phone"); 
            }
            else{
                 // Repeat demo content
                 console.log("Device is NOT Android Phone"); 
              var $body = $('body');
              var $box = $('.box');
              for (var i = 0; i < 20; i++) {
                $box.clone().appendTo($body);
              }

              // Helper function for add element box list in WOW
              WOW.prototype.addBox = function(element) {
                this.boxes.push(element);
              };

              // Init WOW.js and get instance
              var wow = new WOW();
              wow.init();

              // Attach scrollSpy to .wow elements for detect view exit events,
              // then reset elements and add again for animation
              $('.wow').on('scrollSpy:exit', function() {
                $(this).css({
                  'visibility': 'hidden',
                  'animation-name': 'none'
                }).removeClass('animated');
                wow.addBox(this);
              }).scrollSpy();
          }
        }
        GFG_Fun();
         