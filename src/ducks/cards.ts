import {Card, IStringTMap} from '@app/types';
import {createAction} from 'typesafe-actions';
import {RootAction} from '@app/ducks/rootAction';

export type State = {
    readonly items: IStringTMap<Card>;
    readonly pending: Card | null;
};

const initialState: State = {
    items: {},
    pending: null,
};

// Actions
export enum TypeKeys {
    ADD = 'cards/ADD',
    ADDED = 'cards/ADDED',
    FETCH_REQUEST = 'cards/FETCH_REQUEST',
    FETCH_FULFILLED = 'cards/FETCH_FULFILLED',
}

type cardsQuery = {
    deckId: string;
};

// Action creators
export const cardsActions = {
    add: createAction(TypeKeys.ADD, (card: Card) => ({type: TypeKeys.ADD, card})),
    added: createAction(TypeKeys.ADDED, (id: string) => ({type: TypeKeys.ADDED, id})),
    fetchRequest: createAction(TypeKeys.FETCH_REQUEST, (query: cardsQuery) => ({query, type: TypeKeys.FETCH_REQUEST})),
    fetchFulfilled: createAction(
        TypeKeys.FETCH_FULFILLED,
        (cards: Card[]) => ({type: TypeKeys.FETCH_FULFILLED, cards})
    ),
};

export default function cardsReducer(state: State = initialState, action: RootAction) {
    switch (action.type) {
        case TypeKeys.ADD: {
            return {...state, pending: {...action.card, id: 'pending'}};
        }
        case TypeKeys.ADDED: {
            const idFromResponse = action.id;
            const item = {...state.pending, id: idFromResponse};
            
            return {...state, items: {...state.items, [idFromResponse]: item}, pending: null};
        }
        case TypeKeys.FETCH_FULFILLED: {
            return {items: action.cards};
        }
        default:
            return state;
    }
}
