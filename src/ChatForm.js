import React, {Component} from "react"

class ChatForm extends Component {
    
    // todo - this got a little messy in development and could probably use a little refactoring
    // todo - enhance to allow for error message to be passed in as alternative to "No soup for you!!!" ideally based on expected responses

    constructor(props) {

        super(props)

        // General initialization

        const promptText = 'Type here...'

        this.initialState = {
            isActive: false,
            textIn: promptText,
        }
        this.state = this.initialState

        // Code to catch return on enter and submit

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        if (e.keyCode == 13) {
            this.submitForm()
            e.preventDefault();
        }
    }

    handleChange = event => {

        const inputName = event.target.value
        this.setState({
            textIn: inputName
        })
    }

    handleClick = event => {

        if (this.getPrompt() === event.target.value) {

            this.setState({ textIn: "", isActive: true })
        }
    }

    submitForm = () => {

        if (this.state.textIn !== this.initialState.textIn && this.state.textIn !== '') {

            this.props.handleSubmit(this.state.textIn)
            this.setState(this.initialState)
        }
    }

    getPrompt = () => {

        const prompt = (this.state.isActive !== true ) ? ((this.props.isValid  === true) ? this.initialState.textIn : 'No soup for you!!!') : this.state.textIn
        return prompt
    }

    render(){

        return(
            <form>

                <input className    = "chat-footer-input"
                       type         = "text"
                       name         = "textIn"
                       autoComplete = "off"
                       value        = {this.getPrompt()}
                       onClick      = {this.handleClick}
                       onChange     = {this.handleChange}
                       onKeyDown    = {this.handleKeyPress}
                />

                <input type="button" className="chat-button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default ChatForm;