import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from '@material-ui/core/Chip';
import profile_picture from "./images/profile_picture.jpg"
import nus from "./images/nus.png"
import uci from "./images/uci.png"
import scrolldown from "./images/scrolldown.svg"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Particles } from "react-particles-js"
import asml from "./images/asml.png"
import wics from "./images/wics.png"
import uci_som from "./images/uci_som.jpg"
import nussteps from "./images/nussteps.png"
import resume from "./resume/resume.png"
import Image from "react-bootstrap/Image"

import { FaLinkedinIn } from "react-icons/fa"
import { FaCode, FaInstagram, FaReact, FaPython, FaGithub, FaHtml5, FaJs, FaJava, FaCss3Alt } from "react-icons/fa"
import { DiAndroid, DiTerminal, DiGoogleCloudPlatform } from "react-icons/di"
import PortfolioContainer from "./PortfolioContainer";


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

const skill_logo = {
    'margin-left':'12px'
};


export default class Home extends Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            show: false,
        };
        this.myDivToFocus = React.createRef()
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    };

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        return (
            <Fragment>
                <div className="profile_header" >
                    <Row>
                    <Col>
                            <div className="profile test" >
                                <img className="profile_picture test" src={profile_picture} alt="Logo"/>

                                <div className="profile_text test">

                                    <h1>Marawin Chheang</h1>
                                    <p>Software Engineer // Graphic Designer</p>
                                    <div style={{'margin-down': '10px'}}>
                                        <a href="https://github.com/uci-mars" className="social-link">
                                            <FaGithub className={'social-logo'}/>
                                        </a>

                                        <a href="https://www.linkedin.com/in/mchheang/" className="social-link">
                                            <FaLinkedinIn className={'social-logo'}/>
                                        </a>

                                        <a href="https://instagram.com/maralose" className="social-link">
                                            <FaInstagram className={'social-logo'}/>
                                        </a>
                                    </div>
                                    <br/>
                                    <Button variant="info" onClick={this.handleShow}>View Resumé</Button>
                                </div>

                                {/*##########################*/}
                                <Modal size="lg" centered show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Resumé <i>(Updated Apr 2019)</i></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> <Image src={resume} fluid /> </Modal.Body>
                                    <Modal.Footer>
                                        <a href="./resume/MarawinChheang-resume.pdf" download="MarawinChheang-resume.pdf">
                                            <Button variant="info" onClick={this.handleClose}>
                                                Download Resumé
                                            </Button>
                                        </a>
                                    </Modal.Footer>
                                </Modal>
                                {/*##########################*/}

                                <div className="downArrow bounce">
                                    <img width="40" height="40" alt=""
                                         src={scrolldown} onClick={this.handleOnClick}/>
                                </div>
                            </div>
                            <Particles param={particlesOptions}/>
                    </Col>
                    </Row>
                </div>



                <div className="info" ref={this.myDivToFocus}>
                <Container>
                    <Row>
                        <Col className="info-card test">
                            <h3 className="info-title ">Education</h3>
                            <Container>
                            <Row>
                                <Col className="logo-container" lg="auto">
                            <img className="logo" src={uci} alt="Logo"/>
                                </Col>

                                <Col lg>
                            <b>University of California, Irvine</b>
                            <p>Software Engineering, B.S.</p>

                                <p style={{'font-size': '12px'}}>Expected: July 2021</p>

                                <p>Relevant Coursework:</p>
                                <ul className='course_list'>
                                    <li>Programming with Software Libraries</li>
                                    <li>Programming in Python</li>
                                    <li>Software Engineering</li>
                                    <li>Discrete Mathematics</li>
                                    <li>Programming in C++</li>
                                    <li>Programming in Java</li>
                                    <li>Data Structure and Algorithms</li>
                                </ul>
                            </Col>
                            </Row>

                                <Row style={{'padding-top': '40px'}}>
                                    <Col className="logo-container" lg="auto">
                                        <img className="logo" src={nus} alt="Logo"/>
                                    </Col>
                                    <Col>


                            <b>National University of Singapore</b>
                                <p>UC Education Abroad Program</p>
                                <p style={{'font-size': '12px'}}>Spring 2019</p>

                                <p>Relevant Coursework:</p>
                                <ul className='course_list' style={{'padding-bottom': '50px'}}>
                                    <li>Computer Organization</li>
                                    <li>Interaction Design</li>
                                    <li>User Interface Development</li>
                                </ul>
                                    </Col>
                                </Row>

                                <h3 className="info-title ">Achievement</h3>

                                <Row style={{'padding-bottom': '50px'}}>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={nussteps} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>NUS 14th STePS - SoC Term Project Showcase</b>
                                        <p>National University of Singapore</p>

                                        <p style={{'font-size': '12px'}}>April 2019</p>

                                        <p>Awarded 2nd Place for Most Voted CS3240 Interaction Design project.</p>
                                    </Col>

                                </Row>
                            </Container>



                        </Col>
                        <Col className="info-card test">
                            <h3 className="info-title ">Work Experience</h3>

                            <Container>
                                <Row>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={asml} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>UCI Student Government & Student Media</b>
                                        <p>Graphic Designer and Marketing Intern</p>

                                        <p style={{'font-size': '12px'}}>2017 - Present</p>

                                        <p style={{'padding-bottom': '50px'}}>Experience designing graphic and leading marketing campaigns for UCI
                                            Student Government and on-campus events.</p>
                                    </Col>

                                </Row>
                                {/*<h3 className="info-title">-</h3>*/}

                                <h3 className="info-title">Activities + Leadership Experience</h3>

                                <Row>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={wics} alt="Logo"/>
                                    </Col>

                                    <Col lg>
                                        <b>Women in Information and Computer Science</b>
                                        <p>Mentor</p>

                                        <p style={{'font-size': '12px'}}>2018 - Present</p>

                                    </Col>
                                </Row>

                                <Row style={{'padding-top': '40px'}}>
                                    <Col className="logo-container" lg="auto">
                                        <img className="logo" src={uci_som} alt="Logo"/>
                                    </Col>

                                    <Col lg>
                                        <b>UC Irvine, School of Medicine</b>
                                        <p>Pre-Medical Research Summer Internship</p>

                                        <p style={{'font-size': '12px'}}>July 2016</p>

                                        <p>Awarded with a full scholarship to the Health & Science Enrichment Program at UCI.
                                            Involved in hands-on research labs and co-authored a literature review paper, <i>Efficacy of Antacids in Treating Gastroesophageal Reflux in Infants</i>.</p>
                                    </Col>
                                </Row>

                            </Container>

                        </Col>
                    </Row>




                    <Row className="test" style={{'margin-top': '20px'}}>
                        <Col className="logo-container test"  lg="auto">
                            <h4 className="skill-title">Technical Skills</h4>
                        </Col>
                        <Col className={'test skill-container'} lg="auto">
                            <Chip label="Adobe Creative Suite" className='skill-badge' variant="outlined" />
                            <Chip icon={<DiGoogleCloudPlatform style={skill_logo}/>} label="Google Cloud Platform" className='skill-badge' variant="outlined" />
                            <Chip icon={<DiTerminal style={skill_logo}/>} label="UNIX/Linux" className='skill-badge' variant="outlined" />
                            <Chip icon={<FaGithub style={skill_logo}/>} label="Git" className='skill-badge' variant="outlined" />
                            <Chip label="UI/UX Prototyping" className='skill-badge'  variant="outlined" />
                            <Chip icon={<DiAndroid style={skill_logo}/>} label="Android Studio" className='skill-badge' variant="outlined" />
                            <Chip icon={<FaReact style={skill_logo}/>} label="React" className='skill-badge' variant="outlined" />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="logo-container" lg="auto">
                            <h4 className="skill-title">Programming Language</h4>
                        </Col>
                        <Col className="skill-container" lg="auto">
                            <Chip icon={<FaHtml5 style={skill_logo}/>} label="HTML" className='skill-badge' variant="outlined" />
                            <Chip icon={<FaCss3Alt style={skill_logo}/>} label="CSS" className='skill-badge' variant="outlined" />
                            <Chip icon={<FaJs style={skill_logo}/>} label="Javascript" className='skill-badge' variant="outlined" />
                            <Chip icon={<FaPython style={skill_logo}/>} label="Python" className='skill-badge'  variant="outlined" />
                            <Chip icon={<FaJava style={skill_logo}/>} label="Java" className='skill-badge' variant="outlined" />
                            <Chip label="C/C++" className='skill-badge' variant="outlined" />
                            <Chip icon={<FaCode style={skill_logo}/>} label="Assembly" className='skill-badge' variant="outlined" />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="logo-container" lg="auto">
                            <h4 className="skill-title">Interests</h4>
                        </Col>
                        <Col className="skill-container" lg="auto">
                            <Chip label="Human-Computer Interaction" className='skill-badge' variant="outlined" />
                            <Chip label="Bioinformatics" className='skill-badge' variant="outlined" />
                            <Chip label="Photography" className='skill-badge' variant="outlined" />
                        </Col>
                    </Row>
                </Container>
                </div>

                <div>
                   <PortfolioContainer/>
                </div>

                <div className={'footer'}>
                    <p><b>E-mail&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
                        LinkedIn&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
                        GitHub&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
                        Instagram</b>
                        <br/><br/>© 2019 Marawin Chheang</p>
                </div>



            </Fragment>

        );
    }
}