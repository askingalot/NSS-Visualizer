import React, {useEffect, useState} from 'react';
import './App.css';
import {Author, Map} from './types';
import {MapList} from './components/MapList';
import db from './api/db';
import {MapForm} from './components/MapForm';

function App() {
  const [authors, setAuthors] = useState([] as Author[]);
  const [maps, setMaps] = useState([] as Map[]);

  useEffect(() => {
    db.onMapsChanged(setMaps);
  }, []);
  const user = {name: 'andy'};
  const saveMap = (m: Map) => console.log(m);

  return (
    <div className='app'>
      <header className='header'></header>
      <main>
        <MapForm saveMap={saveMap} />
        <MapList maps={maps} user={user}></MapList>
      </main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
