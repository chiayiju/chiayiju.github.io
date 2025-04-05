(function() {
	const theme = localStorage.getItem('theme') || 'dark';
	document.documentElement.setAttribute('data-theme', theme);
	
	document.addEventListener("DOMContentLoaded", function() {
		const logo = document.getElementById("logo");
		if (logo) {
			if (parent) {
				logo.src = theme === "dark" ? "images/logo-dark.webp" : "images/logo-light.webp";
			} else {
				logo.src = theme === "dark" ? "../images/logo-dark.webp" : "../images/logo-light.webp";
			}
		}

		const toggleButton = document.getElementById("theme-toggle");
		if (toggleButton) {
			toggleButton.innerHTML = theme === "dark" ? '&#9790;' : '&#9728;';
			toggleButton.style.backgroundColor = theme === "dark" ? '#333' : '#f5f5f5';
			toggleButton.style.color = theme === "dark" ? '#f5f5f5' : '#333';
		}

		const menuButton = document.getElementById("menu-toggle");
		if (menuButton) {
			menuButton.style.color = theme === "dark" ? '#f5f5f5' : '#000';
		}

		const navmenu = document.getElementById("main-nav");
		if (navmenu) {
			navmenu.style.backgroundColor = theme === "dark" ? 'black' : 'white';
			navmenu.style.color = theme === "dark" ? 'white' : 'black';
			if (window.innerWidth < 1280) {
				navmenu.style.backgroundColor = theme === "dark" ? 'rgba(50, 50, 50, 1)' : 'rgba(240, 240, 240, 1)';
				navmenu.style.boxShadow = theme === "dark" ? '0 4rem 8rem rgba(100, 10, 10, 0.6)' : '0 4rem 8rem rgba(10, 100, 10, 0.2)';
			} else {
				navmenu.style.boxShadow = 'none';
			}
		}

		const BGColor = document.getElementById("BGColor");
		if (BGColor) {
			BGColor.style.backgroundColor = theme === "dark" ? '#333' : '#f5f5f5';
		}

		const elements = document.querySelectorAll(".content");
			elements.forEach(el => {
			el.style.backgroundColor = theme === "dark" ? '#333' : '#f5f5f5';
		});

		const footerBackground = document.getElementById("footer");
		if (footerBackground) {
			footerBackground.style.backgroundColor = theme === "dark" ? 'black' : 'white';
			footerBackground.style.color = theme === "dark" ? 'white' : 'black';
		}

		const hyperlink = document.querySelectorAll(".hyperlink");
			hyperlink.forEach(color => {
			color.style.color = theme === "dark" ? '#66ccff' : '#1a0dab';
		});

		document.body.style.display = "block";
	});
})();
