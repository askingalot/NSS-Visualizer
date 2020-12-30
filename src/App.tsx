import React, { useEffect, useState } from 'react';
import './App.css';
import { Author } from './types/types';
import { MapList } from './components/MapList';
import { MapForm } from './components/MapForm';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';
import { AuthorList } from './components/AuthorList';
import { AuthorForm } from './components/AuthorForm';
import { DisplayableMap } from './types/mapTypes';
import {
  observeMapChanges, addMap, deleteMap,
  observeAuthorChanges, addAuthor, deleteAuthor
} from './api';

function App() {
  const [authors, setAuthors] = useState([] as Author[]);
  const [maps, setMaps] = useState([] as DisplayableMap[]);

  useEffect(() => {
    observeAuthorChanges(setAuthors);
    observeMapChanges(setMaps);
  }, []);

  return (
    <Router>
      <Nav />
      <Container>
        <main>
          <Switch>
            {["/", "/maps"].map(path =>
              <Route key={path} path={path} exact>
                <MapList maps={maps} deleteMap={deleteMap} />
              </Route>
            )}
            <Route path="/maps/add">
              <MapForm authors={authors} saveMap={addMap} />
            </Route>
            <Route path="/authors" exact>
              <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
            </Route>
            <Route path="/authors/add">
              <AuthorForm saveAuthor={addAuthor} />
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
