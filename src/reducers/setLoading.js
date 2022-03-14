const setLoading = (state, payload) => {
  return {
    ...state,
    loading: payload,
  };
};

export default setLoading;
