//The coding in this file allows the user to create a new blog entry.  The new
//entry appends to the already existing entries in the local storage.
const userName = document.querySelector('#bloggerName');
const entryTitle = document.querySelector('#entryTitle');
const entryContent = document.querySelector('#entryContent');
const submitButton = document.querySelector('#submitButton');

//get existing blog data from local storage
var blogArchive = JSON.parse(localStorage.getItem('blogArchive'));
if (blogArchive === null) {
    blogArchive = [];
}

//Suppress autocomplete
userName.setAttribute('autocomplete', 'off');
entryTitle.setAttribute('autocomplete', 'off');

//Coding for new blog entries
function submitNewBlog (event) {
    event.stopPropagation();

    const newEntryData = {
        user: userName.value,
        title: entryTitle.value,
        content: entryContent.value
    }

    //ensure completion of the form
    if (userName.value === "" || entryTitle.value === "" || entryContent.value === "") {
        //identify fields with missing values then list only these items in the alert
        var missingUser;
        var missingTitle;
        var missingContent;
        if (userName.value === ""){missingUser =' • Username\n'} else {missingUser = ""};
        if (entryTitle.value === ""){missingTitle =' • Title\n'} else {missingTitle = ""};
        if (entryContent.value === ""){missingContent =' • Content\n'} else {missingContent = ""};
        alert('All fields must be completed before submitting your blog entry.\n\nPlease complete the following fields:\n'
            + missingUser + missingTitle + missingContent);
    } else {
    //add new data to the existing blog data
    blogArchive.push(newEntryData);
    localStorage.setItem('blogArchive', JSON.stringify(blogArchive));

    //redirect to blog.html
    window.location.href = "blog.html";
    }
}

submitButton.addEventListener ('click', submitNewBlog);