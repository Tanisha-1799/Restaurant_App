import React, { Component } from 'react';
import withRouter from './withRouter';

class RestaurantUpdate extends Component {
  render() {
    console.log('Props:', this.props)
    return (
      <div>
        <h1>Restaurant Update component</h1>
        <div>Id: {this.props.params.id}</div>
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
           <button onClick={()=>{this.update()}}>Update Restaurant</button>
        </div>
        
      </div>
    )
  }
};

export default withRouter(RestaurantUpdate);
