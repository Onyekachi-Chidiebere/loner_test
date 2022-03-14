const updateDeletedImage = (state, payload) => {
  let remainingImages = state.images.filter(item => item.id !== payload);
  return {
    ...state,
    images: remainingImages,
  };
};

export default updateDeletedImage;
