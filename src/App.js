import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage-componet'

const HasPage = () =>(
    <div>
        <h1> Hats Page</h1>
    </div>
);
function App() {
  return (
      <div>
          <Switch>
              <Route exact path='/' component={Homepage} />
              <Route path='/hats' component={HasPage}/>


          </Switch>




      </div>

  );
}

export default App;
