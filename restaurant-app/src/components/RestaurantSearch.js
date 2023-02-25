import React, { Component } from 'react'

export default class RestaurantSearch extends Component {

  constructor(){
    super();
    this.state={
      searchData:null,
      noData:false
    }
  }
  search(key){
    //console.warn(key);
    fetch("http://localhost:3000/restaurant?q="+key).then((result)=>{
      result.json().then((res)=>{
       if(res.length>0){
        this.setState({searchData:res, noData:false})
       }else{
        this.setState({noData:true, searchData:null})
       }
      })
    })
  }


  render() {
    return (
      <div>
        <h1>Restaurant Search</h1>
        <input type="text"onChange={(event)=>this.search(event.target.value)}/>
        <div>
          {
            this.state.searchData?
            <div >
              {
                this.state.searchData.map((item)=>
                <div className='search-row'>
                  {item.name}
                </div>
                )}
            </div>
            :""
          }
          {
            this.state.noData?<h3>No data Found !!</h3>:null
          }
        </div>

      </div>
    )
  }
}
