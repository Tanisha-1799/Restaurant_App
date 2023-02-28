import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  getData(){
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        //console.warn(result);
        this.setState({ list: result });
      });
    });
  }
  componentDidMount() {
    this.getData();

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
        this.getData();
      })
    })
  }
  render() {
    return (
      <Container>
      <br></br>
        <h1>Restaurant List</h1>
        <br></br>
        
        {this.state.list ? (
          <div>
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
                {this.state.list.map((item, i) => (
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
        ) : (
          <p>Please Wait...</p>
        )}
      </Container>
    );
  }
}
