import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Ruslan', age: '22', hobby: 'sport' },
            { id: '2', name: 'Zakir', age: '23', hobby: 'photography' },
            { id: '3', name: 'Timur', age: '24', hobby: 'fapping on VAG' },
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
        person.hobby = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({ persons: persons });
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
        const styles = {
            backgroundColor: 'lightgreen',
            color: 'white',
            font: 'inherit',
            border: '1px solid',
            padding: '8px',
            cursor: 'pointer'
        }
        let persons = null;
        if( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.persons.map( ( person, index ) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            hobby={person.hobby}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.switchHobbyHandler(event, person.id)}/>
                    })}
                </div>
            )
            styles.backgroundColor = 'red'
        }
    let classes = []
      if(this.state.persons.length <= 2) {
          classes.push('red')
      }

      if(this.state.persons.length <= 1) {
          classes.push('bold')
      }
    return (
        <div className="block">
          <h1>Our Team</h1>
            <p className={classes.join(' ')}>Look in future</p>
            <button style={styles} onClick={this.togglePersonHandler}>Show</button>
            { persons }
        </div>
    )
  }
}

export default App;
