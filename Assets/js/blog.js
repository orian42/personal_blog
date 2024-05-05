// code for back button
const backButton = document.querySelector('#backButton');

backButton.addEventListener('click', function(event) {
    event.stopPropagation();
    window.location.href = "index.html"
})

//code for populating archived blog entries from local storage to the HTML

//get existing blog data
var blogArchive = JSON.parse(localStorage.getItem('blogArchive'));
if (blogArchive === null) {
    blogArchive = [];
}

for (i=0; i< blogArchive.length; i++) {
    const blogEntries = document.querySelector('#blogEntries');
    const entryContainer = document.createElement('div');
    const entryTitle = document.createElement('h2');
    const entryContent = document.createElement('p');
    const entryUser = document.createElement('p');

    blogEntries.appendChild(entryContainer);
    entryContainer.appendChild(entryTitle);
    entryContainer.appendChild(entryContent);
    entryContainer.appendChild(entryUser);

    entryContainer.querySelector('h2').textContent = `${blogArchive[i].title}`;
    entryContainer.querySelector('p').textContent = `${blogArchive[i].content}`;
    entryContainer.querySelector('p:nth-child(3)').textContent = `Posted by:  ${blogArchive[i].user}`;

}