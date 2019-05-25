import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    var id = Math.floor(Math.random() * 100);
    $.get(`http://localhost:3003/games/${id}`, (data) => {
      console.log(data);
      // this.setState({ });
    });
  }

  render() {
    return (
      <div>
        <h2>Rendering my React App!</h2>
      </div>
    )
  }
};

ReactDOM.render(< App />, document.getElementById('app') || document.createElement('div')); // createElement for testing purposes

export default App;