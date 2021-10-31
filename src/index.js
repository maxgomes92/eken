function goTo (url) {
  window.location.href = url + window.location.search
}
 
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function togglePageLinks() {
  const pageLinksEl = document.querySelector(".page-links");

  if (pageLinksEl.classList.contains("page-links-mobile")) {
    pageLinksEl.classList.remove("page-links-mobile")
  } else {
    pageLinksEl.classList.add("page-links-mobile")
  }
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const myTopNavEl = document.getElementById("myTopnav")

  if (prevScrollpos > currentScrollPos) {
    myTopNavEl.style.top = "0";
  } else {
    myTopNavEl.style.top = "-52px";
  }
  prevScrollpos = currentScrollPos;

  if (currentScrollPos > 100) {
    myTopNavEl.style['background-color'] = 'rgba(0, 0, 0, .4)';
  } else {
    myTopNavEl.style['background-color'] = '#F04E37';
  }
}


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
  const title = t('page_index.section_one.title')
    .replace('{years}', years)
    .replace('{hours}', hours)
    .replace('{days}', days)
    .replace('{minutes}', minutes)
    .replace('{seconds}', seconds)

  document.getElementById("demo").innerHTML = title

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
setUpAnimations()

