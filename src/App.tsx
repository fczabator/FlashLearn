import * as React from 'react';
import Cards from '@app/ui/Cards/Cards';
import {AppBar} from '@app/ui/Menu/AppBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AddDeck} from '@app/ui/Decks/AddDeck/AddDeck';
import { Container } from 'components/Container';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Router>
          <Container>
            <Route path="/cards" component={Cards} />
            <Route path="/add-deck" component={AddDeck} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
