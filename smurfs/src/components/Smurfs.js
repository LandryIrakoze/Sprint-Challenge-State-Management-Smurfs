import React from 'react';

const Smurfs = (props) => {
    const { info } = props;

    return (
        <>
            <p>name: {info && info.name}</p>
            <p>age: {info && info.age}</p>
            <p>height: {info && info.height}</p>
        </>
    )
}

export default Smurfs;