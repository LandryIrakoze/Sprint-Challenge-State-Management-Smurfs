import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/smurfActions';

const Form = (props) => {

    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

    const handleChange = event => {
        setSmurf({...smurf, [event.target.name]: event.target.value });
        console.log(smurf);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurf(smurf);
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" value={smurf.name} onChange={event => handleChange(event)} />
            </label>
            <label>
                Age:
                <input type="text" name="age" value={smurf.age} onChange={event => handleChange(event)} />
            </label>
            <label>
                Height:
                <input type="text" name="height" value={smurf.height} onChange={event => handleChange(event)} />
            </label>
            <button onClick={event => handleSubmit(event)}>Add new Smurf</button>
        </form>
    )
}
const mapStateToProps = state => {
    console.log('Form State', state);
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { addSmurf })(Form);