import React, { Component } from 'react'

class Api extends Component {
    
    state = {
        data: [],
        dataA: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {

        // todo - Loads JSON Data, realatively dumb stub put in place for quick development

        const url = 'http://jcnolan.com/samples/cerebral/dummyApi.php'

        fetch(url)
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
                    dataDict: resultA
                })

            })
    }

    render() {
        return null; 
    }

}

export default Api