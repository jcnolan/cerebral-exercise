import React, { Component } from 'react'
import ChatForm from './ChatForm'

class ChatFooter extends Component {

    // Note: this is just a placeholder class for possible extension

    render() {

        return (
            <div className="chat-footer">
                <ChatForm handleSubmit={this.props.handleSubmit} isValid={this.props.isValid}/>
            </div>
        )
    }
}

export default ChatFooter