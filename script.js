const popup = document.getElementById("popup")
const submitbutton = document.getElementById("submit")
const okbutton = document.getElementById("ok")


submitbutton.addEventListener(
  "click",
  function() {
    popup.classList.add("open-popup")
  })


okbutton.addEventListener(
  "click",
  function() {
    popup.classList.remove("open-popup")
  })
