import {combineReducers, Reducer} from 'redux';
import cardsReducer, {State as CardsState} from './cards';
import decksReducer, {State as DecksState} from './decks';

export interface RootState {
    cards: CardsState;
    decks: DecksState;
}

export const rootReducer: Reducer<RootState> = combineReducers({
    cards: cardsReducer,
    decks: decksReducer,
});

export default rootReducer;
