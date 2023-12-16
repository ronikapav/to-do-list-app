import { Component } from "react";
import Icon from './icon.png'

export class List extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            groceryList: []  
        }
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }

    addItem(input) {
        if (input === '') {
            alert ('Please enter an item')
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList: listArray, userInput: ''})
        }
    }

    crossedWord(event) { 
        const li = event.target;
        li.classList.toggle('crossed');
    }


    deleteItem(index) {
        const listArray = this.state.groceryList;
        listArray.splice(index, 1);
        this.setState({ groceryList: listArray });
        }



    render() {
        return (
            <div>
            <div className="info">
                <div className="input">
                <input 
                placeholder="Enter the positions" 
                type="text" className="input-field"
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
                <button onClick={() => this.addItem(this.state.userInput)} className="submit-button"><span>ADD</span></button>
                </div>
            </div>
            <ul>
                    {this.state.groceryList.map((item, index) =>
                    <li onClick={this.crossedWord} key={index}>
                        <img src={Icon} alt="icon" width='20px'/>
                        {item}<span onClick={() => this.deleteItem(index)} className="delete-btn" title="Delete Task"/></li>
                    )}
            </ul>

            </div>
        )
    }
}