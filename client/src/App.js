import React, { useState } from 'react';

import { Route, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
        <Switch>
     <Route exact path="/" component={MovieList} />
     <Route path="/movies/:id" component={Movie} />
     <Route path="./home/" component={SavedList} />
        </Switch>

      <SavedList list={savedList} />
    </div>
  );
};

export default App;
