import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      }) 
      
  }

  render() {
    const {items, isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } 
      return (
        <ul>
          {items.map(item => {
            return <li key={item.id}> Name: {item.name}  </li>
          })}
        </ul>
      );
    
  }
}

export default App;
