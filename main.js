(function() {
	const theme = localStorage.getItem('theme') || 'dark';
	document.documentElement.setAttribute('data-theme', theme);
	
	document.addEventListener("DOMContentLoaded", function() {
		const logo = document.getElementById("logo");
		if (logo) {
			logo.src = theme === "dark" ? "images/logo-dark.webp" : "images/logo-light.webp";
		}
		const toggleButton = document.getElementById("theme-toggle");
		if (toggleButton) {
			toggleButton.innerHTML = theme === "dark" ? '&#9790;' : '&#9728;';
			toggleButton.style.backgroundColor = theme === "dark" ? '#333' : '#f5f5f5';
			toggleButton.style.color = theme === "dark" ? '#f5f5f5' : '#333';
		}
		document.body.style.display = "block"; // Show body after setting the theme
	});
})();
