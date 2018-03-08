import React, { Component } from 'react';       // Add "{Component}" to the import so we dont need to write React.Component when creating a class. 

class SearchBar extends Component {             //Use a class based component when we want to have the concept of state in our component.  (keeps track of itself in some way) 
    constructor(props){
        super(props);

        this.state = { term: '' };              //only inside the constructor method is where we update state as "this.state = {};"
    }

    render() {
        return(
            <div className='search-bar'>
                <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />       
            </div>
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//onChange is a special property in React.                                                                        
//Always initiate a new state with "this.setState"

//Use onInputChange or handleEvent() to name your event handler function. The argument should be named "event" or "e".
//The even handler is a function that runs whenever the event occurs.
// We pass the event handler to the element we want to monitor for events.

export default SearchBar;                       //Export the component because each piece is siloed from each other. 
