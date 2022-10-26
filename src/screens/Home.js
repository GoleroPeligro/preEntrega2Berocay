
import './Home.css';
// import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/container/ItemListConatiner/ItemListContainer';

// import productsApi from './APIrest/productsApi';
// import Item from './components/Item/Item';

function Home() {

  return (
    <div className="App">
      <div>
        {/* <NavBar /> */}
        <ItemListContainer name="Pablo" />
      </div>
    </div>
  );
}

export default Home;
