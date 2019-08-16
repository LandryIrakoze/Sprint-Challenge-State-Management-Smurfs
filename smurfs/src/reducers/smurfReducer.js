import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE
} from '../actions/smurfActions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}