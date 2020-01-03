import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { BrandPage } from './components/BrandPage';
import { ItemPage } from './components/ItemPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/brand/:brandID"
          render={props => <BrandPage {...props} />}
        />
        <Route
          exact
          path="/item/:itemID"
          render={props => <ItemPage {...props} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
