import React from 'react';


export const CardList = props => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
}