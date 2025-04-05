function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);

	const logo = document.getElementById("logo");
	if (logo) {
		if (parent) {
			logo.src = newTheme === "dark" ? "images/logo-dark.webp" : "images/logo-light.webp";
		} else {
			logo.src = newTheme === "dark" ? "../images/logo-dark.webp" : "../images/logo-light.webp";
		}
	}

	const toggleButton = document.getElementById("theme-toggle");
	if (toggleButton) {
		toggleButton.innerHTML = newTheme === "dark" ? '&#9790;' : '&#9728;';
		toggleButton.style.backgroundColor = newTheme === "dark" ? '#333' : '#f5f5f5';
		toggleButton.style.color = newTheme === "dark" ? '#f5f5f5' : '#333';
	}

	const menuButton = document.getElementById("menu-toggle");
	if (menuButton) {
		menuButton.style.color = newTheme === "dark" ? '#f5f5f5' : '#000000';
	}

	const navmenu = document.getElementById("main-nav");
	if (navmenu) {
		navmenu.style.backgroundColor = newTheme === "dark" ? 'black' : 'white';
		navmenu.style.color = newTheme === "dark" ? 'white' : 'black';
		if (window.innerWidth < 1280) {
			navmenu.style.backgroundColor = newTheme === "dark" ? 'rgba(50, 50, 50, 1)' : 'rgba(240, 240, 240, 1)';
			navmenu.style.boxShadow = newTheme === "dark" ? '0 4rem 8rem rgba(100, 10, 10, 0.6)' : '0 4rem 8rem rgba(10, 100, 10, 0.2)';
		} else {
			navmenu.style.boxShadow = 'none';
		}
	}

	const elements = document.querySelectorAll(".content");
		elements.forEach(el => {
		el.style.backgroundColor = newTheme === "dark" ? '#333' : '#f5f5f5';
	});

	const footerBackground = document.getElementById("footer");
	if (footerBackground) {
		footerBackground.style.backgroundColor = newTheme === "dark" ? 'black' : 'white';
		footerBackground.style.color = newTheme === "dark" ? 'white' : 'black';
	}

	const hyperlink = document.querySelectorAll(".hyperlink");
		hyperlink.forEach(color => {
		color.style.color = newTheme === "dark" ? '#66ccff' : '#1a0dab';
	});
}