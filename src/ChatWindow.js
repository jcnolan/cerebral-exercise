import React, { Component } from 'react'
import './css/chatSample.css';

import ChatReadout from "./ChatReadout";
import ChatHeader  from "./ChatHeader";
import ChatFooter  from "./ChatFooter";

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
                <ChatHeader />
                <ChatReadout linesIn={this.state.lines}/>
                <ChatFooter handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ChatWindow