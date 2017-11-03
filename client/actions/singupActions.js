import axios from 'axios';

export function userSingupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
}