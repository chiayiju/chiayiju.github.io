function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);

	const logo = document.getElementById("logo");
	if (logo) {
		logo.src = newTheme === "dark" ? "images/logo-dark.webp" : "images/logo-light.webp";
	}
	const toggleButton = document.getElementById("theme-toggle");
		if (toggleButton) {
			toggleButton.innerHTML = newTheme === "dark" ? '&#9790;' : '&#9728;';
			toggleButton.style.backgroundColor = newTheme === "dark" ? '#333' : '#f5f5f5';
			toggleButton.style.color = newTheme === "dark" ? '#f5f5f5' : '#333';
		}
}