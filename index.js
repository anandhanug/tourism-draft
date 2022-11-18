let email = document.getElementById("email");
let error = document.getElementById("error");


function validate() {
    let regexp = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9\-]+)\.([a-z]{2,3})(.[a-z]{1,3})?$/;
    
    if(regexp.test(email.value)) {
        error.innerText = "Valid";
        error.style.color = "green";
        return true;   
    }
    else {
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
    }

    let password = document.getElementById("password");
    let errorforpassword = document.getElementById("errorforpassword");
    
    // password
    function validatepwd() {
        let Strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        let Medium = /^(?=.*\d)([a-zA-Z0-9]{5,})$/;
        // let border = document.getElementsByClassName("form-control");
        
        if(Strong.test(password.value)) {
            errorforpassword.innerText = "Strong";
            errorforpassword.style.color = "white";
            errorforpassword.style.background = "green";
            
            return true;   
        }
        else if(Medium.test(password.value)) {
            errorforpassword.innerHTML = "Medium";
            errorforpassword.style.color = "white";
            errorforpassword.style.background = "orange";
            return false;
        }
        else{
            errorforpassword.innerHTML = "Poor";
            errorforpassword.style.color = "white";
            errorforpassword.style.background = "red";
            return false;

        }
        }

        let phonenumber = document.getElementById("phonenumber");
        let errorfornumber = document.getElementById("errorfornumber");

        function validatenumber() {
            let numbertobevalidated = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/; 
            if(numbertobevalidated.test(phonenumber.value)) {
                errorfornumber.innerText = "Valid";
                errorfornumber.style.color = "green";
                return true;   
        
            }
           
            else{
                errorfornumber.innerText = "Invalid";
                errorfornumber.style.color = "red";
                return false;
            }

        }
let errorformatching = document.getElementById("errorformatching");

        function matchPassword() {  
            var pw1 = document.getElementById("pswd1");  
            var pw2 = document.getElementById("pswd2");  
            if(pw1 === pw2)  
            {   
                errorformatching.innerText = "Match";
                errorformatching.style.color = "green";
          }  
          else{
            errorformatching.innerText = "Not ,matching, Try again";
            errorformatching.style.color = "red";
          }
        }