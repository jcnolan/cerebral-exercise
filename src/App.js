import React, { Component } from 'react';
import './App.css';
import './css/chatSample.css';
import ChatWindow from './ChatWindow'

class App extends Component {


  state = {
    characters: []
  }

/*
  removeCharacter = index => {

    const {characters} = this.state

    this.setState({
      characters: characters.filter((character,i)=>{
        return i !== index
      }),
    })
  }


  handleSubmit = character => {
    this.setState({characters: [...this.state.characters,character]})
  }
*/

  render() {

   const {characters} = this.state

    return (
        <div className="container">
          <div className="chat-container">
            <ChatWindow characterData={characters}/>
          </div>
        </div>
    )
  }

}

export default App;
