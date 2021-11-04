// showing loading
import cookie from "react-cookies";
import {displayLoading, formToJSON, hideLoading, postDataToBackend} from "../../helper";
import {ACCOUNT_LOGIN_SUCCESS} from "../../backendReturnCodeHandling";

export function validateLogin(event) {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
    const loader = document.querySelector("#login_loading");
    displayLoading(loader);

    const form = document.getElementsByName('login')[0];
    // Call our function to get the form data.
    const data = formToJSON(form.elements);
    postDataToBackend('account/login', data)
        .then((response) => {

                hideLoading(loader);

                const ret_code = response['code'];
                if (ret_code === ACCOUNT_LOGIN_SUCCESS) {

                    cookie.save('userEmail', data.email, {path: "/"})
                    cookie.save('userToken', response['token'], {path: "/"})

                    window.location.href = "/me";

                } else {
                    alert(response['msg']);
                }
            });
}