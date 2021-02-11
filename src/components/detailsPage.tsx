import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./searchEngine.css";
interface Props {
  songURL: string;
}

class DetailsPage extends Component<Props> {

  render() {
    return (
      <>
      <img src = {this.props.songURL} />
      </>
    )
  }
}
export default DetailsPage