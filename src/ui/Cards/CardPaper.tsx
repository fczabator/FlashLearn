import * as React from 'react';
import {Card} from '@app/types';
import styled from '@app/theme';

interface Props {
    card: Card;
}

const CardContainer = styled.div`
    padding-top: 16px;
    padding-left: 10px;
    padding-bottom: 16px;
    width: 400px;
    border: 0.05em solid;
`;

const CardHeading = styled.div`
    padding: 5px;
    font-size: 30px;
`;

const CardText = styled.div`
    padding: 5px;
    font-size: 20px;
`;

export const CardPaper: React.SFC<Props> = props => {
    return (
        <CardContainer>
            <CardHeading>
                {props.card.word}
            </CardHeading>
            <CardText>
                {props.card.translation}
            </CardText>
        </CardContainer>
    );
};
