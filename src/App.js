import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    state = {
        person: [
            { name: 'Ruslan', age: '22', hobby: 'sport' },
            { name: 'Zakir', age: '23', hobby: 'photography' },
            { name: 'Timur', age: '24', hobby: 'fapping on VAG' },
        ],
        showPersons: false
    }

    // Look in future
    switchTimeHandler = (newAge) => {
        this.setState({
            person: [
                { name: 'Ruslan in future', age: newAge, hobby: 'Racing' },
                { name: 'Zakir in future', age: '30', hobby: 'Dog`s Teaching' },
                { name: 'Timur in future', age: '35', hobby: 'fapping on BMW :D' },
            ]
        });
    }

    // Edit hobby
    switchHobbyHandler = ( event ) => {
        this.setState({
            person: [
                { name: 'Ruslan in future', age: '22', hobby: event.target.value },
                { name: 'Zakir in future', age: '30', hobby: 'Dog`s Teaching' },
                { name: 'Timur in future', age: '35', hobby: 'fapping on BMW :D' },
            ]
        });
    }

    // Show/toggle persons
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({ showPersons: !doesShow })
    }

  render() {
        let persons = null;
        if( this.state.showPersons ) {
            persons = (
                <div>
                    <Person
                        name={this.state.person[0].name}
                        age={this.state.person[0].age}
                        hobby={this.state.person[0].hobby} changed={this.switchHobbyHandler}> My hobby is: {this.state.person[0].hobby} </Person>
                    <Person
                        name={this.state.person[1].name}
                        age={this.state.person[1].age}
                        hobby={this.state.person[1].hobby}
                        click={this.switchTimeHandler.bind(this, '23')}> My hobby is:  {this.state.person[1].hobby} </Person>
                    <Person
                        name={this.state.person[2].name}
                        age={this.state.person[2].age}
                        hobby={this.state.person[2].hobby} > My hobby is:  {this.state.person[2].hobby} </Person>
                </div>
            )
        }
    return (
        <div className=".block">
          <h1>Our Team</h1>
            <button onClick={this.togglePersonHandler}>Toggle</button>
            { persons }
        </div>
    )
  }
}

export default App;
