import * as React from 'react';
import Cards from '@app/ui/Cards/Cards';
import {AppBar} from '@app/ui/Menu/AppBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'components/Container';
import Decks from '@app/ui/Decks/Decks';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Router>
          <Container>
            <Route path="/decks" component={Decks} />
            <Route path="/:deckId/cards" component={Cards} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
