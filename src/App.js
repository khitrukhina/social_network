import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ProfileContainerComponent } from './components/Profile/ProfileContainer';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import { SidebarContainer } from './components/Sidebar/SidebarContainer';
import { UserProfileContainerComponent } from './components/UserProfile/UserProfileContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { LoginContainer } from './components/common/Login/LoginContainer';
import { initThunk } from './redux/app-reducer';
import { Preloader } from '../src/components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initThunk();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <Router>
        <div className="d-flex flex-column">
          <HeaderContainer />
          <div className="d-flex">
            <SidebarContainer />
            <Switch>
              <Route exact path="/">
                <ProfileContainerComponent />
              </Route>
              <Route path="/dialogs">
                <DialogsContainer />
              </Route>
              <Route path="/users">
                <UsersContainer />
              </Route>
              <Route path="/profile/:id">
                <UserProfileContainerComponent />
              </Route>
              <Route path="/login">
                <LoginContainer />
              </Route>
              <Route path="/music" component={Music}></Route>
              <Route path="/settings" component={Settings}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { initThunk })(App);
