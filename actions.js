export const actionTypes = {
    FAILURE: 'FAILURE',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_ENG_DATA: 'LOAD_ENG_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    TOGGLE_LANGUAGE: 'TOGGLE_LANGUAGE',
    HYDRATE: 'HYDRATE',
}

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error,
    }
}

export function loadData() {
    return { type: actionTypes.LOAD_DATA }
}

export function loadEngData() {
    return { type: actionTypes.LOAD_ENG_DATA }
}

export function toggleLanguage() {
    return { type: actionTypes.TOGGLE_LANGUAGE }
}

export function loadDataSuccess(data) {
    return {
        type: actionTypes.LOAD_DATA_SUCCESS,
        data,
    }
}
