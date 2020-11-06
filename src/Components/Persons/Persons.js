import React , {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{
    render(){
        let styles = {
            backgroundColor: "red"
        }

        return (
            <div>
                {this.props.persons.map( (person, index) => {
                    return(
                    <Person 
                    style={styles}
                    name={person.name} 
                    key={person.id}
                    printPerson ={() => {this.props.printPerson(index)}}
                    deletePerson = {() => {this.props.deletePerson(index)}}
                    ></Person>
                    )
                })}
            </div>
        )
    }
}

export default Persons