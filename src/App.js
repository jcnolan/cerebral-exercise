import React, { Component } from 'react';
import './App.css';
import './css/chatSample.css';
import ChatWindow from './ChatWindow'

import Api from './Api'

class App extends Component {

  state = {
    characters: [],
    data: [],
    dataA: [],
  }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {

        //   const url  = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        const url2 = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Beatles&format=json&origin=*'
        const url3 = 'http://jcnolan.com/samples/cerebral/dummyApi.php'

        fetch(url3)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })

                var resultA = [];

                result.forEach(function(element) {
                    var idx = (element.id === -1) ? 0 : element.id
                    resultA[idx] = element
                });

                this.setState({
                    dataA: resultA
                })

            })
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
      const {dataA}      = this.state

      return (
          <div className="container">
            <div className="chat-container">
              <ChatWindow characterData={characters} questionData={dataA}/>
            </div>
          </div>
      )
  }

}

export default App;
