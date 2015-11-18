var defaultState = {
  name: 'Wings'
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE-APPLICATION-NAME':
      return {name: action.name};
    default:
      return state;
  }
}