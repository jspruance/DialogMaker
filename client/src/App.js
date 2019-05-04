import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DialogMaker from './components/DialogMaker';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dialogs/create" component={DialogMaker} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
