addEventListener('load', function () {
    hideClaimButton();

    let addComment = document.getElementById("add-comment");
    let submitComment = document.getElementById("submit-comment");
    let cancelComment = document.getElementById("cancel-comment");
    let claimButton = document.getElementById("claimButton");
    let yourDetails = document.getElementById("your-details");
    let yourPosts = document.getElementById("your-posts");
    let yourClaimedItems = document.getElementById("your-claimed-items");
    let yourMessages = document.getElementById("your-messages");



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

// close or cancelcomment form
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

// show and hide your messages on profile page
function ShowHideYourMessages() {
    document.getElementById("your-messages-body").classList.toggle("show")
}

