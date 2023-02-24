import './App.css';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom';
import {Navbar,Nav} from "react-bootstrap";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar bg="light" expand="lg">
      
        <Navbar.Brand href="#home" className='brand'>Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<RestaurantList />}></Route>
      <Route path="/create" element={<RestaurantCreate />}></Route>
      <Route path="/search" element={<RestaurantSearch />}></Route>
      <Route path="/details" element={<RestaurantDetail />}></Route>
      <Route path="/update/:id" element={<RestaurantUpdate />}></Route>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
