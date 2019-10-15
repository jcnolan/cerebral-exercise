import React, { Component } from 'react'

import ChatReadout from "./ChatReadout";
import ChatHeader  from "./ChatHeader";
import ChatFooter  from "./ChatFooter";

class ChatWindow extends Component {

    state = {
        responseData:   [],
        questionNum:    1,
        isValid:        true,
        activeQuestion: null,
    }

    handleSubmit = textIn => {

        const responseData = this.state.responseData
        const questionNum  = this.state.questionNum

        var isValid = this.state.isValid

        // Validate Here

        const questionJSON  = this.props.questionData[questionNum]
        const validateData  = questionJSON.validation
        const validatePaths = questionJSON.paths

        this.setState({activeQuestion:questionJSON})

        var typeType = ''

        var nextQuestionNum = this.state.questionNum

        switch (typeof validateData) {

            case 'string':

                typeType = "string";
                // regex

                isValid = textIn.match(validateData) !== null
                if (isValid) {
                    nextQuestionNum = validatePaths
                }
                break;

            case 'object':

                // array of string options

                typeType = "array";
                isValid = validateData.includes(textIn.toLowerCase())

                if (isValid) {
                    nextQuestionNum = (typeof validatePaths === 'object') ? validatePaths[textIn.toLowerCase()] : validatePaths
                }

                break;

            case 'boolean':

                // true = valid, false = stop asking

                typeType = "bool";
                isValid = validateData
                nextQuestionNum = isValid ? validatePaths : -1;
                break;

            default:
                typeType = "other";  // Should never happen!
        }

        // On success save it

        if (isValid === true) {

            // todo - odd hack mapping -1 into 0, would be better w/a flag or data structure change

            if (nextQuestionNum === -1) {nextQuestionNum=0}

            // Save new response in responseData

            responseData[this.state.questionNum] = textIn
            this.setState({responseData: responseData})

            // todo - save to server side here

            {
                // No code yet for saving to server
            }

            // Set new question number

            this.setState({questionNum: nextQuestionNum})

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