import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./searchEngine.css";
interface Props {
  data: any[];
  fetchData: (name: string) => void;
}
interface State {
  textForSearch?: String;
}
class SearchEngine extends Component<Props, State> {
  state = {
    textForSearch: "",
  };
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1024px-Apple_Music_logo.svg.png" />
        </Row>
        <Row className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="inputForm"
            placeholder="   Search your favourite music"
            onChange={(e) =>
              this.setState({ textForSearch: e.currentTarget.value })
            }
          ></input>
          <Button onClick={() => this.props.fetchData(this.state.textForSearch)}>Search</Button>
        </Row>
      </>
    );
  }
}

export default SearchEngine;
