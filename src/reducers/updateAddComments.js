const updateAddComments = (state, payload) => {
  let newComments = [...state.comments, payload];
  return {
    ...state,
    comments: newComments,
  };
};

export default updateAddComments;
