import React, { Component } from 'react';
import withRouter from './withRouter';
import { Container, Form, Button } from 'react-bootstrap';
import { Navigate } from "react-router-dom";


class RestaurantUpdate extends Component {

  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
      id:null,
      updated:false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/restaurant/"+this.props.params.id).then((res)=>{
      res.json().then((result)=>{
        this.setState({
          name:result.name,
          email:result.email,
          address:result.address,
          rating:result.rating,
          id:result.id,
          
        })

      })
    })
  }
  update(){
    fetch("http://localhost:3000/restaurant/"+this.state.id,{
      method:"Put",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Restaurant has been Updated !");
        this.setState({updated:true})
      })
    })
  }
  render() {
    console.log(this.props.params.id);
    return (
      <Container>
       {this.state.updated && (
          <Navigate to="/list" replace={true} />
        )}
      <br></br>
        <h1>Restaurant Update component</h1>
        <br></br>
       
        <div>
          <Form.Control onChange={(event)=>{this.setState({name:event.target.value})}}
           type="text" 
           placeholder="Restaurant Name"
           value={this.state.name} 
           />
           <br></br>
           <Form.Control onChange={(event)=>{this.setState({rating:event.target.value})}}
           type="text" 
           placeholder="Restaurant Rating"
           value={this.state.rating} 
           />
           <br></br>
           <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}}
           type="text" 
           placeholder="Restaurant Location"
           value={this.state.address} 
           />
           <br></br>
           <Form.Control onChange={(event)=>{this.setState({email:event.target.value})}}
           type="text" 
           placeholder="Restaurant Email"
           value={this.state.email} 
           />
           <br></br>
           <Button variant="primary" onClick={()=>{this.update()}}>Update Restaurant</Button>
        </div>
        
      </Container>
    )
  }
};

export default withRouter(RestaurantUpdate);
//export default RestaurantUpdate;
