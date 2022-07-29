import { BASE_URL } from '../config/config';

export async function getSensorTemperature(id) {
  try {
    if (!id) {
      return null;
    }
    const response = await fetch(`${BASE_URL}/temperature/${id}`);
    return await response.json();
  } catch (e) {
    console.error("getSensorTemperature error", e);
  }
  return null;
}

export async function getSensorTemperatureByProducts(products) {
  if (!products) {
    return [];
  }
  const data = [];
  for (let i =0; i< products.length; i++) {
    const itemData = await getSensorTemperature(products[i].id);
    if (itemData) {
      data.push({...products[i], temperature: itemData.temperature});
    }
  }
  return data;
}