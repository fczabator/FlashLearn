import * as React from 'react';
import {Card} from 'types';
import {connect} from 'react-redux';
import {RootState} from 'ducks';
import {cardsActions} from 'ducks/cards';

interface CardsProps {
    cards: Card[];
    onAdd: () => any;
}

export const Cards: React.SFC<CardsProps> = props => {
    return (
        <div>
            <button onClick={() => props.onAdd({word: 'abc', translation: 'hehe'})}>
                 Add card
            </button>
            {props.cards.map(card => (
                <div>
                    <div>{card.word}</div>
                    <div>{card.translation}</div>
                    <br />
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        cards: state.cards.items,
    };
};

export default connect(mapStateToProps, {
    onAdd: cardsActions.add,
})(Cards);
