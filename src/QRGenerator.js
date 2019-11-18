import React, {Component} from 'react';

var d = new Date();
var n = d.getTime();
class QRGenerator extends Component {
    componentDidMount(){
        this.getqr();
        setInterval (this.getqr, 5000);        
    }
   getqr = () =>{
       if(document.getElementById("image")!==null)
       {
        document.getElementById("image").src = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='+n;
       }
       else
       {
        console.log("Ridip");
       }
    n=new Date().getTime();
   }
  render() {
    return (
      <div>
        <img id="image" alt="qr-code"/>
      </div>
    )
  }
}
export default QRGenerator;