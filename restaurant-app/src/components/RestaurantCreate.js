import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Navigate } from "react-router-dom";

export default class RestaurantCreate extends Component {

  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
      created:false
    }
  }

  create(){
    fetch("http://localhost:3000/restaurant",{
      method:"Post",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Restaurant has been added !");
        this.setState({created:true});
      })
    })
  }
  render() {
    return (
      <Container>
       {this.state.created && (
          <Navigate to="/list" replace={true} />
        )}
      <br></br>
        <h1>Restaurant Create</h1>
        <br></br>
        <div>
          <Form.Control onChange={(event)=>{this.setState({name:event.target.value})}}
           type="text" 
           placeholder="Enter Restaurant Name"
            
           />
           <br></br>
           <Form.Control onChange={(event)=>{this.setState({rating:event.target.value})}}
           type="text" 
           placeholder="Enter Restaurant Rating"/>
           <br></br>
           <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}}
           type="text" 
           placeholder="Enter Restaurant Location"/>
           <br></br>
           <Form.Control onChange={(event)=>{this.setState({email:event.target.value})}}
           type="text" 
           placeholder="Enter Restaurant Email"/>
           <br></br>
          
           <Button variant="primary" onClick={()=>{this.create()}}>Add Restaurant</Button> 
        </div>
      </Container>
    )
  }
}
