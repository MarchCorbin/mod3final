import React, { Component } from 'react';
import './App.css';
import { getUrls, deleteUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount = async() => {
   await getUrls()
  //  .then(data => console.log(data.urls))
    .then(data => this.setState({urls: data.urls}))
    .catch(err => console.log(err))
  }

  removeCard = (id) => {
    deleteUrl(id)
    const newUrls = this.state.urls.filter((url) => id !== url.id)
    this.setState({urls: newUrls })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={this.state.urls} 
        deleteCard={this.removeCard}
        />
      </main>
    );
  }
}

export default App;
