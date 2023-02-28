import React, { Component } from 'react';
import { Form, Container, Button } from "react-bootstrap";


export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    login(){
        alert("Login button clicked !!");
    }
  render() {
    return (
      <Container>
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
