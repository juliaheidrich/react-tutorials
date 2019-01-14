import React from 'react';

export default function AddRowButton(props) {
    //stateless component
    return(
        <button onClick={props.onClick}>add new row</button>
    );
}
