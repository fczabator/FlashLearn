import * as Rx from 'rxjs/Rx';
import {Epic} from 'redux-observable';
import {RootAction} from 'ducks/rootAction';
import {RootState} from 'ducks';
import {cardsActions} from '@app/ducks/cards';
import {Card} from '@app/types';
import {isActionOf} from 'typesafe-actions';
import {addCard} from '@app/api/cards';

export const fetchCardsEpic: Epic<RootAction, RootState> = (action$) => {
    return action$
        .filter(isActionOf(cardsActions.fetchRequest))
        .switchMap((action) => {
            const {deckId} = action.query;
            return Rx.Observable.ajax.getJSON(`https://flashlearn-4ad95.firebaseio.com/decks/${deckId}.json`);
        }, (r: any, fetchAction: RootAction) => ([r, fetchAction]))
        .switchMap(([action, response]) => {
            console.log('action: ', action);
            console.log('response: ', response);
            if (response.cards) {
                return response.cards.map((cardId: string) => {
                    console.log('cardId: ', cardId);

                    return Rx.Observable.ajax.getJSON(`https://flashlearn-4ad95.firebaseio.com/cards/${cardId}.json`)
                    .map((cards: Card[]) => {
                        return cardsActions.fetchFulfilled(cards);
                    });
                });
            }
            console.log('asdasd');
            return cardsActions.fetchFulfilled([]);
            
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
