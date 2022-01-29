/* eslint-disable no-undef */
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return { loading: true, product: [] };

    case ALL_PRODUCT_SUCCESS:
      return {
        loading: true,
        product: action.payload.products,
        productsCount: action.payload.productsCount,
      };

    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Actions are plain objects with a type field, and describe "what happened" in the app
// Reducers are functions that calculate a new state value based n previous stae + action
// A Redux store runs the root reducer whenever an action is despatched
