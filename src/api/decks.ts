import {Deck} from '@app/types';
import * as Rx from 'rxjs/Rx';
import {makePostRequest} from './helpers';

export const addDeck = (deck: Deck) => {
    const request = makePostRequest('https://flashlearn-4ad95.firebaseio.com/decks.json', deck)
        .then(response => response.json());
    return Rx.Observable.from(request);
};
