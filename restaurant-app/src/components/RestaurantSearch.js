import React, { Component } from 'react'

export default class RestaurantSearch extends Component {

  constructor(){
    super();
    this.state={
      searchData:null
    }
  }
  search(key){
    console.warn(key);
  }


  render() {
    return (
      <div>
        <h1>Restaurant Search</h1>
        <input type="text"onChange={(event)=>this.search(event.target.value)}/>

      </div>
    )
  }
}
