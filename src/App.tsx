import * as React from 'react';
import './App.css';
import { UploadButton } from './components/UploadButton';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UploadButton />
      </div>
    );
  }
}

export default App;
