import React, { Component } from 'react'
import './css/chatSample.css';
import csrImage from './images/live-support-csr.png'

class ChatHeader extends Component {

    render() {

        return (
            <div className="chat-header">

                <img src={csrImage} alt="" height="40" width="40" />
                <span>Marianne Singer</span>

            </div>
        )
    }
}

export default ChatHeader