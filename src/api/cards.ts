import {Card} from '@app/types';
import * as Rx from 'rxjs/Rx';

export const makePostRequest = (url: string, payload: {}) => {
    // const data = new FormData();
    // data.append('json', JSON.stringify(payload));
    return fetch(url, {method: 'POST', body: JSON.stringify(payload)});
};

export const addCard = (card: Card) => {
    const request = makePostRequest('https://flashlearn-4ad95.firebaseio.com/cards.json', card)
        .then(response => response.json());
    return Rx.Observable.from(request);
};
