/* eslint-disable import/no-anonymous-default-export */
import {
  GET_AREA,
  GET_CATEGORY,
  GET_COUNTRY,
  GET_GOVERNORATE,
  SET_USER,
  GET_LANGUAGE_LIST,
  GET_TERMS,
  GET_ALL_USER,
} from "../actions/types";

var initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categoryList: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        userList: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case GET_GOVERNORATE:
      return {
        ...state,
        governorate: action.payload,
      };
    case GET_AREA:
      return {
        ...state,
        area: action.payload,
      };

    case GET_LANGUAGE_LIST:
      return {
        ...state,
        languageList: action.payload,
      };

    case GET_TERMS:
      return {
        ...state,
        terms: action.payload,
      };

    default:
      return state;
  }
}
