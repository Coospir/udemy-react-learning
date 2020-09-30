import React from 'react';

const person = (props) => {
    return (
        <div>
            <span onClick={props.click}>My name is {props.name} and I am {props.age} years old</span>
            <b>{props.children}</b>
            <label>Change hobby >>>  </label>
            <input type={"text"} onChange={props.changed} value={props.hobby}/>
        </div>
    )
}

export default person;