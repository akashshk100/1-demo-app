import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'

const Person = (props) => {

    const [person, personState] = useState({
        preys: 'burger'
    })

    function clickHandler(){
        personState({
            preys: 'pizza',
            showContent: person.showContent
        })
    }

    function printHandler(){
        props.printPerson()
    }

    function deleteHandler(){
        props.deletePerson()
    }

    return(
        <div className={classes.content}>
            <h1>This is person function Component</h1>
            <h2>Designed by {props.name}</h2>
            <h3>The person preys on {person.preys}</h3>
            <button onClick={clickHandler}>change</button>
            <button onClick={printHandler}>call printer</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

Person.propTypes = {
    name: PropTypes.string,
    deletePerson: PropTypes.func,
    printPerson: PropTypes.func
}

/*

The main purpose of having proptypes is that if working in a team or when exporting your components as a package 
the person who is going to use your application should not misuse the component and break it. For now there isn't
a big problem even if name prop is passed as a number instead of string, but if we perform some kind of string
manipulation on the name then passing it as number is going to crash the application.

PropTypes is completely optional, we can use it for optimization purposes but they are not compulsory. Hence they are
provided as a seperate library instead of built-in feature.

*/

export default Person