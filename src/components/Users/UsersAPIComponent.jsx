import React from 'react';
import * as axios from 'axios';
import { Users } from './Users';

export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      this.props.setUsers(response.data);
    }); //side effect
  }
  render() {
    return (
      <Users
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}
