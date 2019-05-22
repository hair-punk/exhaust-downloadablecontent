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
        <h2>Still rendering React App!</h2>
      </div>
    )
  }
};
  // let App = () => {
//   return (
//     <div>
//       <h2>Rendering React App!</h2>
//     </div>
//   )
// };

ReactDOM.render(< App />, document.getElementById('app'));