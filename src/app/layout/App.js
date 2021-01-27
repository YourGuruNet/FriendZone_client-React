import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    activities: [],
  };
  componentDidMount() {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      this.setState({
        activities: response.data,
      });
      //console.log(response);
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.activities.map((activity) => {
            return <li key={activity.id}>{activity.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
