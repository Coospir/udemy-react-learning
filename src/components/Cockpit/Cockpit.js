import React from 'react'
import classes from '../Cockpit/Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses = []

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red
    } 

    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }

    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
        <h1>Our Team</h1>
            <p className={assignedClasses.join(' ')}>Look in future</p>
            <button 
            className={btnClass} 
            onClick={props.clicked}>Show</button>
        </div>
    )
}

export default cockpit