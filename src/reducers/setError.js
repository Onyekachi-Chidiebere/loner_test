const setError = (state, payload) => {
  
  return {
    ...state,
    error: payload,
  };
};

export default setError;
