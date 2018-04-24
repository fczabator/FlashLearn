import {Card} from '@app/types';
import * as Rx from 'rxjs/Rx';
import {makePostRequest} from './helpers';

export const addCard = (card: Card) => {
    const request = makePostRequest('https://flashlearn-4ad95.firebaseio.com/cards.json', card)
        .then(response => response.json());
    return Rx.Observable.from(request);
};
