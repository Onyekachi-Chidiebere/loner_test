const updateImage = (state, payload) => {
  let newImages = [...state.images, payload];
  return {
    ...state,
    images: newImages,
  };
};

export default updateImage;
