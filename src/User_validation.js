import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
        // let xhttp = new XMLHttpRequest();
		// 	xhttp.onreadystatechange = function() {
		// 		  if (this.readyState == 4 && this.status == 200) {
		// 		  	console.log(this.responseText);
		// 		  }
		// 	};
		// 	xhttp.open("POST", "http://127.0.0.1:8080/attandance_application/TestServlet", true);
		// 	xhttp.setRequestHeader("Content-type",
		// 			"application/x-www-form-urlencoded");
        // 	xhttp.send("name=ARITRA DE&email=1606414@kiit.ac.in&time=1574103946112");

        let formData = {name: 'ARITRA DE', email: '1606414@kiit.ac.in', time: '1574103946112'};
 
        const encodeForm = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
        }
        axios.post('http://127.0.0.1:8080/attandance_application/TestServlet',encodeForm(formData))
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    }

    render() {
        return (
            <div>
                List of posts
            </div>
        )
    }
}

export default PostList
