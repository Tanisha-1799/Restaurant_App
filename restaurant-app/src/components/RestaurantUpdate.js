import React, { Component } from 'react';
import withRouter from './withRouter';


class RestaurantUpdate extends Component {

  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
      id:null
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
          id:result.id
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
      })
    })
  }
  render() {
    console.log(this.props.params.id);
    return (
      <div>
        <h1>Restaurant Update component</h1>
       
        <div>
          <input onChange={(event)=>{this.setState({name:event.target.value})}}
           type="text" 
           placeholder="Restaurant Name"
           value={this.state.name} 
           /><br></br>
           <br></br>
           <input onChange={(event)=>{this.setState({rating:event.target.value})}}
           type="text" 
           placeholder="Restaurant Rating"
           value={this.state.rating} 
           /><br></br>
           <br></br>
           <input onChange={(event)=>{this.setState({address:event.target.value})}}
           type="text" 
           placeholder="Restaurant Location"
           value={this.state.address} 
           /><br></br>
           <br></br>
           <input onChange={(event)=>{this.setState({email:event.target.value})}}
           type="text" 
           placeholder="Restaurant Email"
           value={this.state.email} 
           /><br></br>
           <br></br>
           <button onClick={()=>{this.update()}}>Update Restaurant</button>
        </div>
        
      </div>
    )
  }
};

export default withRouter(RestaurantUpdate);
//export default RestaurantUpdate;
