import React, { Component } from 'react'
import csrImage from './images/live-support-csr.png'

class ChatHeader extends Component {

    // Note: this is just a placeholder class for possible extension - ideally will support multiple CSRs and not be hard-coded
    
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