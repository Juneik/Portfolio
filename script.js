// Get colors defined in style.css for dark and light theme

const darkPrimaryColor = getComputedStyle(document.body).getPropertyValue('--dark-primary');
const darkBackgroundColor = getComputedStyle(document.body).getPropertyValue('--dark-background');
const darkLinkColor = getComputedStyle(document.body).getPropertyValue('--dark-link');
const lightPrimaryColor = getComputedStyle(document.body).getPropertyValue('--light-primary');
const lightBackgroundColor = getComputedStyle(document.body).getPropertyValue('--light-background');
const lightLinkColor = getComputedStyle(document.body).getPropertyValue('--light-link');

// Set variables for the different elements that must change color for dark and light theme

const bodyStyle = document.body.style
const linkStyle = document.querySelector('a').style
const headerGridStyle = document.querySelector('.header-grid').style
const toggleSwitchStyle = document.querySelector('.toggle-switch').style
const darkModeText = document.getElementById('dark-mode-text')

// Define event with function to change theme

let toggle = document.getElementById('dark-mode-button')
toggle.onclick = () => {
    if (toggle.checked) {
        bodyStyle.color = darkPrimaryColor
        bodyStyle.backgroundColor = darkBackgroundColor
        linkStyle.backgroundColor = darkLinkColor
        linkStyle.color = lightPrimaryColor
        headerGridStyle.borderBottom = `${darkPrimaryColor} solid 1px`
        toggleSwitchStyle.backgroundColor = lightPrimaryColor
        toggleSwitchStyle.borderColor = darkPrimaryColor
        toggleSwitchStyle.boxShadow = 'inset 0px 5px 15px rgba(255, 255, 255, 0.4), inset 0px -5px 15px rgba(0, 0, 0, 0.4)'
        bodyStyle.setProperty('--toggle-color-change', darkPrimaryColor) 
        darkModeText.innerHTML = 'Light mode'
    } else {
        bodyStyle.color = lightPrimaryColor
        bodyStyle.backgroundColor = lightBackgroundColor
        linkStyle.backgroundColor = lightLinkColor
        linkStyle.color = darkPrimaryColor
        headerGridStyle.borderBottom = `${lightPrimaryColor} solid 1px`
        toggleSwitchStyle.backgroundColor = darkPrimaryColor
        toggleSwitchStyle.borderColor = lightPrimaryColor
        toggleSwitchStyle.boxShadow = 'inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)'
        bodyStyle.setProperty('--toggle-color-change', lightPrimaryColor)
        darkModeText.innerHTML = 'Dark mode'
    }
}

