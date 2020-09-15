import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    loading: false,
}


function reducer(state, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }

        case actionTypes.TOGGLE_LANGUAGE:
            return {
                ...state,
                isEnglish: !state.isEnglish,
            }

        case actionTypes.LOAD_DATA:
        case actionTypes.LOAD_ENG_DATA:
            return {
                ...state,
                loading: true,
            }

        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.error },
                loading: false,
            }

        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...action.data,
                loading: false,
            }

        default:
            return state
    }
}

export default reducer
