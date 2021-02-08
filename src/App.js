import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from "./pages/index";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (

<Router>
<Home></Home>

</Router>
  );
}

export default App;
