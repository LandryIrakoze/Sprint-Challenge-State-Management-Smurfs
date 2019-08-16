import React from 'react';

const Smurfs = (props) => {
    const { info } = props;

    return (
        <>
            <p>name: {info.name}</p>
            <p>age: {info.age}</p>
            <p>height: {info.height}</p>
        </>
    )
}

export default Smurfs;