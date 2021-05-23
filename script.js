let username = document.querySelector("#username");
let password = document.querySelector("#pwd");
let form = document.querySelector(".form");
let submit = document.querySelector("input[type='submit']");
console.log(submit);
let link = document.querySelector("a");

form.addEventListener("submit", handleSubmit);


function handleSubmit(e) {
    e.preventDefault();
    
    console.log(localStorage);
    if(submit.value.toLowerCase() === "sign up") {
        localStorage.setItem(username.value, password.value);
        alert("Thank you for signing up");
        username.value = "";
        password.value = "";
    }else {
        if(localStorage.getItem(username.value) === String(password.value)) {
            alert("Thank you for logging in");
            username.value = "";
            password.value = "";
        } else {
            alert("Enter the correct credentials");
            username.value = "";
            password.value = "";
        }
    }

    
}





