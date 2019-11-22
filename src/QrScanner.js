import React, {Component} from 'react';
import QrReader from 'react-qr-reader';
import axios from 'axios';

class QRScanner extends Component {
  state = {
    result: 'No result yet'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
    console.log(this.state.result);
    let formData = {email: this.state.result};
        const encodeForm = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
        }
        axios.post('http://127.0.0.1:8080/attandance_application/ValidateUser',encodeForm(formData))
        .then(function (reply) {
        // handle success
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          })
          .finally(function () {
          // always executed
        });
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '45%', height: '45%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QRScanner;
