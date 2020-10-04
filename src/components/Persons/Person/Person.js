import React from 'react';
import classes from '../Person/Person.module.css'

const person = (props) => {
    return (
        <div className={classes.personBlock}>
            <p onClick={props.click}>Меня зовут {props.name} и мне {props.age}.</p>
            <p>Мое хобби: {props.hobby}</p>
            <label> Редактировать хобби:  </label>
            <input type={"text"} onChange={props.changed} value={props.hobby}/>
        </div>
    )
}

export default person;