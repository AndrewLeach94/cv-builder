import React, { Component } from "react";

export class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    render() {
        const { name, placeholder } = this.props;
        return (
        <label>{name}
            <input type="text" className="input-text" placeholder={placeholder} ></input>
        </label>
    )}


};