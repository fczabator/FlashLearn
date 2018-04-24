import * as Rx from 'rxjs/Rx';
import {Epic} from 'redux-observable';
import {RootAction} from 'ducks/rootAction';
import {RootState} from 'ducks';
import {TypeKeys, decksActions} from '@app/ducks/decks';
import {Deck} from '@app/types';
import {isActionOf} from 'typesafe-actions';
import {addDeck} from '@app/api/decks';

export const fetchDecksEpic: Epic<RootAction, RootState> = (action$) => {
    return action$.ofType(TypeKeys.FETCH_REQUEST)
        .switchMap(() => {
            return Rx.Observable.ajax.getJSON('https://flashlearn-4ad95.firebaseio.com/decks.json')
                .map((decks: Deck[]) => {
                    return decksActions.fetchFulfilled(decks);
                });
        });
};

export const addDeckEpic: Epic<RootAction, RootState> = (action$) => {
    return action$
        .filter(isActionOf(decksActions.add))
        .switchMap(action => {
            return addDeck(action.deck)
                .map(response => decksActions.added(response.name));
        });
    };
