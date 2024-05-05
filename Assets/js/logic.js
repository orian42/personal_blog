//This file contains the coding for placing the pages of the application
//in either light or dark mode.  The mode will remain in place even when
//the user navigates to the other page.
const container = document.body;
const changeView = document.querySelector('.viewModeIcon');

var viewMode;

//calls stored mode to ensure light/dark mode continues on both pages
//then switches the page to the stored mode.  Also updates the toggle icon 
//to the proper one depending on which mode is called.
window.onload = function() {
    viewMode = localStorage.getItem('mode');
    document.body.setAttribute('class', viewMode);
    if (viewMode === 'dark') {
        changeView.textContent = '🌙';
    } else {
        changeView.textContent = '🔆';
    }
}

//changes the mode and icon when the icon is clicked
function changeDocView (event) {
    event.stopPropagation;

    if (viewMode === 'light') {
        viewMode = 'dark';
        document.body.setAttribute('class', 'dark');
        changeView.textContent = '🌙';
    } else {
        viewMode = 'light';
        document.body.setAttribute('class', 'light');
        changeView.textContent = '🔆';
    }
    //saves mode to be displayed when the user navigates to a different page
    localStorage.setItem('mode', viewMode);
}

changeView.addEventListener('click', changeDocView);