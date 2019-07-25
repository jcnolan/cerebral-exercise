import React, { Component } from 'react'

class Api extends Component {
    state = {
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

    render() {
/*
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })
        return (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>)
*/
        return (<div>&nbsp;</div>); // todo - designed as stub to allow for more complex API use - perhaps should not be a class / render at all?

    }

}

export default Api