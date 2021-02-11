import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./searchEngine.css";
interface Props {
  data: [];
}

class Songs extends Component<Props> {
  componentDidMount = async() =>{
   
  }
  render() {
    return (
      <>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Container>
            </Container>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </>
    );
  }
}
export default Songs;
