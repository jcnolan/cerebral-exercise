import React, {Component} from "react"

class ChatReadout extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount  = () => {  this.scrollToBottom();  }
    componentDidUpdate = () => {  this.scrollToBottom(); }

    getQuestionText = (idx) => {
        const myQuestionJSON = this.props.questionData[idx]
        const myQuestionText = (myQuestionJSON === undefined) ? 'Loading...' : myQuestionJSON.question
        return myQuestionText
    }

    render() {

        if (true) { // todo - This is a hard-code binary path a common testing strategy I use in development - remove before prod release

            const chatTranscript = (responseData, questionData, questionNum) => {

                const generateResponse = (csrName, myQuestionText) => {
                    return(
                        <div>
                            <div className="chat-name-csr">{csrName}:</div>
                            <div className="chat-text">{myQuestionText}</div>
                            <div className="chat-text-spacer"></div>

                            <div style={{ float:"left", clear: "both" }}
                                 ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </div>
                    )
                }

                 // For each response...

                    // Print associated question via CSR
                    // Print associated response from user

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
                // Prompt new question via questionNum

                return (
                    <div className="chat-scroll-readout">
                        {rows}
                        {prompt()}
                        <div style={{ float:"left", clear: "both" }}
                             ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                )
            }

            return (
                <div className="chat-readout">
                    {chatTranscript(this.props.responseData, this.props.questionData, this.props.questionNum)}
                </div>
            )

        } else { // todo - Here we hit a test only stub / optional path
            return (this.getReadoutStubText())
        }
    }

    getReadoutStubText = () => {
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

                    <div style={{ float:"left", clear: "both" }}
                         ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatReadout;