import React from 'react';
import { connect } from 'react-redux';
import Smurfs from './Smurfs'
import { getData } from '../actions/smurfActions';

const SmurfContainer = (props) => {

    return (
        <>
            <button onClick={props.getData} >fetch smurfs</button>
            {props.smurfs && props.smurfs.map(smurf => <Smurfs key={smurf.id} info={smurf}/>)}
        </>
    )
}

const mapStateToProps = state => {
    console.log('smurfcontainer state', state);
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getData })(SmurfContainer)