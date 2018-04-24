import * as React from 'react';
import {Card} from '@app/types';
import styled from '@app/theme';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

interface Props {
    card: Card;
}

const StyledPaper = styled(Paper)`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const CardPaper: React.SFC<Props> = props => {
    console.log(props);
    return (
        <StyledPaper>
            <Typography>
                {props.card.word}
            </Typography>
            <Typography>
                {props.card.translation}
            </Typography>
            
        </StyledPaper>
    );
};
