
// RootActions
import { $call } from 'utility-types';

import {cardsActions} from 'ducks/cards';
import {decksActions} from 'ducks/decks';

const returnsOfActions = [
  ...Object.values(cardsActions),
  ...Object.values(decksActions),
].map($call);

type AppAction = typeof returnsOfActions[number];

export type RootAction = AppAction;
