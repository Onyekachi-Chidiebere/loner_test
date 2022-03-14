const updateDeleteNews = (state, payload) => {
  let remainingNews = state.newsList.filter(item => item.id !== payload);
  return {
    ...state,
    newsList: remainingNews,
  };
};

export default updateDeleteNews;
