import React, {Component} from "react"
import './css/chatSample.css';
//import renderHTML from 'react-render-html';

/* todo - this used to work - why does it fail now?
const DumpResponses = props => {

    const rows = props.responseData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{row}</td>
            </tr>
        )
    })

    return (
        <table><tbody>{rows}</tbody></table>
    )
}
*/

class ChatReadout extends Component {

/*
    constructor(props) {

        super(props)
     //   const promptText = 'Type here...'

        this.initialState = {
            question: null
        }
        this.state = this.initialState
    }

    renderItem = (idx) => {
        const outStr = JSON.stringify(this.props.questionData[idx], null, 2)
        return (<pre>{outStr}</pre>)
    }
*/

    componentDidMount() {
      // todo - add code here to scroll div to the bottom
    }

    getQuestionText = (idx) => {
        const myQuestionJSON = this.props.questionData[idx]
        const myQuestionText = (myQuestionJSON === undefined) ? 'Loading...' : myQuestionJSON.question + " (" + myQuestionJSON.id + ")"
        return myQuestionText
    }

    getStubText = () => {
        return (
            <div className="chat-readout">
                <div className="chat-scroll-readout">

                    <div className="chat-name-user">You:</div>
                    <div className="chat-text">Hi there my name is John</div>
                    <div className="chat-text-spacer"></div>

                    <div className="chat-name-csr">Marianne:</div>
                    <div className="chat-text">Hi John, how can I help you?</div>
                    <div className="chat-text-spacer"></div>

                    <div className="chat-name-user">You:</div>
                    <div className="chat-text">Well, I need some information</div>
                    <div className="chat-text-spacer"></div>

                </div>
            </div>
        )
    }

    render() {

       if (this.props.responseData.length > 0 && false)
        {
            const dumpResponses = () => {

                const rows = this.props.responseData.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{row}</td>
                        </tr>
                    )
                })

                return (
                    <table><tbody>{rows}</tbody></table>
                )
            }

            //const {myProps} = this.props
            return (
                <div className="chat-readout">
                    <div className="chat-scroll-readout">
                        {dumpResponses()}
                    </div>
                </div>
            )

        } else {

            if (true) { // todo - This is a hard-code binary path - remove before prod release

                const chatTranscript = (responseData, questionData, questionNum) => {

                    const generateResponse = (csrName, myQuestionText) => {
                        return(
                            <div>
                                <div className="chat-name-csr">{csrName}:</div>
                                <div className="chat-text">{myQuestionText}</div>
                                <div className="chat-text-spacer"></div>
                            </div>
                        )
                    }

                    if (true) {

                        // For each response...
                            // Print associated question
                            // Print associated response

                        const rows = responseData.map((row, index) => {

                            const csrName  = 'Marianne'
                            const userName = 'You'
                            const myQuestionText = this.getQuestionText(index)
                            const myResponseText = row

                            return (
                                <div>
                                    <div className="chat-name-csr">{csrName}:</div>
                                    <div className="chat-text">{myQuestionText}</div>
                                    <div className="chat-text-spacer" />
                                    <div className="chat-name-user">{userName}:</div>
                                    <div className="chat-text">{myResponseText}</div>
                                    <div className="chat-text-spacer" />
                                </div>
                            )
                        })

                        const csrName  = 'Marianne'
                        const myQuestionText = this.getQuestionText(this.props.questionNum)

                        const prompt = () => {

                            return (
                                <div>
                                    <div className="chat-name-csr">{csrName}:</div>
                                    <div className="chat-text">{myQuestionText}</div>
                                    <div className="chat-text-spacer" />
                                </div>
                            )
                        }

                        // For last response...
                        // determine path from response...
                        // Prompt questionnum from path

                        return (
                            <div className="chat-scroll-readout">
                                {rows}
                                {prompt()}
                            </div>
                        )

                    } else {

                        const csrName = "Marianne"
                        const myQuestionText = this.getQuestionText(questionNum)

                        return (
                            <div className="chat-scroll-readout">
                                {generateResponse(csrName, myQuestionText)}
                            </div>
                        )
                    }
                }

                return (
                    <div className="chat-readout">
                        {chatTranscript(this.props.responseData, this.props.questionData, this.props.questionNum)}
                    </div>
                )

            } else if (true) {

                const {questionNum} = this.props
                const csrName = "Marianne"
                const myQuestionText = this.getQuestionText(questionNum)

                return (
                    <div className="chat-readout">
                        <div className="chat-scroll-readout">

                            <div className="chat-name-csr">{csrName}:</div>
                            <div className="chat-text">{myQuestionText}</div>
                            <div className="chat-text-spacer"></div>

                        </div>
                    </div>
                )

            } else { // todo - Here we hit a test only stub / optional path
                return (this.getStubText())
            }

        }
    }
}

export default ChatReadout;