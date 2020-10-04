import React from 'react'
import classes from '../Persons/Persons.module.css'
import Person from './Person/Person'

const persons = (props) => props.persons.map( ( person, index ) => {
        return (
        <div className={classes.personBlock}>
            <Person
                name={person.name}
                age={person.age}
                hobby={person.hobby}
                click={() => props.clicked(index)}
                key={person.id}
                changed={(event) => props.changed(event, person.id)}
            />
        </div>
        )
    })

export default persons