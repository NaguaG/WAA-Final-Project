const selectProperties = (state) => {
  return state.properties.data;
};

const selectPropertyDetails = (state, id) => {
  const property = state.properties.data.filter(
    (property) => property.id === id
  );
  return property.length ? property[0] : {};
};

const selectPropertyStats = (state) => {
  const names = state.properties.propertyStats.map((stats) => stats.name);
  const counts = state.properties.propertyStats.map((stats) => stats.value);

  return {
    names: names.length > 0 ? names : [],
    counts: counts.length > 0 ? counts : [],
  };
};

export { selectProperties, selectPropertyDetails, selectPropertyStats };
