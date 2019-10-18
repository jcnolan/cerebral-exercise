import React, {Component} from "react"

class ChatForm extends Component {
    
    // todo - this got a little messy in development and could probably use a little refactoring

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

        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    getErrPrompt = (idx) => {
        const myQuestionJSON = this.props.questionData[idx]
        const myQuestionText = (myQuestionJSON === undefined) ? this.initialState.textIn :
            (myQuestionJSON.errprompt !== undefined) ? myQuestionJSON.errprompt : this.initialState.textIn
        return myQuestionText
    }

    handleKeyPress(e) {

        if (this.state.isActive !== true) {this.setStateActive()}
        if (e.keyCode === 13) {
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
            this.setStateActive()
        }
    }

    setStateActive = () => {

        this.setState({ textIn: "", isActive: true })
    }

    submitForm = () => {

        if (this.state.textIn !== this.initialState.textIn && this.state.textIn !== '') {

            // Check input and update prompt window with error message or prompt for next value

            // todo - this is a nasty hack to make "terminal behaviour" in query a bit better
            //        would be preferable to be utilizing state somehow rather than passing

            // todo - could also be fun to have the submit button become a refresh button here if last line is true

            const [nextQuestionNum, isValid] = this.props.handleSubmit(this.state.textIn)
            if (isValid === true && nextQuestionNum !== 0) {this.setState(this.initialState)}
            else { this.setState({ textIn: this.getErrPrompt(nextQuestionNum), isActive: isValid }) }
        }
    }

    getPrompt = () => {

        const errPrompt = this.getErrPrompt(this.props.questionNum)

        const prompt = (this.state.isActive !== true ) ? ((this.props.isValid  === true) ? this.initialState.textIn : errPrompt) : this.state.textIn
        return prompt
    }

    render(){

        return(
            <form>

                <input className    = "chat-footer-input"
                       type         = "text"
                       name         = "textIn"
                       autoComplete = "off"
                       spellCheck   = "false"
                       value        = {this.getPrompt()}
                       onClick      = {this.handleClick}
                       onChange     = {this.handleChange}
                       onKeyDown    = {this.handleKeyPress}
                />

                <input type="button" className="chat-button" name="submitButton" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default ChatForm;