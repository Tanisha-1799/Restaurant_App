import React, { Component } from 'react'

export default class RestaurantUpdate extends Component {
  render() {
    //console.log(this.props.match.params.id);
    return (
      <div>
        <h1>Restaurant Update component</h1>
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
}
