import React from 'react';

const person = (props) => {
    return (
        <div>
            <span>My name is {props.name} and I am {props.age} years old</span>
            <b>{props.children}</b>
        </div>
    )
}

export default person;