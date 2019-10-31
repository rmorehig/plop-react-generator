import {
    GET_AUTH_BEGIN,
    GET_AUTH_SUCCESS,
    GET_AUTH_ERROR
} from "../actions/actionTypes";

import initialState from "./initialState";

export default function(state = initialState.getAuth, action) {
    switch (action.type) {
        case GET_AUTH_BEGIN:
        case GET_AUTH_SUCCESS:
        case GET_AUTH_ERROR:
            return state;
    //plopImport
    }
}