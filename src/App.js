import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/DialogsContainer';
import { UsersContainer } from './components/UsersContainer';
import { SidebarContainer } from './components/SidebarContainer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column">
        <Header />
        <div className="d-flex">
          <SidebarContainer />
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route path="/dialogs">
              <DialogsContainer />
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>
            <Route path="/music" component={Music}></Route>
            <Route path="/settings" component={Settings}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
