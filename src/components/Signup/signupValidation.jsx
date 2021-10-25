// showing loading
function displayLoading(loader) {
    // selecting loading div
    loader.classList.add("display");
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

        fetch('https://agilespritebackend.herokuapp.com/account/register', {
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
