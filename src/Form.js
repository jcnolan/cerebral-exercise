import React, {Component} from "react"

class Form extends Component {

    constructor(props) {

        super(props)
        const promptText = 'Type here...'

        this.initialState = {
            textIn: promptText
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

        if (event.target.value === this.initialState.textIn) {

            this.setState({
                textIn: ""
            })
        }
    }

    submitForm = () => {

        if (this.state.textIn !== this.initialState.textIn && this.state.textIn !== '') {

            this.props.handleSubmit(this.state.textIn)
            this.setState(this.initialState)
        }
    }

    render(){

    //    const { textIn } = this.state

        return(
            <form>

                <input className="chat-footer-input"
                       type="text"
                       name="textIn"
                       autoComplete="off"
                       value   = {this.state.textIn}
                       onClick = {this.handleClick}
                       onChange= {this.handleChange}
                />

                <input type="button" className="chat-button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;