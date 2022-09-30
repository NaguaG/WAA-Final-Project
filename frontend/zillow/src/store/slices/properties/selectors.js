const selectProperties = (state) => {
  return state.properties.data;
};

const selectPropertyDetails = (state, id) => {
  const property = state.properties.data.filter(
    (property) => property.id === id
  );
  return property.length ? property[0] : {};
};

export { selectProperties, selectPropertyDetails };
