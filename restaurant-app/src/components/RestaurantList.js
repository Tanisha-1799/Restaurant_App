import React, { Component } from 'react'

export default class RestaurantList extends Component {
  constructor(){
    super();
    this.state={
      list : null,
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/restaurant").then((response)=>{
      response.json().then((result)=>{
        //console.warn(result);
        this.setState({list:result});
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
        {
          this.state.list?
          <div>
            {
              this.state.list.map((item,i)=>
                <div className='list-wrapper'>
                  <span>{item.name}</span>
                  <span>{item.email}</span>
                  <span>{item.address}</span>
                  <span>{item.rating}</span>
                </div>

              )
            }
          </div>
          :<p>Please Wait...</p>
        }
      </div>
    )
  }
}
