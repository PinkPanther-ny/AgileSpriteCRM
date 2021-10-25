// showing loading
import cookie from "react-cookies";

function displayLoading(loader) {
    // selecting loading div
    loader.classList.add("display");
    // // to stop loading after some time
    // setTimeout(() => {
    //   loader.classList.remove("display");
    // }, 4000);
}

// hiding loading
function hideLoading(loader) {
    loader.classList.remove("display");
}

/**
 * Adopted from https://www.learnwithjason.dev/blog/get-form-values-as-json
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = (elements) =>
    [].reduce.call(
        elements,
        (data, element) => {
            data[element.name] = element.value;
            return data;
        },
        {},
    );

export function validateLogin(event) {
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
    const loader = document.querySelector("#login_loading");
    displayLoading(loader);

    const form = document.getElementsByName('login')[0];
    // Call our function to get the form data.
    const data = formToJSON(form.elements);
    fetch('https://agilespritebackend.herokuapp.com/account/login', {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }).then((response) => response.json())
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