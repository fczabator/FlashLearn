
// RootActions
import { $call } from 'utility-types';

import {cardsActions} from 'ducks/cards';

const returnsOfActions = [
  ...Object.values(cardsActions),
].map($call);

type AppAction = typeof returnsOfActions[number];

export type RootAction = AppAction;
