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

function hideClaimButton() {
    if (document.getElementById("status") != null)
        if (document.getElementById("status").innerText == "Available") {
            document.getElementById("claimButton").className = "show";
        }
        else {
            (document.getElementById("claimButton").className = "hide");
        }
}

function openComment() {
    document.getElementById("commentForm").className = "container";
    document.getElementById("add-comment").className = "hide";
}

function closeComment() {
    document.getElementById("commentForm").className = "hide";
    document.getElementById("add-comment").className = "show";
}

function removeClaimButton() {
    document.getElementById("claimButton").className = "hide";
}

function ShowHideYourDetails() {
    document.getElementById("your-details-body").classList.toggle("show")
}

function ShowHideYourPosts() {
    document.getElementById("your-posts-body").classList.toggle("show")
}

function ShowHideClaimedItems() {
    document.getElementById("your-claimed-items-body").classList.toggle("show")
}

function ShowHideYourMessages() {
    document.getElementById("your-messages-body").classList.toggle("show")
}

