import React, {useEffect, useState} from 'react';
import './App.css';
import {Author, Map} from './types';
import {MapList} from './components/MapList';
import db from './api/db';

function App() {
  const [authors, setAuthors] = useState([] as Author[]);
  const [maps, setMaps] = useState([] as Map[]);

  useEffect(() => {
    debugger;
    db.onMapsChanged(setMaps);
  }, []);
  /*
  const maps: Map[] = [
    {
      id: 'adfadf',
      title: 'A map',
      description: 'A longish description of a map',
      author: null,
      link: new URL('http://www.system76.com'),
      createdBy: 'andy',
      createdDateTime: new Date(),
      updatedBy: 'andy',
      updatedDateTime: new Date()
    },
    {
      id: 'sadfiei',
      title: 'A second map',
      description: 'An even longer description of a second map',
      author: null,
      link: new URL('http://www.google.com'),
      createdBy: 'andy',
      createdDateTime: new Date(),
      updatedBy: 'andy',
      updatedDateTime: new Date()
    }
  ];
  */

  const user = {name: 'andy'};

  return (
    <div className='app'>
      <header className='header'></header>
      <main>
        <MapList maps={maps} user={user}></MapList>
      </main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
