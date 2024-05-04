const backButton = document.querySelector('#backButton');

backButton.addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = "index.html"
})