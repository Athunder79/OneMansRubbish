addEventListener('DOMContentLoaded', function () {
    hideClaimButton();
    scrollToBottom()

    let addComment = document.getElementById("add-comment");
    let submitComment = document.getElementById("submit-comment");
    let cancelComment = document.getElementById("cancel-comment");
    let claimButton = document.getElementById("claimButton");
    let yourDetails = document.getElementById("your-details");
    let yourPosts = document.getElementById("your-posts");
    let yourClaimedItems = document.getElementById("your-claimed-items");
    let yourMessages = document.getElementById("your-messages");
    let deletePost = document.getElementById("deletePost");
    let deletePostCancel = document.getElementById("deletePostCancel");
    let archiveButton = document.getElementById("archive-button");
    let archiveButtonShow = document.getElementById("archive-button-hide");

    // check is element exists before running functions
    if (addComment != null)
        addComment.addEventListener("click", openComment);

    if (submitComment != null)
        submitComment.addEventListener("click", closeComment);

    if (cancelComment != null)
        cancelComment.addEventListener("click", closeComment);

    if (claimButton != null)
        claimButton.addEventListener("click", removeClaimButton);

    if (yourDetails != null)
        yourDetails.addEventListener("click", ShowHideYourDetails);

    if (yourPosts != null)
        yourPosts.addEventListener("click", ShowHideYourPosts);

    if (yourClaimedItems != null)
        yourClaimedItems.addEventListener("click", ShowHideClaimedItems);

    if (yourMessages != null)
        yourMessages.addEventListener("click", ShowHideYourMessages);

    if (deletePost != null)
        deletePost.addEventListener("click", deletePostConfirm);

    if (deletePostCancel != null)
        deletePostCancel.addEventListener("click", deletePostConfirm);

    if (archiveButton != null)
        archiveButton.addEventListener("click", ShowArchivePost);

    if (archiveButtonShow != null)
        archiveButtonShow.addEventListener("click", archivePost);



})

// hide the reserve button if the item is already reserved or complete
function hideClaimButton() {
    if (document.getElementById("status") != null)
        if (document.getElementById("status").innerText == "Available") {
            document.getElementById("claimButton").className = "show";
        }
        else {
            (document.getElementById("claimButton").className = "hide");
        }
}

// open comment form
function openComment() {
    document.getElementById("commentForm").className = "container";
    document.getElementById("add-comment").className = "hide";
}

// close or cancel comment form
function closeComment() {
    document.getElementById("commentForm").className = "hide";
    document.getElementById("add-comment").className = "show";
}

function removeClaimButton() {
    document.getElementById("claimButton").className = "hide";
}

// show and hide your details on profile page
function ShowHideYourDetails() {
    document.getElementById("your-details-body").classList.toggle("show")
}

// show and hide your posts on profile page
function ShowHideYourPosts() {
    document.getElementById("your-posts-body").classList.toggle("show")
}

// show and hide your claimed items on profile page
function ShowHideClaimedItems() {
    document.getElementById("your-claimed-items-body").classList.toggle("show")
}

// show and hide users you have messaged or messaged you on profile page
function ShowHideYourMessages() {
    document.getElementById("your-messages-body").classList.toggle("show")
}

// show delete post confirmation on profile page
function deletePostConfirm() {
    document.getElementById("deletePost").classList.toggle("hide")
    document.getElementById("deletePostConfirm").classList.toggle("show")
}

// cancel delete post confirmation on profile page
function deletePostCancel() {
    document.getElementById("deletePost").classList.toggle("show")
    document.getElementById("deletePostConfirm").classList.toggle("hide")
}

// show archive posts on index page
function ShowArchivePost() {
    document.getElementById("archive-button-hide").classList.toggle("hide")
    document.getElementById("archive-button").classList.toggle("hide")
    let a = document.getElementsByClassName("archived");
    [...a].forEach( x => x.className += " post-container-archive" );
    [...a].forEach( x => x.classList.remove("archived") );
}

// hide archive posts on index page
function archivePost() {
    document.getElementById("archive-button-hide").classList.toggle("hide")
    document.getElementById("archive-button").classList.toggle("hide")
    let a = document.getElementsByClassName("post-container-archive");
    [...a].forEach( x => x.className += " archived" );
    [...a].forEach( x => x.classList.remove("post-container-archive") );
}

// start page at to most recent message
function scrollToBottom() {
    let sendMessage = document.getElementById("write-message");
    if (sendMessage != null)
    sendMessage.scrollIntoView({
        behavior: "auto",
    });
}


