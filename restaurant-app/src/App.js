import './App.css';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom';
import {Navbar,Nav} from "react-bootstrap";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faList, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar bg="light" expand="lg">
    <img className='logo-style' src="food_logo.webp"></img>
        <Navbar.Brand href="#home" className='brand'>
        Resto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/" className='link-style'> <FontAwesomeIcon icon={faHome} color="blueviolet"/> Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/list" className='link-style'> <FontAwesomeIcon icon={faList} color="blueviolet"/> List</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/create" className='link-style'> <FontAwesomeIcon icon={faPlus} color="blueviolet"/> Create</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/search" className='link-style'> <FontAwesomeIcon icon={faSearch} color="blueviolet"/> Search</Link></Nav.Link>
            
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
