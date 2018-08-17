export class UserServiceClient {

  // USER_URL = 'https://course-manager-node-server.herokuapp.com';
  USER_URL = 'https://course-manager-node-server.herokuapp.com';

  findUserById(userId) {
    return fetch( this.USER_URL + '/api/user/' + userId)
      .then(response => response.json());
  }
  findUserByUsername(username) {
    return fetch(this.USER_URL + '/api/user/' + username + '/username')
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };
    return fetch(this.USER_URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  logout() {
    return fetch(this.USER_URL + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(this.USER_URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  updateUser(user) {
    return fetch(this.USER_URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
    }
  });
}

  createUser(username, password) {
    console.log(username);
    console.log(password);
    const user = {
      username: username,
      password: password,
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: ''
    };
    return fetch( this.USER_URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
