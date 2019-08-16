import axios from 'axios';

export const  FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const  FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const  FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        console.log('getdata_invoked');
        dispatch({ type: FETCH_SMURF_DATA_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('res', res);
                dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res});
            })
            .catch(err => {
                console.error('error', err);
                dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err})
            })
    }
}