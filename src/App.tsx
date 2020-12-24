import React, { useEffect, useState } from 'react';
import './App.css';
import { Author, Map } from './types';
import { MapList } from './components/MapList';
import db from './api/db';
import { MapForm } from './components/MapForm';
import { Container } from 'semantic-ui-react';

function App() {
  const [authors, setAuthors] = useState([] as Author[]);
  const [maps, setMaps] = useState([] as Map[]);

  useEffect(() => {
    db.onAuthorsChanged(setAuthors);
    db.onMapsChanged(setMaps);
  }, []);
  const user = { name: 'andy' };

  return (
    <Container>
      <header className='header'></header>
      <main>
        <MapForm authors={authors} saveMap={db.addMap} />
        <MapList maps={maps} user={user}></MapList>
      </main>
      <footer className='footer'></footer>
    </Container>
  );
}

export default App;
