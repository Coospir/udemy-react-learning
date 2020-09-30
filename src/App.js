import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    state = {
        person: [
            { name: 'Ruslan', age: '22', hobby: 'and my hobby is sport' },
            { name: 'Zakir', age: '23', hobby: 'and my hobby is photography' },
            { name: 'Timur', age: '24', hobby: 'and my hobby is fapping on VAG' },
        ]
    }

    switchTimeHandler = (newAge) => {
        this.setState({
            person: [
                { name: 'Ruslan in future', age: newAge, hobby: 'and my hobby is Racing' },
                { name: 'Zakir in future', age: '30', hobby: 'and my hobby is Dog`s Teaching' },
                { name: 'Timur in future', age: '35', hobby: 'and my hobby is fapping on BMW :D' },
            ]
        });
    }

  render() {
    return (
        <div className=".block">
          <h1>Our Team</h1>
            <Person
                name={this.state.person[0].name}
                age={this.state.person[0].age}> {this.state.person[0].hobby} </Person>
            <Person
                name={this.state.person[1].name}
                age={this.state.person[1].age}
                click={this.switchTimeHandler.bind(this, '23')}> {this.state.person[1].hobby} </Person>
            <Person
                name={this.state.person[2].name}
                age={this.state.person[2].age}> {this.state.person[2].hobby} </Person>
            {/*<label>New Age for Ruslan:</label>
            <input className={"nAge"} type={"number"} />*/}
            <button onClick={this.switchTimeHandler.bind(this, '29')}>Go to the future</button>
        </div>
    )
  }
}

export default App;
