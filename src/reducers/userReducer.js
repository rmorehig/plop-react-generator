import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../actions/actionTypes";

import initialState from "./initialState";

export default function(state = initialState.getUser, action) {
  switch (action.type) {
    case GET_USER_BEGIN:
    case GET_USER_SUCCESS:
    case GET_USER_ERROR:
      return state;
    //plopImport
  }
}
