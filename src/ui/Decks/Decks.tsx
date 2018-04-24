import * as React from 'react';
import {Deck, IStringTMap} from '@app/types';
import {connect} from 'react-redux';
import {RootState} from '@app/ducks';
import {decksActions} from '@app/ducks/decks';
import {Container} from '@app/components/Container';
import AddDeck from './AddDeck/AddDeck';
import { DecksListing } from './DecksListing';

interface Props {
    decks: IStringTMap<Deck>;
    onAdd: (deck: Deck) => any;
    fetchDecks: () => any;
}

class Decks extends React.Component<Props> {

    componentDidMount() {
        this.props.fetchDecks();
    }

    render() {
        return (
            <Container>
                <AddDeck />
                <DecksListing decks={this.props.decks} />
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        decks: state.decks.items,
    };
};

export default connect(mapStateToProps, {
    fetchDecks: decksActions.fetchRequest,
})(Decks);
