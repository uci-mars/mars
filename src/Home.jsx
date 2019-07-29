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
import icssc from "./images/icssc.png"
import daspedia from "./images/daspedia.png"
import isatv from "./images/isatv.png"
import oit from "./images/oit.png"
import Image from "react-bootstrap/Image"

import { FaLinkedinIn } from "react-icons/fa"
import { FaCode, FaAdobe, FaInstagram, FaReact, FaPython, FaGithub, FaHtml5, FaJs, FaJava, FaCss3Alt } from "react-icons/fa"
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
    'marginLeft':'12px'
};


export default class Home extends Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            show: false,
        };
        this.myDivToFocus = React.createRef()
        this.myPortfolio = React.createRef()
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

    handleOnClickPortfolio = (event) => {
        //.current is verification that your element has rendered
        if(this.myPortfolio.current){
            this.myPortfolio.current.scrollIntoView({
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
                                    <p className="e-mail">CHHEANGM@UCI.EDU</p>
                                    <p>Software Engineer // Graphic Designer</p>
                                    <div style={{'marginDown': '10px'}}>
                                        <a href="https://github.com/uci-mars" className="social-link">
                                            <FaGithub className={'social-logo'}/>
                                        </a>

                                        <a href="https://www.linkedin.com/in/mchheang/" className="social-link">
                                            <FaLinkedinIn className={'social-logo'}/>
                                        </a>

                                        <a href="https://instagram.com/marsc.dev" className="social-link">
                                            <FaInstagram className={'social-logo'}/>
                                        </a>
                                    </div>
                                    <br/>
                                    <Button variant="info"  style={{"margin": "5px"}} onClick={this.handleShow}>View Resumé</Button>
                                    <Button style={{"margin": "5px"}} variant="outline-light" onClick={this.handleOnClickPortfolio}>View Portfolio</Button>
                                </div>

                                {/*##########################*/}
                                <Modal size="lg" centered show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Resumé <i>(Updated July 2019)</i></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> <Image src={resume} fluid /> </Modal.Body>
                                    <Modal.Footer>
                                        <a href="https://github.com/uci-mars/mars/raw/master/src/resume/MarawinChheang-resume.pdf" download="MarawinChheang-resume.pdf">
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



                <div className="info"  ref={this.myDivToFocus}>
                <Container>
                    <Row style={{'marginBottom': '50px'}}>
                        <Col className="info-card test">
                            <h3 className="info-title ">Education</h3>
                            <Container>
                            <Row className="info-hover">
                                <Col className="logo-container" lg="auto">
                            <img className="logo" src={uci} alt="Logo"/>
                                </Col>

                                <Col lg>
                                        <b>University of California, Irvine</b>
                                        <p>Software Engineering, B.S.</p>

                                        <p style={{'fontSize': '12px'}}>Anticipated: July 2021</p>


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

                                <Row className="info-hover" style={{'paddingTop': '40px'}}>
                                    <Col className="logo-container" lg="auto">
                                        <img className="logo" src={nus} alt="Logo"/>
                                    </Col>
                                    <Col>


                            <b>National University of Singapore</b>
                                <p>UC Education Abroad Program</p>
                                <p style={{'fontSize': '12px'}}>Spring 2019</p>

                                <p>Relevant Coursework:</p>
                                <ul className='course_list' style={{'paddingBottom': '50px'}}>
                                    <li>Computer Organization</li>
                                    <li>Interaction Design</li>
                                    <li>User Interface Development</li>
                                </ul>
                                    </Col>
                                </Row>

                                <h3 className="info-title">Activities + Leadership Experience</h3>

                                <Row className="info-hover">
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={icssc} alt="Logo"/>
                                    </Col>

                                    <Col lg>
                                        <b>Information and Computer Science Student Council</b>
                                        <p>Project Chair</p>

                                        <p style={{'fontSize': '12px'}}>2019 - Present</p>

                                        <p>Runs a project committee which offers technical skills
                                            building to ICS students by working on various software development projects.</p>

                                    </Col>

                                </Row>

                                <Row className="info-hover" style={{'paddingTop': '40px'}}>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={wics} alt="Logo"/>
                                    </Col>

                                    <Col lg>
                                        <b>Women in Information and Computer Science</b>
                                        <p>Mentor</p>

                                        <p style={{'fontSize': '12px'}}>2018 - 2019</p>

                                        <p>Participated in a mentorship program as a mentor to two underclassmen ICS students.</p>

                                    </Col>
                                </Row>

                                <Row className="info-hover" style={{'paddingTop': '40px'}}>
                                    <Col className="logo-container" lg="auto">
                                        <img className="logo" src={uci_som} alt="Logo"/>
                                    </Col>

                                    <Col lg>
                                        <b>UC Irvine, School of Medicine</b>
                                        <p>Pre-Medical Research Summer Internship</p>

                                        <p style={{'fontSize': '12px'}}>July 2016</p>

                                        <p>Awarded with a full scholarship to the Health & Science Enrichment Program at UCI.
                                            Involved in hands-on research labs and co-authored a literature review paper, <i>Efficacy of Antacids in Treating Gastroesophageal Reflux in Infants</i>.</p>
                                    </Col>
                                </Row>



                            </Container>



                        </Col>
                        <Col className="info-card test">
                            <h3 className="info-title ">Work Experience</h3>

                            <Container>
                                <Row className="info-hover">
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={oit} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>UCI Office of Information Technology</b>
                                        <p>Front-End Developer</p>

                                        <p style={{'fontSize': '12px'}}>2019 - Present</p>

                                        <p>Developing, maintaining, testing, and documenting the user interface and
                                        user experience of the IAM portfolio of services and upcoming web
                                        application projects.</p>
                                    </Col>

                                </Row>

                                <Row className="info-hover" style={{'paddingTop': '40px'}}>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={daspedia} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>DASpedia</b>
                                        <p>Graphic Designer/Web Developer</p>

                                        <p style={{'fontSize': '12px'}}>2019 - Present</p>

                                        <p>Designing marketing materials for large-scale telecommunication conferences and
                                        developing company website.</p>
                                    </Col>

                                </Row>

                                <Row className="info-hover" style={{'paddingTop': '40px'}}>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={isatv} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>International Secret Agents</b>
                                        <p>Design Intern</p>

                                        <p style={{'fontSize': '12px'}}>Summer 2019</p>

                                        <p>Experience in creative advertising content production for commercial brands
                                        and working with Asian Pacific American influencers in live event production.</p>
                                    </Col>

                                </Row>

                                <Row className="info-hover" style={{'paddingTop': '40px'}}>
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={asml} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>UCI Student Government & Student Media</b>
                                        <p>Graphic Designer and Marketing Intern</p>

                                        <p style={{'fontSize': '12px'}}>2017 - 2019</p>

                                        <p style={{'paddingBottom': '50px'}}>Led marketing campaigns and designed graphics for UCI
                                            Student Government and large-scale on-campus events.</p>
                                    </Col>

                                </Row>
                                {/*<h3 className="info-title">-</h3>*/}

                                <h3 className="info-title ">Achievement</h3>

                                <Row className="info-hover">
                                    <Col className="logo-container test" lg="auto">
                                        <img className="logo" src={nussteps} alt="Logo"/>
                                    </Col>

                                    <Col className="test" lg>
                                        <b>NUS 14th STePS - SoC Term Project Showcase</b>
                                        <p>National University of Singapore</p>

                                        <p style={{'fontSize': '12px'}}>April 2019</p>

                                        <p>Awarded 2nd Place for Most Voted CS3240 Interaction Design project.</p>
                                    </Col>
                                </Row>  



                            </Container>

                        </Col>
                    </Row>




                    <Row className="test" style={{'marginTop': '20px'}}>
                        <Col className="logo-container test"  lg="auto">
                            <h4 className="skill-title">Technical Skills</h4>
                        </Col>
                        <Col className={'test skill-container'} lg="auto">
                            <Chip icon={<FaAdobe style={skill_logo}/>} label="Adobe Creative Suite" className='skill-badge' variant="outlined" />
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
                            <Chip label="Cooking" className='skill-badge' variant="outlined" />
                        </Col>
                    </Row>
                </Container>

                </div>

                <div ref={this.myPortfolio}>
                   <PortfolioContainer/>
                </div>

                <div className={'footer'}>
                    <p><b><a href="mailto:chheangm@uci.edu" className="footer-link" title="chheangm@uci.edu">E-mail</a>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/mchheang/" className="footer-link" title="@mchheang">LinkedIn</a>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
                        <a href="https://www.github.com/uci-mars/" className="footer-link" title="@uci-mars">GitHub</a>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;
                        <a href="https://www.instagram.com/maralose/" className="footer-link" title="@maralose">Instagram</a></b>
                        <br/><br/>© 2019 Marawin Chheang</p>
                </div>



            </Fragment>

        );
    }
}