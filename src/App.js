import React, { Component } from 'react';
import './App.css';
import './css/chatSample.css';
import ChatWindow from './ChatWindow'

import Api from './archive/Api'

class App extends Component {

    state = {
      data: [], // todo - this one's not needed (I think... or if we do filter we use this one instead)
      dataDict: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {

      // todo - Loads JSON Data, realatively dumb stub put in place for quick development.  Perhaps should move to a class?

        const url = 'http://jcnolan.com/samples/cerebral/dummyApi.php'

        fetch(url)
            .then(result => result.json())
            .then(result => {

                this.setState({ data: result})

                var resultDict = [];

                result.forEach(function(element) {
                    var idx = (element.id === -1) ? 0 : element.id
                    resultDict[idx] = element
                });

                this.setState({
                    dataDict: resultDict
                })
            })
    }

    render() {

      const {characters}  = this.state
      const {dataDict}       = this.state
      const {questionNum} = this.state

      return (
          <div className="container">
            <div className="chat-container">
              <ChatWindow characterData={characters} questionData={dataDict}/>
            </div>
          </div>
      )
    }

}

export default App;
