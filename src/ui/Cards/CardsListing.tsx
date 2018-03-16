import * as React from 'react';
import {Card} from '@app/types';
import {CardPaper} from './CardPaper';
import styled from '@app/theme';

interface Props {
    cards: Card[];
}

const ListingContainer = styled.div`
    display: flex;
    flex-direction: column;
    > * {
        margin-top: 10px;
    }
    margin: 20px;
`;

export const CardsListing: React.SFC<Props> = props => {
    return (
        <ListingContainer>
            {props.cards.map(card => (
                <CardPaper key={card.id} card={card} />
            ))}
        </ListingContainer>
    );
};
