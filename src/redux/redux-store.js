import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import { loginReducer } from './login-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './app-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  loginPage: loginReducer,
  form: formReducer,
  app: appReducer,
});

export let store = createStore(reducers, applyMiddleware(thunk));
