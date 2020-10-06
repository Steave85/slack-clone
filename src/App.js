import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import Login from './components/Login';
import './styles/App.css';

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
