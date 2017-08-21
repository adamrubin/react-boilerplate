const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return Object.assign({}, state, {user: action.payload});
    }
    default: {
      return {}
    }
  }
}

export default auth;
