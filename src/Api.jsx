export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
    return {
        url: API_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json',
            },
        },
        body: JSON.stringify(body),
    }
}

export function USER_GET(toke) {
    return {
        url: API_URL + '/api/user',
        options: {
            method: 'GET',
            headers: {
                Autorization: 'Bearer ' + token,
            },
        },
    }
}