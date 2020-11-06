import React, {Component} from 'react'

class Animal extends Component{
    
    state = {
        preys: 'elephant',
        showContent: false
    }

    buttonClickHandler = () => {
        // DO NOT DO THIS WAY: this.state.preys = 'monkey'
        this.setState({
            preys: 'dear'
        })
    }

    printHandler = (name) => {
        // this.props.printer()
        console.log(name)
    }

    textChangeHandler = (event) => {
        this.setState({
            preys: event.target.value
        })
    }

    toggleAnimalContent = () =>{
        this.setState({showContent: !this.state.showContent})
    }

    render() {

        let animalContent = null

        if(this.state.showContent){
            animalContent =  (<div>
                <h1>This is Animal Class Component</h1>
                <h2>Name of the animal is {this.props.name} {this.i}</h2>
                <h3>It's prey is {this.state.preys}</h3>
                <input type="text" onChange={this.textChangeHandler} />
                <button onClick={this.buttonClickHandler}>Change</button>                       {/*passing function reference on onClick*/}       
                <button onClick={ () => {this.printHandler("Akash")} }>call printer</button>        {/*passing anonymous function on onClick that calls our dedicated function eventually*/}
            </div>);
        }
        return (
            <div>
                <button onClick={this.toggleAnimalContent}>Toggle Animal</button>
                {animalContent}
            </div>   
        )
    }
}

export default Animal;
