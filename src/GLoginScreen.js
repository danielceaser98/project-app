import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import './background.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function withHistory(Component){
  return function WrappedComponent(props){
    const hist = useHistory();
    return <Component {...props} hist={hist}/>;
  }
}

class LoginScreen extends Component {
  render() {
    const ResponseSuccess = (response) => {
     const history = this.props.hist;
     let formData = {email: response.w3.U3};
        const encodeForm = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
        }
        axios.post('http://127.0.0.1:8080/attandance_application/ValidateUser',encodeForm(formData))
        .then(function (reply) {
        // handle success
        if(reply.data==="teacher")
        {
          history.push("/generator");
        }
        else if(reply.data==="student")
        {
          history.push("/scanner");
        }
        else if(reply.data==="unknown")
        {
          console.log(reply);
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
    const ResponseFailure = (response) => {
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
              onSuccess={ResponseSuccess}
              onFailure={ResponseFailure}
              cookiePolicy={'single_host_origin'}/>
        </Box>
      </div>
      </div>
    )
  }
}
LoginScreen = withHistory(LoginScreen);
export default LoginScreen;