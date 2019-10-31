import {
    GET_USER_BEGIN,
    GET_USER_SUCCESS,
    GET_USER_ERROR
} from './actionTypes';

export const getUserBegin = payload => ({
    type: GET_USER_BEGIN,
    payload
});

export const getUserSuccess = payload => ({
    type: GET_USER_SUCCESS,
    payload
});

export const getUserError = payload => ({
    type: GET_USER_ERROR,
    payload
});