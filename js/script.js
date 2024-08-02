function plusesClick(hide_text) {
    if (document.getElementById(hide_text)) {
        var text = document.getElementById(hide_text);
        if (text.style.display != "none") {
            text.style.display = "none";
        }
        else text.style.display = "block";
    }
}

let form = document.querySelector('.myForm');
    formInputs = form.querySelectorAll('.input');
    inputName = form.querySelector('.nameText');
    inputEmail = form.querySelector('.emailText');



form.onsubmit = function(){
    nameVal = inputName.value;
    emailVal = inputEmail.value;


    formInputs.forEach(function (input){
        if (input.value === ''){
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    })
return false;
}



