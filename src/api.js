export const API_URL = 'http://localhost:5000';


export function TOKEN_POST(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}
export function USER_GET (token) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'x-access-token ' + token,
      },
   }
  }
}