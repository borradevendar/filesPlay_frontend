// src/redux/types/record.ts

export const FETCH_RECORD_REQUEST = "FETCH_RECORD_REQUEST";
export const FETCH_RECORD_SUCCESS = "FETCH_RECORD_SUCCESS";
export const FETCH_RECORD_FAILURE = "FETCH_RECORD_FAILURE";

export interface Record {
  id: number;
  name: string;
}

export interface RecordState {
  loading: boolean;
  data: Record[] | null;
  error: string | null;
}

interface FetchRecordRequestAction {
  type: typeof FETCH_RECORD_REQUEST;
}

interface FetchRecordSuccessAction {
  type: typeof FETCH_RECORD_SUCCESS;
  payload: Record[];
}

interface FetchRecordFailureAction {
  type: typeof FETCH_RECORD_FAILURE;
  payload: string;
}

export type RecordActionTypes =
  | FetchRecordRequestAction
  | FetchRecordSuccessAction
  | FetchRecordFailureAction;
