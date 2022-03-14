const updateDeleteComments = (state, payload) => {
  let remainingComments = state.comments.filter(item => item.id !== payload);
  return {
    ...state,
    comments: remainingComments,
  };
};

export default updateDeleteComments;
