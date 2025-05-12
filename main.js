var next = document.getElementById("next")
var gallery = document.getElementById("gallery")
var left = 0
var reset = document.getElementById("reset")


next.addEventListener("click", (event) => {
  if (left >= 30) {
    left = 0;
    gallery.style.transform = "translateX(0%)"
  }
  else {
    left = left + 5
    console.log(left)
    gallery.style.transform = "translateX(" + "-" + left + "%)"
    console.log(gallery.style.transform)
  }

});

reset.addEventListener("click", (event) => {

  left = 0;
  gallery.style.transform = "translateX(0%)"

});

let details = navigator.userAgent
let css = document.getElementById("css")
let regexp = /android|iphone|kindle|ipad/i
let buttons = document.getElementById("buttons")
let isMobileDevice = regexp.test(details)
let desc = document.getElementById("desc")
if (isMobileDevice) {
  console.log("You are using a Mobile Device")
  css.setAttribute('href', 'mobile.css')
  buttons.remove()
  desc.style.marginBottom = "10px"
} else {
  console.log("You are using Desktop")
}
