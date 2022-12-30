import './App.css';
import React from 'react';
import NavBar from './components/navBar/NavBar'
import Banner from './components/banner/Banner'
import RowPost from './components/rowPost/RowPost'
import './App.css'
import './components/navBar/navBar.css'
import './components/rowPost/RowPost.css'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost/>
    </div>

  );
}

export default App;
