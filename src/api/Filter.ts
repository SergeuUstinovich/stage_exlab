import { ListServices } from "../types/ListServices";
import { validateError } from "../helpers/validateResponse";


const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function getListServices(token: string | undefined): Promise<ListServices> {
  return fetch(`${api_url}/product/list-services/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  })
    .then(validateError)
    .then(async (response) => {
      const obj = await response.json();
      return obj;
    });
}