import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
