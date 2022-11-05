//Navigation menu fuctionality
const hamburger = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#closemenu-icon");
const mobileNav = document.querySelector("#mobile-nav");
const body = document.querySelector("#body");
closeIcon.style.display = "none";
mobileNav.style.display = "none";

//Hamburger menu click functionality
hamburger.addEventListener("click", function() {
  console.log("working")
});


//close menu click functionality
closeIcon.addEventListener("click", function() {
  mobileNav.style.display = "none";
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
});



