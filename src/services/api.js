export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return (error);
  }
}

export async function getProducts(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return (error);
  }
}

export async function getProductFromId(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return (error);
  }
}

export async function getProductsFromCategory(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return (error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return (error);
  }
}
