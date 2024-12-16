function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
    
    const logo = document.getElementById('logo');
    if (localStorage.getItem('darkmode') === 'true') {
        logo.src = "images/logo-dark.webp";
    }else{
        logo.src = "images/logo-light.webp";
    }
    
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        toggleButton.innerHTML = element.classList.contains('dark-mode') ? '&#9790;' : '&#9728;';
        toggleButton.style.backgroundColor = element.classList.contains('dark-mode') ? '#333' : '#f5f5f5';
        toggleButton.style.color = element.classList.contains('dark-mode') ? '#f5f5f5' : '#333';
    });
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    
    const logo = document.getElementById('logo');
    const element = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        toggleButton.innerHTML = element.classList.contains('dark-mode') ? '&#9790;' : '&#9728;';
        toggleButton.style.backgroundColor = element.classList.contains('dark-mode') ? '#333' : '#f5f5f5';
        toggleButton.style.color = element.classList.contains('dark-mode') ? '#f5f5f5' : '#333';
    });
    
    if (localStorage.getItem('darkmode') === 'true') {
        logo.src = "images/logo-dark.webp";
        toggleButton.innerHTML = '&#9790;';
        toggleButton.style.backgroundColor = '#333';
        toggleButton.style.color = '#f5f5f5';
    }else{
        logo.src = "images/logo-light.webp";
    }
}
