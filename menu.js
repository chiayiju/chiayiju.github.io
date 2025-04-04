document.addEventListener("DOMContentLoaded", function () {
	const toggleBtn = document.getElementById("menu-toggle");
	const nav = document.getElementById("main-nav");

	toggleBtn.addEventListener("click", function () {
	nav.classList.toggle("show");
	});
});