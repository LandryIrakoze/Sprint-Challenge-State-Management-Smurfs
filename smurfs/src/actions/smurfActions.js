import axios from 'axios';

export const  FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const  FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const  FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const SMURF_ADD_START = 'SMURF_ADD_START'; 
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAILURE = 'SMURF_ADD_FAILURE';

export const SMURF_DELETE_START = 'SMURF_DELETE_START'; 
export const SMURF_DELETE_SUCCESS = 'SMURF_DELETE_SUCCESS'; 
export const SMURF_DELETE_FAILURE = 'SMURF_DELETE_FAILURE'; 

export const SMURF_EDIT_START = 'SMURF_EDIT_START'; 
export const SMURF_EDIT_SUCCESS = 'SMURF_EDIT_SUCCESS'; 
export const SMURF_EDIT_FAILURE = 'SMURF_EDIT_FAILURE'; 

export const getData = () => {
    return dispatch => {
        console.log('getdata_invoked');
        dispatch({ type: FETCH_SMURF_DATA_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('res', res);
                dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.error('error', err);
                dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err})
            })
    }
}

export const addSmurf = (smurfData) => {
    return dispatch => {
        console.log('addSmurf_invoked');
        dispatch({ type: SMURF_ADD_START });
        axios
            .post('http://localhost:3333/smurfs', smurfData)
            .then(res => {
                console.log('res', res);
                dispatch({ type: SMURF_ADD_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.error('error', err);
                dispatch({ type: SMURF_ADD_FAILURE, payload: err })
            })
    }
}

//EDIT THESE LATER 

export const deleteSmurf = () => {
    return dispatch => {
        console.log('addSmurf_invoked');
        dispatch({ type: SMURF_DELETE_START });
        axios
            .delete('http://localhost:3333/smurfs')
            .then(res => {
                console.log('res', res);
                dispatch({ type: SMURF_DELETE_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.error('error', err);
                dispatch({ type: SMURF_DELETE_FAILURE, payload: err })
            })
    }
}

export const editSmurf = () => {
    return dispatch => {
        console.log('addSmurf_invoked');
        dispatch({ type: SMURF_EDIT_START });
        axios
            .put('http://localhost:3333/smurfs')
            .then(res => {
                console.log('res', res);
                dispatch({ type: SMURF_EDIT_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.error('error', err);
                dispatch({ type: SMURF_EDIT_FAILURE, payload: err })
            })
    }
}
