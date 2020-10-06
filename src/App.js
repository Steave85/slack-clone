import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue, StateConsumer } from './StateProvider';
import Header from './Header';
import SideBar from './SideBar';
import Chat from './Chat';
import Login from './Login';
import './App.css';

function App() {
  const [{user}] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )
        }
      </Router>
    </div>
  );
}

export default App;
