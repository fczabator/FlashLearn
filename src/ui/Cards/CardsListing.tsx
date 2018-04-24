import * as React from 'react';
import {Card, IStringTMap} from '@app/types';
import {CardPaper} from './CardPaper';
import styled from '@app/theme';

interface Props {
    cards: IStringTMap<Card>;
}

const ListingContainer = styled.div`
    display: flex;
    margin: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    > * {
        margin: 10px;
    }
`;

export const CardsListing: React.SFC<Props> = props => {
    return (
        <ListingContainer>
            {Object.values(props.cards).map(card => (
                <CardPaper key={card.id} card={card} />
            ))}
        </ListingContainer>
    );
};
