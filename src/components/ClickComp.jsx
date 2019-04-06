import * as React from 'react';

//Stateless Functional Component / SFC

const ClickComp = ({ click, stateChange }) => {
    return (
        <div onClick={stateChange}>
            {click ? 'Clicked' : 'notClicked'}
        </div>
    )
}

export default ClickComp;