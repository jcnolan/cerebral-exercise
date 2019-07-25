import React, { Component } from 'react'
import './css/chatSample.css';
import csrImage from './images/live-support-csr.png';


class ChatWindow extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            textIn: 'Type here...',
        }

        this.state = this.initialState
    }

    handleChange = event => {

        const { textIn } = event.target

    //    alert({textIn})

        this.setState({
            [textIn]: textIn,
        })
    }

    submitForm = event => {

        alert("submit was hit")
    }

    render() {

//        const { textIn } = this.state.textIn;
        const { textIn } = this.initialState.textIn;

        return (

            <div className="chat-window">
                <div className="chat-header">

                    <img src={csrImage} height="40" width="40" />
                    <span>Marianne Singer</span>

                </div>
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

                <div className="chat-footer">
                    <form>

                        <input className="chat-footer-input"
                               type="text"
                               name="textIn"
                               autoComplete="off"
                               value={textIn}
                               onChange={this.handleChange}
                        />

                        <input type="button" className="chat-button" value="Submit" onClick={this.submitForm}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatWindow