import React, {Component} from 'react';
import classes from './App.css';
import Person from '../components/persons/Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: 'sdf', name: "john", age: "30"},
            {id: 'gff', name: "terry", age: "22"},
            {id: 'sss', name: "paula", age: "27"}
        ],
        showPersons: false
    }

    personHandler = (newName) => {
        // console.log('this was clicked')
        this.setState({
            persons: [
                { name: "john depp", age: "30" },
                { name: newName, age: "22" },
                { name: "paula", age: "28" }
            ]            
        })
    }

    nameChangeHandler = (event, personId) => {
        let persons = [...this.state.persons]
        
        let personIndex = persons.findIndex((p) => {
            return p.id === personId
        })

        persons[personIndex].name = event.target.value

        this.setState({
            persons: persons
        })        
    }

    showPersons = () => {
        // const showSection = this.state.showPersons
        this.setState({ showPersons: !this.state.showPersons})

        // return showSection
    }

    removePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]

        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    assignedClasses = []

    render() {

        let persons = null
        let btnClass = ''

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map( (person, index) => {
                        return <Person
                                    key={person.id}
                                    name={person.name}
                                    removePerson={() => this.removePersonHandler(index)}
                                    age={person.age} 
                                    changed={(event) => this.nameChangeHandler(event, person.id)} />
                        }
                    )}
                </div>
            )

            btnClass = classes.red

        }

        
        if (this.state.persons.length === 2) {
            this.assignedClasses.push(classes.red)
        }

        if (this.state.persons.length === 1) {
            this.assignedClasses.push(classes.bold)
        }

        return (
            <div className={classes.App}>
                <header className="App-header">
                    <div>
                        Hi, I am a react app 2.
                    </div>
                </header>
                <p className={this.assignedClasses.join(' ')}>this is really working</p>
                
                <button className={btnClass} onClick={this.showPersons}>click me</button>
                {persons}
            </div>

            // React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, I am a react app 2.'))
        )
    }
}

export default App;
