//CLOCK

// Set the date we're counting down to
var countDownDate = new Date("Dec 29, 2029 23:00:00").getTime();

function setTime() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = years + " År, " + days + " dagar, " + "<br>" + hours + " timmar, " + minutes + " minuter " + "<br>" + " och " + seconds + " sekunder ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}

setTime()

// Update the count down every 1 second
var x = setInterval(setTime, 1000);






//SCROLL DOWN PANELS (MAJORITY PANELS)

/*

    $(function () { // wait for document ready
      //init
      const controller = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
          duration: "100%" // this works just fine with duration 0 as well
          // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
          // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
      });
    
      // get all slides
      const slides = document.querySelectorAll("section.section");
    
      // create scene for every slide
      for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
          triggerElement: slides[i]
        })
          .setPin(slides[i], { pushFollowers: false })
          //.addIndicators() // add indicators (requires plugin)
          .addTo(controller);
      }
      
    });
  
    */
    