import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const createApi = (url) => axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function createRestaurant(name, address, description) {
  return createApi(BASE_URL).post(`/restaurants`, {
    name,
    address,
    description,
  });
}
