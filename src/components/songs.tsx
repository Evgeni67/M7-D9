import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./searchEngine.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
interface Props {
  data: any[];
  selectSong : (song: string) => void;
}
interface State {
  selectedSong: {};
}
class Songs extends Component<Props> {
  state = {
    selectedSong: {},
  };
  getIt = async () => {
    console.log(this.props.data[0]);
  };
  render() {
    return (
      <>
        <Row>
          <Col
            sm={2}
            className={this.props.data.length > 0 ? "sideColLeft" : "nothing"}
          ></Col>
          <Col sm={8}>
            <Container>
              {this.props.data.map((song) => (
                <Row className="songRow">
                  <Col sm={4} className="nameCol d-flex justify-content-start">
                    <p className="nameSong">{song.title} </p>
                  </Col>
                  <Col sm={2} className="durationCol">
                    {song.artist.name}
                  </Col>
                  <Col sm={2} className="durationCol">
                    {(song.duration / 60).toFixed(0)} :{" "}
                    {song.duration % 60 > 9
                      ? song.duration % 60
                      : "0" + (song.duration % 60)}
                  </Col>
                  <Col sm={2} className="nameCol">
                    <AiFillPlayCircle className="playBtn" />
                  </Col>
                  <Col sm={2} className="detailCol">
                      <Link to="/detailsPage">
                    <CgDetailsMore
                      className="playBtn"
                      onClick={() => this.props.selectSong(song.album.cover_medium)}
                    />{" "}
                    </Link>
                  </Col>
                </Row>
              ))}
              <Row className="lastRow" />
            </Container>
          </Col>
          <Col
            sm={2}
            className={this.props.data.length > 0 ? "sideColRight" : "nothing"}
          ></Col>
        </Row>
      </>
    );
  }
}
export default Songs;
