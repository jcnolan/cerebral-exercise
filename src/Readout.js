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

class Readout extends Component {

    /*
    constructor(props) {

        super(props)
     //   const promptText = 'Type here...'

        this.initialState = {
        //    linesIn: linesIn,
        //    stubOutput: stubOutput
        }
        this.state = this.initialState
    }
*/
    render() {

        if (this.props.linesIn.length > 0)
        {
            return (
                <div className="chat-scroll-readout">
                    <ReadoutBodyTemp lineData={this.props.linesIn}/>
                </div>
            )

        } else {

            return(

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
            )
        }
    }
}

export default Readout;