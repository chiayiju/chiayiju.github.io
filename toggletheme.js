function toggleTheme(isToggle = false) {
	let theme;

	if (isToggle) {
		const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
		theme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	} else {
		theme = localStorage.getItem('theme') || 'dark';
		document.documentElement.setAttribute('data-theme', theme);
	}

	const logo = document.getElementById("logo");
	if (logo) {
		const path = parent ? "images/" : "../images/";
		logo.src = theme === "dark" ? path + "logo-dark.webp" : path + "logo-light.webp";
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
			navmenu.style.backgroundColor = theme === "dark" ? 'rgba(50, 50, 60, 0.95)' : 'rgba(250, 250, 240, 0.95)';
			navmenu.style.boxShadow = theme === "dark" ? '0 4rem 8rem rgba(10, 10, 100, 0.6)' : '0 4rem 8rem rgba(100, 100, 10, 0.2)';
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
	
	const stickys = document.querySelectorAll(".sticky-row");
		stickys.forEach(sticky => {
		sticky.style.backgroundColor = theme === "dark" ? 'rgb(50, 50, 50)' : 'rgb(200, 200, 200)';
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

	if (!isToggle) {
		document.body.style.display = "block";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	toggleTheme(false);
});
