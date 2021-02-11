import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import Songs from "./components/songs";
import SearchEngine from "./components/SearchEngine";
import { AnyMxRecord } from "dns";

class App extends Component {
  state = {
    data: [],
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
    console.log( this.state.data);
  };
  componentDidMount = async () => {};

  render() {
    return (
      <div className="App">
        <SearchEngine
          data={this.state.data}
          fetchData={(name) => this.fetchData(name)}
        />
        <Songs data={this.state.data} />
      </div>
    );
  }
}

export default App;
