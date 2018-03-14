import {Observable} from 'rxjs/Observable';
import filter from 'rxjs/add/operator/filter';
import switchMap from 'rxjs/add/operator/switchMap';
import {combineEpics, Epic} from 'redux-observable';
import {RootAction} from 'ducks/rootAction';
import {RootState} from 'ducks';
import {cardsActions} from 'ducks/cards';
import {addCard as addCardApi} from 'api';
import {isActionOf} from 'typesafe-actions';

const addCard: Epic<RootAction, RootState> =
    (action$, store) => action$
        .filter(isActionOf(cardsActions.add))
        .switchMap(card => {
            addCardApi(card);
        });

export const rootEpic = combineEpics(addCard);
