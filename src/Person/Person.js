import React from 'react';
import './Person.css';
import radium from 'radium'

const person = (props) => {

    const personStyle = {
        "@media (min-width: 500px)": {
            width: '80%'
        }
    }

    return <div className="person" style={personStyle}>
        My name is 
        <span onClick={props.removePerson}>{props.name}</span> I am {props.age} years old
        <div>{props.children}</div>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
}

export default radium(person);

