import React, { useState } from 'react';
import Persons from '../Components/Persons/Persons'
// import Animal from '../Components/Animal/Animal'
import classes from './App.css';

function App() {

  let [apps, appState] = useState({
    persons: [
      {id: 'asd1', name: 120},
      {id: 'asd2', name: 'Akash'},
      {id: 'asd3', name: 'Poonam'}
    ],
    personsContent: true
  })

  function togglePersons(){
    appState({
      persons: apps.persons,
      personsContent: !apps.personsContent
    })
  }

  function printPerson(index){
    console.log(apps.persons[index].name)
  }

  function deletePerson(index){
    // let persons = apps.persons        // this could cause problem because this will not mutate
    let persons = apps.persons.slice()    // mutably changing the array to avoid any error
    persons.splice(index, 1)
    appState({
      persons: persons,
      personsContent: apps.personsContent
    })
  }

  let personsContent = null
  if(apps.personsContent){
    personsContent = (
      <div>
        <Persons 
        persons={apps.persons}
        printPerson = {printPerson}
        deletePerson={deletePerson}></Persons> 
      </div>
    )
  }

  return (
    <div className={classes.App}>
      <h1>This is React Project</h1>
      <button onClick={togglePersons}>Toggle Persons</button>
      {personsContent}
    </div>
  );
}

export default App;
