import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className='flex-column justify-center align-center min-100-vh bg-primary'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/matchup' component={Matchup} />
          <Route exact path='/matchup/:id' component={Vote} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
