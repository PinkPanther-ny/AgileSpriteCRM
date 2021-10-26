// showing loading
import {displayLoading, formToJSON, hideLoading, postDataToBackend} from "../../helper";
import {ACCOUNT_REGISTER_SUCCESS} from "../../backendReturnCodeHandling";

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
                if(ret_code === ACCOUNT_REGISTER_SUCCESS){
                    alert("Account created successfully! Let's go!");
                    window.location.href = "/login";

                }else{
                    alert(response['msg']);
                }
            });

    }

}
