addEventListener('load', function () {
    document.getElementById("add-comment").addEventListener("click",openComment );
    document.getElementById("submit-comment").addEventListener("click",closeComment );
    document.getElementById("cancel-comment").addEventListener("click",closeComment );
})

function openComment() {
    document.getElementById("commentForm").className = "show";
    document.getElementById("add-comment").className = "hide";
}

function closeComment() {
    document.getElementById("commentForm").className = "hide";
    document.getElementById("add-comment").className = "show";
}