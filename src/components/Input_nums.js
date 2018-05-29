import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
};

    updateInputValue = (evt) => {
        this.props.onUpdate(Number(evt.target.value), this.props.path);
    }
    render(){
        return (
            <input type="text" value={this.props.value} onChange={this.updateInputValue}/>
        )
    }


}