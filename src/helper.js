import cookie from "react-cookies";
import {ACCOUNT_GET_SUCCESS, BACKEND_ADDRESS} from "./backendReturnCodeHandling";

export function postDataToBackend(url, data){
    return fetch(BACKEND_ADDRESS + url, {
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
}

/**
 * Adopted from https://www.learnwithjason.dev/blog/get-form-values-as-json
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
export const formToJSON = (elements) =>
    [].reduce.call(
        elements,
        (data, element) => {
            data[element.name] = element.value;
            return data;
        },
        {},
    );



export function displayLoading(loader) {
    // selecting loading div
    loader.classList.add("display");
    // // to stop loading after some time
    // setTimeout(() => {
    //   loader.classList.remove("display");
    // }, 4000);
}

// hiding loading
export function hideLoading(loader) {
    loader.classList.remove("display");
}

export function validateCookie(){
    const token = {'token': cookie.load('userToken')}
    postDataToBackend("account/get", token)
        .then((responseJson) => {
            if(responseJson['code']!==ACCOUNT_GET_SUCCESS){
                // token error
                alert(responseJson['msg'])
                window.location.href = "/login";
            }
        });
}

export function validateUrl(url_token){
    const token = {'token': url_token}
    postDataToBackend("account/get", token)
        .then((responseJson) => {
            if(responseJson['code']!==ACCOUNT_GET_SUCCESS){
                // token error
                alert(responseJson['msg'])
                window.location.href = "/login";
            }
        });
}

export function redirectLogin(){
    const token = {'token': cookie.load('userToken')}
    postDataToBackend("account/get", token)
        .then((responseJson) => {
            if(responseJson['code']===ACCOUNT_GET_SUCCESS){
                window.location.href = "/me";
            }
        });
}