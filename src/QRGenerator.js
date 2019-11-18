import React, {Component} from 'react';

var d = new Date();
var n = d.getTime();
setInterval (function(){
  var date = new Date(n); 
  var n1 = date.toString();
  document.getElementById("image").src = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='+n1;
  n=new Date().getTime();
} , 5000);

class QRGenerator extends Component {
  render() {
    return (
      <div>
        <img id="image" alt="qr-code"/>
      </div>
    )
  }
}

export default QRGenerator;