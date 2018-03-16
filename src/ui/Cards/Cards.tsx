import * as React from 'react';
import {Card} from '@app/types';
import {connect} from 'react-redux';
import {RootState} from '@app/ducks';
import {cardsActions} from '@app/ducks/cards';
import {CardsListing} from './CardsListing';
import {Container} from '@app/components/Container';

interface CardsProps {
    cards: Card[];
    onAdd: (card: Card) => any;
    fetchCards: () => any;
}

class Cards extends React.Component<CardsProps> {

    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <Container>
                <CardsListing cards={this.props.cards} />
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        cards: state.cards.items,
    };
};

export default connect(mapStateToProps, {
    onAdd: cardsActions.add,
    fetchCards: cardsActions.fetchRequest,
})(Cards);
