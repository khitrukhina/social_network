import React from 'react';
import * as axios from 'axios';
import { Users } from './Users';

export class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users', {
        headers: {
          'API-KEY': 'f8b321b2-cb64-4f9e-b4a5-13be82bd97b5',
        },
      })
      .then((response) => {
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

// 'https://jsonplaceholder.typicode.com/users'
