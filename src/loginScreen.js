import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import './background.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const responseSuccess = (response) => {
     console.log(response.w3.U3);
     //this.props.history.push("/scanner");
     let formData = {email: response.w3.U3};
        const encodeForm = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
        }
        axios.post('http://127.0.0.1:8080/attandance_application/TestServlet',encodeForm(formData))
        .then(function (reply) {
        // handle success
        console.log(reply);
        if(reply==="teacher")
        {
          this.props.history.push("/generator");
        }
        else if(reply==="student")
        {
          this.props.history.push("/scanner");
        }
        else
        {
          console.log("unknown");
        }
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
      });
    }
    const responseFailure = (response) => {
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
              onSuccess={responseSuccess}
              onFailure={responseFailure}
              cookiePolicy={'single_host_origin'}/>
        </Box>
      </div>
      </div>
    )
  }
}
export default LoginScreen;