let email = document.getElementById('email');
let pass = document.getElementById('password');

function formValidate(){
    if(email.value.trim() == "" || pass.value.trim() == ''){
        alert('You need to enter values in the required fields.');
        return false;
    }
    else{
        if(email.value.toLowerCase() === 'akshay@anymail.com' && pass.value === 'Akshay@123'){
            return true;
        }
        else{
            alert('The Email or Password you entered is incorrect.')
            return false;
        }
    }
}
