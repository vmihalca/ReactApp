import * as React from 'react';

const ChangeColor = (clickCube, cubeClick) => {
    return (
        <div onClick={clickCube} className={cubeClick ? 'cube' : 'greencube'}>
        </div>
    )
};


export default ChangeColor;