const setPage = (state, payload) => {
  return {
    ...state,
    page: payload,
  };
};

export default setPage;
