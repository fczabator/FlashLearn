import {Deck, IStringTMap} from '@app/types';
import {createAction} from 'typesafe-actions';
import {RootAction} from '@app/ducks/rootAction';

export type State = {
    readonly items: IStringTMap<Deck>;
    readonly pending: Deck | null;
};

const initialState: State = {
    items: {},
    pending: null,
};

export enum TypeKeys {
    ADD = 'decks/ADD',
    ADDED = 'decks/ADDED',
    FETCH_REQUEST = 'decks/FETCH_REQUEST',
    FETCH_FULFILLED = 'decks/FETCH_FULFILLED',
}

export const decksActions = {
    add: createAction(TypeKeys.ADD, (deck: Deck) => ({type: TypeKeys.ADD, deck})),
    added: createAction(TypeKeys.ADDED, (id: string) => ({type: TypeKeys.ADDED, id})),
    fetchRequest: createAction(TypeKeys.FETCH_REQUEST, () => ({type: TypeKeys.FETCH_REQUEST})),
    fetchFulfilled: createAction(
        TypeKeys.FETCH_FULFILLED,
        (decks: Deck[]) => ({type: TypeKeys.FETCH_FULFILLED, decks})
    ),
};

export default function decksReducer(state: State = initialState, action: RootAction) {
    switch (action.type) {
        case TypeKeys.ADD: {
            return {...state, pending: {...action.deck, id: 'pending'}};
        }
        case TypeKeys.ADDED: {
            const idFromResponse = action.id;
            const item = {...state.pending, id: idFromResponse};
            
            return {...state, items: {...state.items, [idFromResponse]: item}, pending: null};
        }
        case TypeKeys.FETCH_FULFILLED: {
            
            return {items: action.decks || {}};
        }
        default:
            return state;
    }
}
