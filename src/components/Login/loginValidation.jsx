// showing loading
import cookie from "react-cookies";
import {displayLoading, formToJSON, hideLoading, postDataToBackend} from "../../helper";

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
                if (ret_code === 100) {

                    cookie.save('userEmail', data.email, {path: "/"})
                    cookie.save('userToken', response['token'], {path: "/"})

                    // alert("User: " + cookie.load('userEmail') + "\n" +
                    //       "Token: "  + cookie.load('userToken') + "\n" +
                    //       "Login successfully! Let's go!")

                    window.location.href = "/home";
                } else if (ret_code === 101) {
                    alert("Wrong username/password!")
                } else {
                    alert("Error! Please refresh the page and try again!")
                }
            });
}