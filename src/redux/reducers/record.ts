// src/redux/reducers/record.ts

import {
  FETCH_RECORD_REQUEST,
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_FAILURE,
  RecordState,
  RecordActionTypes,
} from "../types";

const initialState: RecordState = {
  loading: false,
  data: null,
  error: null,
};

export const recordReducer = (
  state = initialState,
  action: RecordActionTypes
): RecordState => {
  switch (action.type) {
    case FETCH_RECORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_RECORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_RECORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
