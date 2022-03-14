const setComments = (state, payload) => {
  return {
    ...state,
    comments: payload,
  };
};

export default setComments;
