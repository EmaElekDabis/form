function validateForm(form) {
    if (form.fname.value === "") {
        alert("First name must be submitted!");
        form.fname.focus();
        return false;
    }

    if (form.lname.value === "") {
        alert("Last name must be submitted!");
        form.lname.focus();
        return false;
    }
    
    return true;
}

function handleCheckbox(p) {
    var membership = document.getElementById('membership');
    if (p.checked) {
        membership.disabled = false;
    } else {
        membership.disabled = true;
    }
    handleMembership();
}

function handleMembership() {
    var selectOption = document.getElementById('membership');
    var subButton = document.getElementById('submit');

    if (selectOption.disabled) {
        subButton.style.backgroundColor = "white";
    } else {
        if (selectOption.value == 1) {
            subButton.style.backgroundColor = "silver";
        } else if (selectOption.value == 2) {
            subButton.style.backgroundColor = "gold";
        } else if (selectOption.value == 3) {
            subButton.style.backgroundColor = "skyblue"
        }
    }
}