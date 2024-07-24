function plusesClick(hide_text) {
    if (document.getElementById(hide_text)) {
        var text = document.getElementById(hide_text);
        if (text.style.display != "none") {
            text.style.display = "none";
        }
        else text.style.display = "block";
    }
}