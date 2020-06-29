import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {}


function reducer(state, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }

        case actionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.error },
            }

        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export default reducer
