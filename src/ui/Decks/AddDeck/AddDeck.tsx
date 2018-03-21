import * as React from 'react';
import { DeckForm } from './DeckForm';
import {connect} from 'react-redux';
import {Deck} from '@app/types';
import {decksActions} from '@app/ducks/decks';

interface Props {
    onAdd: (deck: Deck) => any;
}

export const AddDeck: React.SFC<Props> = (props) => {
    return (
        <div>
            <DeckForm onAdd={props.onAdd} />
        </div>
    );
};

export default connect(null, {
    onAdd: decksActions.add,
});
