import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return <div className={classes.person}>
        My name is 
        <span onClick={props.removePerson}>{props.name}</span> I am {props.age} years old
        <div>{props.children}</div>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
}

export default person;

