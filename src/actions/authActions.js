import {
    GET_AUTH_BEGIN,
    GET_AUTH_SUCCESS,
    GET_AUTH_ERROR
} from './actionTypes';

export const getAuthBegin = payload => ({
    type: GET_AUTH_BEGIN,
    payload
});

export const getAuthSuccess = payload => ({
    type: GET_AUTH_SUCCESS,
    payload
});

export const getAuthError = payload => ({
    type: GET_AUTH_ERROR,
    payload
});