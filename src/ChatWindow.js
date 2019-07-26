import React, { Component } from 'react'
import './css/chatSample.css';

import ChatReadout from "./ChatReadout";
import ChatHeader  from "./ChatHeader";
import ChatFooter  from "./ChatFooter";

class ChatWindow extends Component {

    state = {
        responseData: [],
        questionNum:  1,
        isValid:      true,
        activeQuestion: null,
        v: null,
        t: '',
    }

/*
    constructor(props) {
        super(props)
    }
*/
    handleSubmit = textIn => {

        const responseData = this.state.responseData
        const questionNum  = this.state.questionNum

        var isValid = this.state.isValid

        // Validate Here

        const questionJSON = this.props.questionData[questionNum]
        const validateData = questionJSON.validation

        this.setState({activeQuestion:questionJSON})
        this.setState({v:validateData}); // todo - remove 'v' from state

        var typeType = ''

        switch (typeof validateData) {
            case 'string':
                typeType = "string"; break;

                case 'object':
                typeType = "array";

                isValid = validateData.includes(textIn)

                break;

            case 'boolean':
                typeType = "bool"; break;
            default:
                typeType = "other";
        }

        this.setState({t:typeType}); // todo - remove 'v' from state

        // On success save it

        if (isValid === true) {

            responseData[this.state.questionNum] = textIn
            this.setState({responseData: responseData})

            // todo - save to server side here

            // Set new question number

            this.setState({questionNum: this.state.questionNum + 1})

        } else {

            // alert("Doh!")
        }
        this.setState({isValid:isValid})
    }

    render() {

        return (

            <div className="chat-window">
                <ChatHeader />
                <ChatReadout responseData={this.state.responseData}
                             questionData={this.props.questionData}
                             questionNum={this.state.questionNum}
                />
                <ChatFooter handleSubmit={this.handleSubmit}
                            isValid={this.state.isValid}
                />
            </div>
        )
    }
}

export default ChatWindow