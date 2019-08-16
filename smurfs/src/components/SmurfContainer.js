import React from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs'
import { getData } from '../actions/smurfActions';
import Loader from 'react-loader-spinner';

const SmurfContainer = (props) => {

    return (
        <>
            <button onClick={props.getData} >
                {props.isLoading ? 
                    <Loader type="tailspin" color="#00BFFF" height="15" width="100" /> :
                    `fetch smurfs`
                }
            </button>
            {props.smurfs && props.smurfs.map(smurf => <Smurfs key={smurf.id} info={smurf}/>)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getData })(SmurfContainer)