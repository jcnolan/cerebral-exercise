import React, {Component} from "react"

class Form extends Component {

    constructor(props) {

        super(props)
        const promptText = 'Type here...'

        this.initialState = {
            isActive: false,
            textIn: promptText,
        }
        this.state = this.initialState
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

                <input className="chat-footer-input"
                       type="text"
                       name="textIn"
                       autoComplete="off"
                       value   = {this.getPrompt()}
                       onClick = {this.handleClick}
                       onChange= {this.handleChange}
                />

                <input type="button" className="chat-button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;