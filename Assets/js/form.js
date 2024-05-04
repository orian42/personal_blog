const userName = document.querySelector('#bloggerName');
const entryTitle = document.querySelector('#entryTitle');
const entryContent = document.querySelector('#entryContent');
const submitButton = document.querySelector('#submitButton');

//get existing blog data
var blogArchive = JSON.parse(localStorage.getItem('blogArchive'));
if (blogArchive === null) {
    blogArchive = [];
}

function submitNewBlog (event) {
    event.stopPropagation();

    const newEntryData = {
        user: userName.value,
        title: entryTitle.value,
        content: entryContent.value
    }

    //ensure completion of the form
    if (userName.value === "" || entryTitle.value === "" || entryContent.value === "") {
        alert('All fields must be completed before submitting your blog entry.');
    } else {
    //add new data to the existing blog data
    blogArchive.push(newEntryData);
    localStorage.setItem('blogArchive', JSON.stringify(blogArchive));

    //redirect to blog.html
    window.location.href = "blog.html";
    }
}

submitButton.addEventListener ('click', submitNewBlog);