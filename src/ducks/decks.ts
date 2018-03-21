import {Deck} from '@app/types';
import {createAction} from 'typesafe-actions';
import {RootAction} from '@app/ducks/rootAction';

export type State = {
    readonly items: Deck[];
};

const initialState: State = {
    items: [],
};

export enum TypeKeys {
    ADD = 'decks/ADD',
}

export const decksActions = {
    add: createAction(TypeKeys.ADD, (deck: Deck) => ({type: TypeKeys.ADD, deck})),
};

export default function decksReducer(state: State = initialState, action: RootAction) {
    switch (action.type) {
        case TypeKeys.ADD: {
            return {items: [...state.items, action.deck]};
        }
        default:
            return state;
    }
}
