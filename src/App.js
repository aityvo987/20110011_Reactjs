import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;