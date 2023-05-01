// Get colors defined in style.css for dark and light theme

const darkPrimaryColor = getComputedStyle(document.body).getPropertyValue('--dark-primary');
const darkBackgroundColor = getComputedStyle(document.body).getPropertyValue('--dark-background');
const darkLinkColor = getComputedStyle(document.body).getPropertyValue('--dark-link');
const lightPrimaryColor = getComputedStyle(document.body).getPropertyValue('--light-primary');
const lightBackgroundColor = getComputedStyle(document.body).getPropertyValue('--light-background');
const lightLinkColor = getComputedStyle(document.body).getPropertyValue('--light-link');

// Set variables for the different elements that must change color for dark and light theme

const bodyStyle = document.body.style
const submitStyle = document.getElementById('form-j').style
const extraLinkStyle = document.querySelectorAll('.link-icon')[0].style
const extraLinkStyle2 = document.querySelectorAll('.link-icon')[1].style
const headerGridStyle = document.querySelector('.header-grid').style
const toggleSwitchStyle = document.querySelector('.toggle-switch').style
const darkModeText = document.getElementById('dark-mode-text')
const gridFormStyle = document.getElementById('grid-form').style

// Define event with function to change theme

let toggle = document.getElementById('dark-mode-button')
toggle.onclick = () => {
    if (toggle.checked) {
        bodyStyle.color = darkPrimaryColor
        bodyStyle.backgroundColor = darkBackgroundColor
        submitStyle.backgroundColor = darkLinkColor
        submitStyle.color = lightPrimaryColor
        extraLinkStyle.color = lightPrimaryColor
        extraLinkStyle.backgroundColor = darkLinkColor
        extraLinkStyle2.color = lightPrimaryColor
        extraLinkStyle2.backgroundColor = darkLinkColor
        headerGridStyle.borderBottom = `${darkPrimaryColor} solid 1px`
        toggleSwitchStyle.backgroundColor = lightPrimaryColor
        toggleSwitchStyle.borderColor = darkPrimaryColor
        toggleSwitchStyle.boxShadow = 'inset 0px 5px 15px rgba(255, 255, 255, 0.4), inset 0px -5px 15px rgba(0, 0, 0, 0.4)'
        bodyStyle.setProperty('--toggle-color-change', darkPrimaryColor)
        bodyStyle.setProperty('--link-button-color-change', darkPrimaryColor) 
        darkModeText.innerHTML = 'Light mode'
        gridFormStyle.border = 'thick double'
    } else {
        bodyStyle.color = lightPrimaryColor
        bodyStyle.backgroundColor = lightBackgroundColor
        submitStyle.backgroundColor = lightLinkColor
        submitStyle.color = darkPrimaryColor
        extraLinkStyle.color = darkPrimaryColor
        extraLinkStyle.backgroundColor = lightLinkColor
        extraLinkStyle2.color = darkPrimaryColor
        extraLinkStyle2.backgroundColor = lightLinkColor
        headerGridStyle.borderBottom = `${lightPrimaryColor} solid 1px`
        toggleSwitchStyle.backgroundColor = darkPrimaryColor
        toggleSwitchStyle.borderColor = lightPrimaryColor
        toggleSwitchStyle.boxShadow = 'inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)'
        bodyStyle.setProperty('--toggle-color-change', lightPrimaryColor)
        bodyStyle.setProperty('--link-button-color-change', lightPrimaryColor) 
        darkModeText.innerHTML = 'Dark mode'
    }
}