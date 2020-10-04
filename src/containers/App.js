import React, {Component} from 'react';
import Persons from '../components/Persons/Persons'
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Руслан', age: '22', hobby: 'спорт' },
            { id: '2', name: 'Закир', age: '23', hobby: 'фотография' },
            { id: '3', name: 'Тимур', age: '24', hobby: 'дрюкаю на VAG' },
        ],
        showPersons: false
    }

    // Edit hobby
    switchHobbyHandler = ( event, id ) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        }
        person.hobby = event.target.value

        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({ persons: persons })
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    // Show/toggle persons
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({ showPersons: !doesShow })
    }

  render() {
    let persons = null;
    if( this.state.showPersons ) {
        persons = 
                <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.switchHobbyHandler}
                />
    }
    
    return (
        <div className={classes.block}>
            <Cockpit 
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonHandler}
                />
          { persons }
        </div>
    )
  }
}

export default App;
