import './App.css';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from './components/Login';
import NavbarMenu from './components/NavbarMenu';


function App() {
  return (
    <div className="App">
    <Router>
   
      <NavbarMenu />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<RestaurantList />}></Route>
      <Route path="/create" element={<RestaurantCreate />}></Route>
      <Route path="/search" element={<RestaurantSearch />}></Route>
      <Route path="/details" element={<RestaurantDetail />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/update/:id" element={<RestaurantUpdate />}></Route>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
