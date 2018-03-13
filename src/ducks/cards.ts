import {Card} from '../types';
import {createAction} from 'typesafe-actions';

export type State = {
    readonly items: Card[];
};

const initialState: State = {
    items: [{word: 'abc', translation: 'cba'}],
};

// Actions
enum TypeKeys {
    ADD = 'cards/ADD',
    REMOVE = 'cards/REMOVE',
}

export interface IAddCard {
    type: TypeKeys.ADD;
    card: Card;
}

export type ActionsTypes =
    | IAddCard;

// Action creators
export const cardsActions = {
    add: createAction(TypeKeys.ADD, (card: Card) => ({type: TypeKeys.ADD, card})),
};

// export const addCard = (card: Card) => ({type: TypeKeys.ADD, card});

export default function cardsReducer(state: State = initialState, action: ActionsTypes) {
    switch (action.type) {
        case TypeKeys.ADD: {
            return {items: [...state.items, action.card]};
        }
        default:
            return state;
    }
}
