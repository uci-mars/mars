import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile_picture from "./images/profile_picture.jpg";
import scrolldown from "./images/scrolldown.svg";
import { Button, Modal, Image } from "react-bootstrap";
import { Particles } from "react-particles-js";
import resume from "./resume/resume.png";
import Tooltip from "@material-ui/core/Tooltip";

import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaClipboardList,
  FaLaptopCode
} from "react-icons/fa";

const particlesOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="profile_header">
        <Row>
          <Col>
            <div className="profile">
              <div className="profile-container">
                <div className="profile-picture-container">
                  <img
                    className="profile_picture"
                    src={profile_picture}
                    alt="Marawin Chheang profile picture"
                  />
                </div>

                <div className="contact-info"
                >
                  <div style={{ margin: "auto" }}>
                    <h1>Marawin Chheang</h1>
                    <p className="e-mail">CHHEANGM@UCI.EDU</p>
                    <p className="tagline">Software Engineer // Graphic Designer</p>

                    <div className="social-tablet">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: "auto",
                            lineHeight: "12px"
                          }}
                        >
                          <Tooltip title="@uci-mars" placement="bottom">
                            <a
                              href="https://github.com/uci-mars"
                              className="social-link social-link-github"
                            >
                              <FaGithub
                                className={"social-logo social-logo-github"}
                              />
                            </a>
                          </Tooltip>


                          <Tooltip title="@mchheang" placement="bottom">
                            <a
                              href="https://www.linkedin.com/in/mchheang/"
                              className="social-link social-link-linkedin"
                            >
                              <FaLinkedinIn
                                className={"social-logo social-logo-linkedin"}
                              />
                            </a>
                          </Tooltip>

                          <Tooltip title="@marsc.dev" placement="bottom">
                            <a
                              href="https://instagram.com/marsc.dev"
                              className="social-link social-link-instagram"
                            >
                              <FaInstagram
                                className={"social-logo social-logo-instagram"}
                              />
                            </a>
                          </Tooltip>
                        </div>
                        </div>

                  
                    <div>
                      <div id="container">
                        <button
                          onClick={this.handleShow}
                          className="learn-more"
                          style={{ margin: "6px 12px" }}
                        >
                          <div className ="circle">
                            <span className ="icon">
                              <FaClipboardList />
                            </span>
                          </div>
                          <p className ="button-text">View Resumé</p>
                        </button>

                        <button
                          onClick={this.props.portfolioButton}
                          className ="learn-more"
                          style={{ margin: "6px 12px" }}
                        >
                          <div className ="circle">
                            <span className="icon">
                              <FaLaptopCode />
                            </span>
                          </div>
                          <p className ="button-text">My Portfolio</p>
                        </button>



                      

                  
                      </div>
                    </div>
                  </div>
                </div>

                <div className="social-desktop">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "auto",
                      lineHeight: "12px"
                    }}
                  >
                    <Tooltip title="@uci-mars" placement="right">
                      <a
                        href="https://github.com/uci-mars"
                        className="social-link social-link-github"
                      >
                        <FaGithub
                          className={"social-logo social-logo-github"}
                        />
                      </a>
                    </Tooltip>

                    <br />

                    <Tooltip title="@mchheang" placement="right">
                      <a
                        href="https://www.linkedin.com/in/mchheang/"
                        className="social-link social-link-linkedin"
                      >
                        <FaLinkedinIn
                          className={"social-logo social-logo-linkedin"}
                        />
                      </a>
                    </Tooltip>

                    <br />
                    <Tooltip title="@marsc.dev" placement="right">
                      <a
                        href="https://instagram.com/marsc.dev"
                        className="social-link social-link-instagram"
                      >
                        <FaInstagram
                          className={"social-logo social-logo-instagram"}
                        />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>

              {/*##########################*/}
              <Modal
                size="lg"
                centered
                show={this.state.show}
                onHide={this.handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Resumé <i>(Updated September 2020)</i>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {" "}
                  <Image src={resume} fluid />{" "}
                </Modal.Body>
                <Modal.Footer>
                  <a
                    href="https://github.com/uci-mars/mars/raw/master/src/resume/MarawinChheang-resume.pdf"
                    download="MarawinChheang-resume.pdf"
                  >
                    <Button variant="info">Download Resumé</Button>
                  </a>
                </Modal.Footer>
              </Modal>
              {/*##########################*/}

              <div
                style={{
                  position: "absolute",
                  bottom: "-10vh",
                  animation: "bounce 3s infinite",
                  left: "50%"
                }}
              >
                <img
                  width="40"
                  height="40"
                  alt=""
                  src={scrolldown}
                  onClick={this.props.scrollDownButton}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Particles param={particlesOptions} style={{ height: "100vh" }} />
      </div>
    );
  }
}

export default Profile;
