export const makePostRequest = (url: string, payload: {}) => {
    return fetch(url, {method: 'POST', body: JSON.stringify(payload)});
};
