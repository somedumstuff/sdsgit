let buttons = document.getElementById("buttons")
var gallery = document.getElementById("gallery")
var left = 0
var reset = document.getElementById("reset")

for (const child of buttons.childNodes) {
  console.log(child)
}


buttons.addEventListener("click", (event) => {
let childrenId = event["target"]["attributes"][0]

console.log(childrenId["value"])

  if (childrenId["value"] == "one"){
    console.log("1")
    gallery.style.transform = "translateX(0%)"
  }
  else if (childrenId["value"] == "two"){
    console.log("2")
    gallery.style.transform = "translateX(-15%)"
  }

  else if (childrenId["value"] == "three"){
    console.log("2")
    gallery.style.transform = "translateX(-25%)"
  }
  
  else if (childrenId["value"] == "four"){
    console.log("2")
    gallery.style.transform = "translateX(-35%)"
  }
  
  else if (childrenId["value"] == "five"){
    console.log("2")
    gallery.style.transform = "translateX(-45%)"
  }

});

let details = navigator.userAgent
let css = document.getElementById("css")
let regexp = /android|iphone|kindle|ipad/i

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
