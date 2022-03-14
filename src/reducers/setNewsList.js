const setNewsList=(state, payload)=> {
    return {
      ...state,
      newsList: payload,
    };
  };

  export default setNewsList;