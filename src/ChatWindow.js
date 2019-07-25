import React, { Component } from 'react'
import './css/chatSample.css';
import csrImage from './images/live-support-csr.png';

import Form from './Form'
import Readout from "./Readout";

class ChatWindow extends Component {

    state = {
        lines: []
    }

    /*
    constructor(props) {
        super(props)
    }
*/
    handleSubmit = textIn => {
        this.setState({lines: [...this.state.lines, textIn]})
    }

    render() {

        return (

            <div className="chat-window">
                <div className="chat-header">

                    <img src={csrImage} alt="" height="40" width="40" />
                    <span>Marianne Singer</span>

                </div>

                <div className="chat-readout">
                    <Readout linesIn={this.state.lines}/>
                </div>

                <div className="chat-footer">
                    <Form handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default ChatWindow