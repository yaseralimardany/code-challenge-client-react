import {fetchByUrl} from "../utils/api";

export async function getSensorRepositoryById(id) {
  const url = `/sensor/${id}`;
  return await fetchByUrl(url);
}
