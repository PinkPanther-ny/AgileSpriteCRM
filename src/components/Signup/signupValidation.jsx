// showing loading
import {displayLoading, formToJSON, hideLoading, postDataToBackend} from "../../helper";

export function validateSignup(event) {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();

    const form = document.getElementsByName('register')[0];

    // Call our function to get the form data.
    const data = formToJSON(form.elements);

    if(data['confirm-password']!==data['password']){
        alert("Please confirm your password!")

    }else{

        const loader = document.querySelector("#loading");
        displayLoading(loader);

        postDataToBackend('account/register', data)
            .then((response) => {
                hideLoading(loader);

                const ret_code = response['code'];
                if(ret_code === 105){
                    alert("Account created successfully! Let's go!")
                    window.location.href = "/login";
                }else if(ret_code===106){
                    alert("Sorry! This email has been used, please try another.")
                }else if(ret_code===107){
                    alert("Password must contains at least a digit, a letter, a upper \n" +
                        "case letter and a symbol, and length is between 8 and 30")
                }else{
                    alert("Error! Please refresh the page and try again!")
                }
            });

    }

}
