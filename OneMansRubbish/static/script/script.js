addEventListener('load', function () {
    document.getElementById("add-comment").addEventListener("click",openComment )
    document.getElementById("submit-comment").addEventListener("click",submitComment );

})


function openComment() {
    document.getElementById("commentForm").className = "show";
    document.getElementById("add-comment").className = "hide";
}

function submitComment() {
    document.getElementById("commentForm").className = "hide";
    document.getElementById("add-comment").className = "show";
}