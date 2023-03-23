const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showText: state.showText };
      break;
    case "ShOWText":
      return { counter: state.counter, showText: !state.showText };

    default:
      break;
  }
};
