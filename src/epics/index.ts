import {combineEpics} from 'redux-observable';
import {fetchCardsEpic, addCardEpic} from './cards';
import {fetchDecksEpic, addDeckEpic} from './decks';

export const rootEpic = combineEpics(fetchCardsEpic, addCardEpic, fetchDecksEpic, addDeckEpic);
