import React, { Component } from 'react';
import { Form, Container, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";


export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:'',
            loginCorrect:false
        }
    }
    login(){
        console.log(this.state);
      
    fetch("http://localhost:3000/login?q="+this.state.name).then((result)=>{
      result.json().then((res)=>{
       if(res.length>0){
        this.setState({loginCorrect:true})

       }else{
        alert("Please Check username and password");
       }
      })
    })
    }
  render() {
    return (
      <Container>
       {this.state.loginCorrect && (
          <Navigate to="/list" replace={true} />
        )}
      <br></br>
      <Form.Control type="text" 
      name='user'
      onChange={(event)=>this.setState({name:event.target.value})} 
      placeholder="Enter your name" />
      <Form.Control type="text"
       name='password' 
      onChange={(event)=>this.setState({password:event.target.value})} 
      placeholder="Enter your password" />
        <Button variant="primary" onClick={()=>{this.login()}}>Login</Button> 
        
        


      </Container>
    )
  }
}
