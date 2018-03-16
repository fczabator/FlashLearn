import * as Rx from 'rxjs/Rx';
import {combineEpics, Epic} from 'redux-observable';
import {RootAction} from 'ducks/rootAction';
import {RootState} from 'ducks';
import {TypeKeys, cardsActions} from '@app/ducks/cards';
import {Card} from '@app/types';

export const fetchCardsEpic: Epic<RootAction, RootState> = (action$) => {
    return action$.ofType(TypeKeys.FETCH_REQUEST)
        .switchMap(() => {
            return Rx.Observable.ajax.getJSON('https://flashlearn-4ad95.firebaseio.com/cards.json')
                .map((cards: Card[]) => {
                    return cardsActions.fetchFulfilled(cards);
                });
        });
};

export const rootEpic = combineEpics(fetchCardsEpic);
