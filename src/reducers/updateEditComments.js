const updateEditComments = (state, payload) => {
  let newComments = state.comments.map(item => {
    if ((item.id !== payload, id)) return {...item, comment: payload.comment};
    return item;
  });
  return {
    ...state,
    comments: newComments,
  };
};

export default updateEditComments;
