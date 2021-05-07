/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_DATA } from "../actions/types";

var initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
