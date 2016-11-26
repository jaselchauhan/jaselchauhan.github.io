// function animateBackground(){
//    $('#introSection').ambience({
//      time:3000,
//      colors: ['black','darkgrey','darkblue', 'cyan','black','darkgrey','cyan','darkblue','cyan'],
//      speed:"fast"
//      }
//      );
//    };
//
//    animateBackground();
//
// console.log("hi from app.js");

$(function() {
    console.log("hi from app.js");

    var $introTextMain  = $('#intro_heading');
    var $aboutText      = $('#about_me_text');
    var $aboutNav       = $('#navbar_about');
    var $aboutBtn       = $('#about_btn');
    var $shader         = $('#shader');

    
    $aboutBtn.click(function(){
      $aboutText.fadeIn(6000);
      $shader.fadeIn(4000);
    })

    $aboutNav.click(function(){
      $aboutText.fadeIn(6000);
      $shader.fadeIn(4000);
    })


    // $($introTextMain).delay(3000).addClass('animated bounce infinite');


    //when the about navbar text is highlighted fade in the about text. when not highlighted fade out.

});
