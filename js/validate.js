/**
 * Description: Use this file for form validation of this project
 */


let login_form = document.getElementById('loginform');
let signup_form = document.getElementById('signupForm');
const password_regex = new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\d]).*$");

/**
 * Validating Signup form
 */
if(signup_form){
signup_form.onsubmit = function(){
    let email = document.getElementById('floatingInput');
    let name = document.getElementById('floatingInput2');
    let password = document.getElementById('floatingPassword');
    let term_status = document.getElementById('exampleCheck1');     

    email.addEventListener('blur', handleInputField);
    name.addEventListener('blur', handleInputField);
    password.addEventListener('blur', handleInputField);
    term_status.addEventListener('change', handleCheckboxField);

    console.log(password.value, password_regex.test(password.value)); 

    if(!email.value){ 
        document.getElementById("floatingInput_error").innerHTML = "Email is required";
    }else{
        document.getElementById("floatingInput_error").innerHTML = "";
    }
    if(!name.value.trim()){ 
        document.getElementById("floatingInput2_error").innerHTML = "Name is required";
    }else{
        document.getElementById("floatingInput2_error").innerHTML = "";
    }
    if(!password.value){        
        document.getElementById("floatingPassword_error").innerHTML = "Password is required";
    }else if(!password_regex.test(password.value)){
        document.getElementById("floatingPassword_error").innerHTML = "Password should be at least 8 characters, having at least one lower case, one upper case, one special characters, one number";
    }else{
        document.getElementById("floatingPassword_error").innerHTML = "";
    }

    if(!term_status.checked){        
        document.getElementById("exampleCheck1_error").innerHTML = "Field is required";
    }else{
        document.getElementById("exampleCheck1_error").innerHTML = "";
    }

    if(!email.value || !password.value){
        return false; 
    }else{
        return true; 
    }

};
}

/**
 * Validating login form
 */
if(login_form){
login_form.onsubmit = function(){
    let email = document.getElementById('floatingInput');
    let password = document.getElementById('floatingPassword');
    let term_status = document.getElementById('exampleCheck1');

    email.addEventListener('blur', handleInputField);
    password.addEventListener('blur', handleInputField);
    term_status.addEventListener('change', handleCheckboxField);
    
    if(!email.value){ 
        document.getElementById("floatingInput_error").innerHTML = "Email is required";
    }else{
        document.getElementById("floatingInput_error").innerHTML = "";
    }
    if(!password.value){        
        document.getElementById("floatingPassword_error").innerHTML = "Password is required";
    }else{
        document.getElementById("floatingPassword_error").innerHTML = "";
    }

    if(!term_status.checked){        
        document.getElementById("exampleCheck1_error").innerHTML = "Field is required";
    }else{
        document.getElementById("exampleCheck1_error").innerHTML = "";
    }

    if(!email.value || !password.value){
        return false; 
    }else{
        return true; 
    }
};
}

/**
 * Method for handling input fields
 */
let handleInputField = function(){
    let el_ID = this.getAttribute('id')+'_error';
     if(this.value){
        document.getElementById(el_ID).innerHTML = "";
     }
}

/**
 * Method for handling checkbox fields
 */
let handleCheckboxField = function(){
    let el_ID = this.getAttribute('id')+'_error';
    if(this.checked){
        document.getElementById(el_ID).innerHTML = "";
    }
}

