import React, { Component } from 'react';
import { Table, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import {faCoffee, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from './NavbarMenu';


export default class RestaurantSearch extends Component {

  constructor(){
    super();
    this.state={
      searchData:null,
      noData:false,
      lastSearch:""
    }
  }
  search(key){
    //console.warn(key);
    this.setState({lastSearch:key})
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
  delete(id){
    //alert(id+" Delete !!");
    fetch("http://localhost:3000/restaurant/"+id,{
      method:"Delete",
      headers:{
        'ContentType':"application/json"
      }
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Restaurant Deleted !!");
        this.search(this.state.lastSearch);
      })
    })
  }


  render() {
    return (
      <div>
      <NavbarMenu />
      <Container>
      <br></br>
        <h1>Restaurant Search</h1>
        <br></br>  
       
        <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="Search Restaurant" />
        <br></br>
        <div>
          {
            this.state.searchData?
            <div >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.searchData.map((item,i) => (
                  <tr>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>
                    
                    <Link to={"/update/"+item.id}>
                    <FontAwesomeIcon icon={faEdit} color="orange"/>
                    </Link>
                    
                    <button  className="delete-button"  onClick={()=>{this.delete(item.id)}}>
                    <FontAwesomeIcon icon={faTrash} color="red"/>
                    </button>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
              
            </div>
            :""
          }
          {
            this.state.noData?<h3>No data Found !!</h3>:null
          }
        </div>

      </Container>
      </div>
    )
  }
}
