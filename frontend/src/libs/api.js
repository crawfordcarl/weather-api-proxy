import fetch from 'isomorphic-fetch';

function handleErrors(response) {
  if (!response.ok) {
    const contentType = response.headers.get('content-type');

    if (contentType === 'application/json') {
      return response.json().then(json => {
        if (json.error) {
          throw Error(json.error);
        } else {
          throw Error(json);
        }
      });
    }

    throw Error(response.statusText);
  }

  return response.json();
}

const API = {
  fetch(url, cb) {
    return fetch(url, { credentials: 'same-origin' })
      .then(handleErrors)
      .then(cb);
  },
}

export default API;
