const setNews = (state, payload) => {
  return {
    ...state,
    news: payload,
  };
};

export default setNews;
