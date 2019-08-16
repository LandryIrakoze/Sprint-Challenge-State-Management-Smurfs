import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    SMURF_ADD_START,
    SMURF_ADD_SUCCESS,
    SMURF_ADD_FAILURE,
    SMURF_DELETE_START,
    SMURF_DELETE_SUCCESS,
    SMURF_DELETE_FAILURE,
    SMURF_EDIT_START,
    SMURF_EDIT_SUCCESS,
    SMURF_EDIT_FAILURE,
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
        case SMURF_ADD_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case SMURF_ADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...state.smurfs, action.payload]
            }
        case SMURF_ADD_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SMURF_DELETE_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case SMURF_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
            }
        case SMURF_DELETE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}