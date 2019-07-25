import React, { Component } from 'react'
import './css/chatSample.css';
import Form from './Form'

class ChatFooter extends Component {

    // Note: this is just a placeholder class for possible extension - so scope is a tad wonky - todo

    render() {

        return (
            <div className="chat-footer">
                <Form handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}

export default ChatFooter