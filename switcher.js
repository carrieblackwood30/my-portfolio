function darkMode() {
    const body = document.body
    const wasDarkMode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkMode)
    body.classList.toggle('dark-mode', !wasDarkMode)
}

// function lightMode() {
//     const body = document.body
//     const wasLightMode = localStorage.getItem('lightmode') === 'true'

//     body.classList.toggle('light-mode', !wasLightMode)
// }

// document.getElementById("darkModeJs").addEventListener("click", darkMode);
// document.getElementById("LightModeJs").addEventListener("click", lightMode);