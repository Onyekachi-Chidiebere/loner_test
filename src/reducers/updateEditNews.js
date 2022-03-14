const updateEditNews = (state, payload) => {
  let newsData = state.newsList.map(item => {
    if (item.id !== payload.id)
      return {...item, author: payload.author, title: payload.title};
    return item;
  });
  return {
    ...state,
    newsList: newsData,
  };
};

export default updateEditNews;
