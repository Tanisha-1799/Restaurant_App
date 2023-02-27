import React, { Component } from 'react';


export default class RestaurantCreate extends Component {

  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
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
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <div>
          <input onChange={(event)=>{this.setState({name:event.target.value})}}
           type="text" 
           placeholder="Restaurant Name"
            
           /><br></br>
           <br></br>
           <input onChange={(event)=>{this.setState({rating:event.target.value})}}
           type="text" 
           placeholder="Restaurant Rating"/><br></br>
           <br></br>
           <input onChange={(event)=>{this.setState({address:event.target.value})}}
           type="text" 
           placeholder="Restaurant Location"/><br></br>
           <br></br>
           <input onChange={(event)=>{this.setState({email:event.target.value})}}
           type="text" 
           placeholder="Restaurant Email"/><br></br>
           <br></br>
           <button onClick={()=>{this.create()}}>Add Restaurant</button>
        </div>
      </div>
    )
  }
}
