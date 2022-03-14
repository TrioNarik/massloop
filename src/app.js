// Shadow + Header Fixed
window.onscroll = function () {
	myFunction();
};

function myFunction() {
	var navbar = document.getElementById("head-navbar");

	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

// languages Menu + Shadow
function showLang() {
	document.getElementById("langList").classList.toggle("show");
	document.getElementById("shadow").classList.toggle("drop-shadow");
}

// Calculator
function val() {
	var a = parseInt(document.getElementById("bottle").value);
	var b = parseInt(document.getElementById("cost").value);

	var multi = document.getElementById("rezult");

	if (a > 0 && b > 0) {
		multi.innerHTML = Math.round(12 * (a * b - (a * b) / 5)) + " zł";
		multi.classList.add("opacity--value");
	} else {
		multi.innerHTML = 0 + " zł";
		multi.classList.remove("opacity--value");
	}
}
