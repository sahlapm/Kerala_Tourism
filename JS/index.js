
function validate()
{

    var email =document.getElementById("email");
    var password =document.getElementById("password");
    var retypePswd =document.getElementById("retypePswd");
    var contactNo =document.getElementById("contactNo");
    
    var errEmail =document.getElementById("errEmail");
    var errPassword =document.getElementById("errPassword");
    var errRetype =document.getElementById("errRetype");
    var errContact =document.getElementById("errContact");

    let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pwdRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let contactRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!contactRegex.test(contactNo.value))
    {
        errContact.innerHTML='Please enter a valid Contact No';
        errContact.style.color="red";
        return false;
        
    }
    else
    {
        errContact.innerHTML='';
        if(!emailRegex.test(email.value))
        {
            errEmail.innerHTML='Please enter a valid email';
            errEmail.style.color="red";
            return false;
        }
        else
        {
            errEmail.innerHTML='';
            if(!pwdRegex.test(password.value))
            {
                errPassword.innerHTML='Please enter a valid password';
                errPassword.style.color="red";
                return false;
            }
            else
            {
                errPassword.innerHTML="";
                if(!pwdRegex.test(retypePswd.value))
                {
                    errRetype.innerHTML='Please enter a valid password';
                    errRetype.style.color="red";
                    return false;
                }
                else
                {
                    errRetype.innerHTML='';
                    if(password.value!= retypePswd.value)
                    {
                        errPassword.innerHTML='Password and Retype password do not match';
                        errPassword.style.color="red";
                        return false;
                    }
                    else
                    {
                        errPassword.innerHTML='';
                        return true;
                    }
                }
            }
        }
    }
   

   
   

    
}
