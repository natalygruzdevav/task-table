import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.state = {
            inputValue: 1
        };
};

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
        console.log(this.state.inputValue);
        console.log(this.props.value);
    }
    render(){
        return (
            <input type="text" value={this.props.value} onChange={this.updateInputValue}/>
        )
    }


}