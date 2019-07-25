import React, {Component} from "react"
import './css/chatSample.css';
//import renderHTML from 'react-render-html';

const ReadoutBodyTemp = props => {

    const rows = props.lineData.map((row, index) => {
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
    getQuestionText = (idx) => {
        const myQuestionJSON = this.props.questionData[idx]
        const myQuestionText = (myQuestionJSON === undefined) ? 'Loading...' : myQuestionJSON.question
        return myQuestionText
    }

    getStubText = () => {
        return (
            <div className="chat-readout">
                <div className="chat-scroll-readout">

                    <div className="chat-name-user">You:</div>
                    <div className="chat-text">Hi there my name is Jhon</div>
                    <div className="chat-text-spacer"></div>

                    <div className="chat-name-csr">Marianne:</div>
                    <div className="chat-text">Hi Jhon, how can I help you?</div>
                    <div className="chat-text-spacer"></div>

                    <div className="chat-name-user">You:</div>
                    <div className="chat-text">Well, I need some information</div>
                    <div className="chat-text-spacer"></div>

                </div>
            </div>
        )
    }

    render() {

        const csrName = "Marianne"
        const idx = 8

        if (this.props.linesIn.length > 0)
        {
            return (
                <div className="chat-readout">
                    <div className="chat-scroll-readout">
                        <ReadoutBodyTemp lineData={this.props.linesIn}/>
                    </div>
                </div>
            )

        } else {

            const myQuestionJSON = this.props.questionData[idx]
            const myQuestionText = this.getQuestionText(idx)

            if (true) { // todo - This is a hard-code binary path - remove before prod release

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