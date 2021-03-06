import React, { Component } from 'react';


export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term : ''} ; 
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        this.setState({term : ''});
    }

    render(){
        return (
            <form onChange={this.onFormSubmit} className='input-group'>
                <input 
                placeholder='Search for a movie'
                className = 'form-control'
                value = {this.state.term}
                onChange = {this.onInputChange}
                />
                <span className='input-group-btn' >
                    <button type='submit' className='btn btn-secondary'>Search</button>
                </span>
            </form>
        );
    }
}