import history from '../history';

export function doSomething(param) {

  var request = require('request');

  return dispatch => request({
    uri: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true,
    form: {
      grant_type: 'authorization_code'
    }
  }, function (err, response, body) {

    if (!err) {
      var json = JSON.parse(body);

      localStorage.setItem('refreshToken', json.refresh_token);

      history.push('/');

    } else {
      console.log("ERROR", err);
    }
  }, function(err) {
    console.error(err);
  });
}
