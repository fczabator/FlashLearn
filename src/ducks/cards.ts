import {Card} from '../types';
import {createAction} from 'typesafe-actions';
import {RootAction} from '@app/ducks/rootAction';

export type State = {
    readonly items: Card[];
};

const initialState: State = {
    items: [],
};

// Actions
export enum TypeKeys {
    ADD = 'cards/ADD',
    REMOVE = 'cards/REMOVE',
    FETCH_REQUEST = 'cards/FETCH_REQUEST',
    FETCH_FULFILLED = 'cards/FETCH_FULFILLED',
}

// Action creators
export const cardsActions = {
    add: createAction(TypeKeys.ADD, (card: Card) => ({type: TypeKeys.ADD, card})),
    fetchRequest: createAction(TypeKeys.FETCH_REQUEST, () => ({type: TypeKeys.FETCH_REQUEST})),
    fetchFulfilled: createAction(
        TypeKeys.FETCH_FULFILLED,
        (cards: Card[]) => ({type: TypeKeys.FETCH_FULFILLED, cards})
    ),
};

export default function cardsReducer(state: State = initialState, action: RootAction) {
    switch (action.type) {
        case TypeKeys.ADD: {
            return {items: [...state.items, action.card]};
        }
        case TypeKeys.FETCH_FULFILLED: {
            return {items: action.cards};
        }
        default:
            return state;
    }
}
