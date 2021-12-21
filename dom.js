const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formSignUp = document.querySelector(".sign_up_inputs");

formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput() {
    // get the value of input
    const firstNameValue =     firstName.value.trim();
    const lastNameValue =     lastName.value.trim();
    const emailValue =     email.value.trim();
    const passwordValue =     password.value.trim();

    //check the value of input and set error if it need it
    firstNameValue===""?setError(firstName, "First Name cannot be empty"):removeError(firstName);

    lastNameValue===""?setError(lastName, "Last Name cannot be empty"):removeError(lastName);
    
    if (emailValue === "") {
        setError(email, "Looks like this is not an email")
    } else if ( isEmail(emailValue) !== true) {
        setError(email, "Looks like this is not an email")
    }  else {
        removeError(email);
    }

    passwordValue===""?setError(password, "Password cannot be empty"):removeError(password);
    
}

function setError (input, message) {
    const formControl = input.parentElement;
    const messagePar = formControl.querySelector("p");
    formControl.classList.add('error');
    messagePar.textContent = message;
}

function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

function isEmail(input) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input); 
}

