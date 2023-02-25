import React, { Component } from 'react'

export default class RestaurantSearch extends Component {

  constructor(){
    super();
    this.state={
      searchData:null
    }
  }

  render() {
    return (
      <div>
        <h1>Restaurant Search</h1>
        <input type="text"/>
      </div>
    )
  }
}
