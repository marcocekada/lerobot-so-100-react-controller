import { settings } from '../config/settings';


async function sendRequest(action, body) {
    var url = settings.apiUrl + action;
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((response) => response.json()).then(async (responseData) => {
        return responseData
    }).catch((error) => {
        console.error(error);
        throw Error("APIManager (sendAuthenticatedDataToApi): Error calling API, check the connection.")
    });
}


export const ApiManager = {
    sendRequest: sendRequest
};