addEventListener('load', function () {
    hideClaimButton();
    document.getElementById("add-comment").addEventListener("click",openComment );
    document.getElementById("submit-comment").addEventListener("click",closeComment );
    document.getElementById("cancel-comment").addEventListener("click",closeComment );
    document.getElementById("claimButton").addEventListener("click",removeClaimButton );

    function hideClaimButton() {
        if (document.getElementById("status").innerText == "Available") {
            document.getElementById("claimButton").className = "show";
        }
        else {
            (document.getElementById("claimButton").className = "hide");
        }
    }
})

function openComment() {
    document.getElementById("commentForm").className = "show";
    document.getElementById("add-comment").className = "hide";
}

function closeComment() {
    document.getElementById("commentForm").className = "hide";
    document.getElementById("add-comment").className = "show";
}

function removeClaimButton() {
    document.getElementById("claimButton").className = "hide";
}