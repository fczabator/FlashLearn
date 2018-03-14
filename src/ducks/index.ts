import {combineReducers, Reducer} from 'redux';
import cardsReducer, {State as CardsState} from './cards';

export interface RootState {
    cards: CardsState;
}

export const rootReducer: Reducer<RootState> = combineReducers({
    cards: cardsReducer,
});

export default rootReducer;
