import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import Songs from "./components/songs";
import SearchEngine from "./components/SearchEngine";
import DetailsPage from "./components/detailsPage";
import { AnyMxRecord } from "dns";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  state = {
    data: [],
    currentSong:""
  };
  fetchData = async (name: string) => {
    let response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + name,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    let data = await response.json();
    this.setState({ data: data.data });
    console.log(this.state.data);
  };
  selectSong = (song:{}) =>{
    this.setState({currentSong:song})
  }
  componentDidMount = async () => {};

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            render={(props) => (
              <SearchEngine
                data={this.state.data}
                fetchData={(name) => this.fetchData(name)}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Songs data={this.state.data} selectSong = {(song)=> this.selectSong(song)}/>
            )}
          />
          <Route
            path="/detailsPage"
            exact
            render={(props) => (
              <DetailsPage songURL={this.state.currentSong} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
