const container = document.body;
const changeView = document.querySelector('.viewModeIcon');

let viewMode = 'light';

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
}

changeView.addEventListener('click', changeDocView);