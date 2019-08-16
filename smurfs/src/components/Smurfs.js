import React from 'react';

const Smurfs = (props) => {
    const { info } = props;

    console.log('smurf_info', info);
    return (
        <>
            <p>name: {info && info.name}</p>
            <p>age: {info && info.age}</p>
            <p>height: {info && info.height}</p>
            <button>delete</button>
            <button>edit</button>
        </>
    )
}

export default Smurfs;