//Navigation menu fuctionality
const navItems = document.querySelector("nav ul li");
const hamburger = document.getElementById("hamburgermenu-icon");
const closeIcon = document.getElementById("closemenu-icon");
const mobileNav = document.getElementById("mobile-nav");
closeIcon.style.display = "none";
mobileNav.style.display = "none";

//Hamburger menu click functionality
hamburger.addEventListener("click", function (event) {
	if (mobileNav.style.display === "none") {
		mobileNav.style.display = "block";
		hamburger.style.display = "none";
		closeIcon.style.display = "block";
	}

	console.log("working");
});

//close menu click functionality
closeIcon.addEventListener("click", function () {
	mobileNav.style.display = "none";
	hamburger.style.display = "block";
	closeIcon.style.display = "none";
});

window.addEventListener("mouseup", function (event) {
	if (event.target != navItems) {
		mobileNav.style.display = "none";
		hamburger.style.display = "block";
		closeIcon.style.display = "none";
	}
});
