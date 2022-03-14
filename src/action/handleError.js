const handleError =(error, dispatch)=>{
  console.log({error})
  //this handles all error in store update
    dispatch.NewsData.setLoading(false);
  if (error.response) {
    dispatch.NewsData.setError(error.response.data);
  } else if (error.request) {
    dispatch.NewsData.setError(error.request);
  } else {
    dispatch.NewsData.setError(error.message);
  }
};
export default handleError;