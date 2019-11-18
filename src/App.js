import React, {Component} from 'react';
import QRScanner from './QrScanner';
import QRGenerator from './QRGenerator';

class App extends Component {
  render() {
    return (
      <div style={{display:'flex'}}>
      <div style={{paddingRight:'20%', width:'50%', height:'50%'}}>
        <QRScanner/>
      </div>
      <div>
        <QRGenerator/>
      </div>
      </div>
    )
  }
}

export default App;
