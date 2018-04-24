import * as React from 'react';
import {Deck} from '@app/types';
import {StyledPaper} from '@app/components/StyledPaper';
import Typography from 'material-ui/Typography';

interface Props {
    deck: Deck;
}

export const DeckPaper: React.SFC<Props> = props => {
    return (
        <StyledPaper>
            <Typography>
                {props.deck.name}
            </Typography>
        </StyledPaper>
    );
};
