const getRecipes = async () => {
  const request = await fetch("http://localhost:3001/recipes");
  return request.json();
};

export default getRecipes;
