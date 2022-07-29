import fetch from 'node-fetch';
export const BASE_URL = 'https://temperature-sensor-service.herokuapp.com';

export async function fetchByUrl(url) {
  try {
    const response = await fetch(BASE_URL + url)
    const body = await response.json();
    return { error: false, data: body };
  } catch (e) {
    console.error("Error happened on fetchByUrl", new Date(), e);
  }
  return { error: true, data: null };
}
