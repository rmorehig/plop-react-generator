export const GET_USER_BEGIN = "GET_USER_BEGIN";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_BEGIN = "GET_USER_BEGIN";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
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
export const GET_AUTH_BEGIN = "GET_AUTH_BEGIN";
export const GET_AUTH_SUCCESS = "GET_AUTH_SUCCESS";
export const GET_AUTH_ERROR = "GET_AUTH_ERROR";