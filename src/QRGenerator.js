import React, {Component} from 'react';
import QRcode from 'qrcode.react';

class QRGenerator extends Component {
  constructor(props){
    super(props);
    this.state = { time: Date.now() };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
     var time = this.state.time.toString()
    console.log(time)
    return (
      <div >
        <QRcode value={time} size={400}/>
      </div>
    )
  }
}
export default QRGenerator;