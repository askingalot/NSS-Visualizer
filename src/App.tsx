import React, { useEffect, useState } from 'react';
import './App.css';
import { Author } from './types/types';
import { MapList } from './components/MapList';
import db from './api/db';
import { MapForm } from './components/MapForm';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { AuthorList } from './components/AuthorList';
import { AuthorForm } from './components/AuthorForm';
import { storage } from './api/storage';
import { AddableMap, DisplayableMap } from './types/mapTypes';

function App() {
  const [authors, setAuthors] = useState([] as Author[]);
  const [maps, setMaps] = useState([] as DisplayableMap[]);

  useEffect(() => {
    db.onAuthorsChanged(setAuthors);
    db.onMapsChanged(setMaps);
  }, []);
  const user = { name: 'andy' };

  const saveMap = async (map: AddableMap) => {
    const link = await storage.uploadMap(map.file)
    await db.addMap(map, link);
  }

  return (
    <Router>
      <Nav />
      <Container>
        <main>
          <Switch>
            {["/", "/maps"].map(path =>
              <Route key={path} path={path} exact>
                <MapList maps={maps} deleteMap={db.deleteMap}/>
              </Route>
            )}
            <Route path="/maps/add">
              <MapForm authors={authors} saveMap={saveMap} />
            </Route>
            <Route path="/authors" exact>
              <AuthorList authors={authors} deleteAuthor={db.deleteAuthor}/>
            </Route>
            <Route path="/authors/add">
              <AuthorForm saveAuthor={db.addAuthor} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        <footer className='footer'></footer>
      </Container>
    </Router>
  );
}

export default App;
