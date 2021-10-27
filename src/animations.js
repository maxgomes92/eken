/* function shouldAnimationBeEnabled () {
  return window.innerHeight * window.innerWidth > 600000 // Pixel area
} */

function setUpAnimations() {
  const sectionController = new ScrollMagic.Controller({
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

   if ([7,8,9,10].includes(i)) continue;

      
    const scene = new ScrollMagic.Scene({
      triggerElement: slides[i]
    })
      .setPin(slides[i], { pushFollowers: false })
      //.addIndicators() // add indicators (requires plugin)
      .addTo(sectionController);
  }

  const headerController = new ScrollMagic.Controller();

  // index: 0, 1, 2, 3...
  // const list = ['#block-one'] // length is 2

  // 1st -> initial value
  // 2nd -> while condition
  // 3rd -> increment
  //for (let el = 0; el < list.length; el++) {
  // This part will be executed as many times as elements of my list
  const scene = new ScrollMagic.Scene({
    triggerElement: ".headline",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: "40%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 70 // move trigger to center of element
  })

  scene
    .setClassToggle(".headline", "visible") // add class to reveal
    //.addIndicators() // add indicators (requires plugin)
    .addTo(headerController);

    
  function toggleAnimation (state) {
    headerController.enabled(state)
    sectionController.enabled(state)
  }


  if 
  (!shouldAnimationBeEnabled()) {
    toggleAnimation(false)
  }
  

  

  window.onresize = () => {
    headerController.update()
    sectionController.update()
  }
} 
