import React, { Component } from 'react'
import './css/chatSample.css';

import ChatReadout from "./ChatReadout";
import ChatHeader  from "./ChatHeader";
import ChatFooter  from "./ChatFooter";

class ChatWindow extends Component {

    state = {
        responseData: [],
        questionData: this.props.questionData,
        questionNum: 1
    }

/*
    constructor(props) {
        super(props)
    }
*/
    handleSubmit = textIn => {

        var foo = this.state.responseData
        foo[this.state.questionNum] = textIn
        this.setState({responseData: foo})

//    this.setState({responseData: [...this.state.responseData, textIn]})
//    this.state.responseData[this.state.questionNum] = textIn
        this.setState({questionNum: this.state.questionNum+2})
    }

    render() {

        return (

            <div className="chat-window">
                <ChatHeader />
                <ChatReadout responseData={this.state.responseData} questionData={this.props.questionData} questionNum={this.state.questionNum}/>
                <ChatFooter handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ChatWindow