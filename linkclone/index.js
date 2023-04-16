function postText() {
    var text = document.getElementById("text").value;
    var p = document.createElement("p");
    p.textContent = text;
    document.getElementById("posts").appendChild(p);
}