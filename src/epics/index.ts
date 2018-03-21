import * as Rx from 'rxjs/Rx';
import {combineEpics, Epic} from 'redux-observable';
import {RootAction} from 'ducks/rootAction';
import {RootState} from 'ducks';
import {TypeKeys, cardsActions} from '@app/ducks/cards';
import {Card} from '@app/types';
import {isActionOf} from 'typesafe-actions';
import {addCard} from '@app/api/cards';

export const fetchCardsEpic: Epic<RootAction, RootState> = (action$) => {
    return action$.ofType(TypeKeys.FETCH_REQUEST)
        .switchMap(() => {
            return Rx.Observable.ajax.getJSON('https://flashlearn-4ad95.firebaseio.com/cards.json')
                .map((cards: Card[]) => {
                    return cardsActions.fetchFulfilled(cards);
                });
        });
};

export const addCardEpic: Epic<RootAction, RootState> = (action$) => {
    return action$
        .filter(isActionOf(cardsActions.add))
        .switchMap(action => {
            return addCard(action.card)
                .map(response => cardsActions.added(response.name));
        });
    };
    
export const rootEpic = combineEpics(fetchCardsEpic, addCardEpic);
    
    // return Rx.Observable.ajax.post('https://flashlearn-4ad95.firebaseio.com/cards.json', action.card)
    //     .map((response) => {
    //         return cardsActions.added(response.response.name);
    //     });
