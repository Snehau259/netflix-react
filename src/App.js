import './App.css';
import React from 'react';
import NavBar from './components/navBar/NavBar'
import Banner from './components/banner/Banner'
import RowPost from './components/rowPost/RowPost'
import './App.css'
import './components/navBar/navBar.css'
import './components/rowPost/RowPost.css'
import { action,originals } from './urls';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title={'Netflix Originals'} url={originals}/>
      <RowPost title={'Action'} isSmall url={action}/>
    </div>

  );
}

export default App;
