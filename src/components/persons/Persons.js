import React from 'react'

import Person from './Person/Person'

const persons = (props) => {
    return props.persons.map( (person, index) => {
        return <Person
                    key={person.id}
                    name={person.name}
                    removePerson={() => props.clicked(index)}
                    age={person.age} 
                    changed={(event) => props.changed(event, person.id)} />
        }
    )
}

export default persons