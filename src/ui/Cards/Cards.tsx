import * as React from 'react';
import {Card, IStringTMap} from '@app/types';
import {connect} from 'react-redux';
import {RootState} from '@app/ducks';
import {cardsActions} from '@app/ducks/cards';
import {CardsListing} from './CardsListing';
import {Container} from '@app/components/Container';
import {CardForm} from './CardForm';
import {RouteComponentProps} from 'react-router-dom';

interface RouteInfo {
    deckId: string;
}

interface Props {
    cards: IStringTMap<Card>;
    onAdd: (card: Card) => any;
    fetchCards: () => any;
    match: RouteComponentProps<RouteInfo>;
}

class Cards extends React.Component<Props> {

    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <Container>
                <CardForm onAdd={this.props.onAdd} />
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
    fetchCards: () => cardsActions.fetchRequest({deckId: '-L92AGysAOcOgz7bnRR8'})
    ,
})(Cards);
