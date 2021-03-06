import { restaurantsApi } from '../api';

const loadRestaurantsSuccess = (restaurants) => ({
  type: 'LOAD_RESTAURANTS_SUCCESS',
  restaurants: restaurants
});

export const onSearchChange = (value) => ({
  type: 'ON_SEARCH_CHANGE',
  value,
});

export const onTagSearchChange = (value) => ({
  type: 'ON_TAG_SEARCH_CHANGE',
  value,
});

export const loadRestaurants = () => dispatch => {
  restaurantsApi.loadRestaurants().then(result => dispatch(
    loadRestaurantsSuccess(result.data)
  ));
}

export const createRestaurant = (name, address, description) => dispatch => {
  restaurantsApi.createRestaurant(name, address, description)
    .then(result => {
      window.location = `/restaurants/${result.data.id}`;
    });
}

const commentAdded = (restaurantId, comment) => ({
  type: 'RESTAURANT_COMMENT_ADDED',
  restaurantId,
  comment,
});

export const createComment = (id, rating, description) => dispatch => (
  restaurantsApi.createComment(id, rating, description)
    .then(result => dispatch(commentAdded(id, result.data)))
)
