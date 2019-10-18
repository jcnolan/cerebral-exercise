import React, { Component } from 'react';
import './App.css';
import './css/chatSample.css';
import ChatWindow from './ChatWindow';

class App extends Component {

    state = {
      data: [], // todo - this one's not needed - mostly just a debug (I think... or if we do filter we use this one instead)
      dataDict: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {

      // todo - Loads JSON Data, relatively dumb stub put in place for quick development.  Perhaps should move to a class?

        const url = 'http://jcnolan.com/samples/onboarding/static/api/dummyApi.php'

        fetch(url)
            .then(result => result.json())
            .then(result => {

                this.setState({ data: result}); // Only reference is here, I believe

                var resultDict = [];

                result.forEach(function(element) {
                    var idx = (element.id === -1) ? 0 : element.id
                    if (element.validation instanceof Array) {
                        element.errprompt = "Please enter: "+element.validation.join(" / ")
                    } else if (typeof element.validation === "boolean" && element.validation === false) {
                        element.errprompt = "Refresh to restart..."
                    }
                    resultDict[idx] = element
                });

                this.setState({
                    dataDict: resultDict
                })
            })
    }

    render() {

      const {characters}  = this.state
      const {dataDict}    = this.state

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
