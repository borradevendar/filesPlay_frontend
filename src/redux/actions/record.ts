// src/redux/actions/record.ts
import { fetchHandler } from "../../common/fetch-handler";
import {
  FETCH_RECORD_REQUEST,
  FETCH_RECORD_SUCCESS,
  FETCH_RECORD_FAILURE,
  RecordActionTypes,
} from "../types";

import { Dispatch } from "redux";

// Thunk action
export const fetchRecords =
  () => async (dispatch: Dispatch<RecordActionTypes>) => {
    try {
      dispatch({ type: FETCH_RECORD_REQUEST });

      const response = await fetchHandler({
        method: "GET",
        endpoint: "/records",
      });

      dispatch({
        type: FETCH_RECORD_SUCCESS,
        payload: response,
      });
    } catch (err: any) {
      dispatch({
        type: FETCH_RECORD_FAILURE,
        payload: err?.message || "Something went wrong",
      });
    }
  };
