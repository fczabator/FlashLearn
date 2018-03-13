import * as React from 'react';
import {UploadButton} from './components/UploadButton';
import Cards from './components/Cards';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UploadButton />
        <Cards />
      </div>
    );
  }
}

export default App;
