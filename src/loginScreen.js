import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import './background.css';
import GoogleLogin from 'react-google-login';


export default class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response.w3.U3);
    }
    return (
      <div className="hero">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      <div style={{display:'flex', justifyContent:'center', paddingTop:'10rem'}}>
        <Box style={{height:'10rem', width:'20rem', backgroundColor:'#7878f5',
            display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'7px',
             boxShadow:"5px 5px 10px rgba(0,0,0,0.5)", border:'1px solid #0e00a3'}}>
              <GoogleLogin
              style={{height:'2rem', width:'5rem', backgroundColor:'white'}}
              clientId="220838812292-k5hcpmd3soo47q0u7oci6sqiqcig37gq.apps.googleusercontent.com"
              buttonText="LogIn"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}/>
        </Box>
      </div>
      </div>
    )
  }
}