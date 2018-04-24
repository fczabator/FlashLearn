import * as React from 'react';
import {Deck, IStringTMap} from '@app/types';
import {SimpleListing} from '@app/components/SimpleListing';
import { DeckPaper } from './DeckPaper';

interface Props {
    decks: IStringTMap<Deck>;
}

export const DecksListing: React.SFC<Props> = (props) => {
    return (
        <SimpleListing>
            {Object.values(props.decks).map(deck => (
                <DeckPaper key={deck.id} deck={deck} />
            ))}
        </SimpleListing>
    );
};
