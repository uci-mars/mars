import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import sosdogs from "./images/projects/sosdogs.PNG";
import defcon from "./images/projects/defcon.png";
import inbetween from "./images/projects/inbetween.png";
import blink from "./images/projects/blink.png";
import releaf from "./images/projects/releaf.png";
import cs3249 from "./images/projects/cs3249.png";
import PortfolioGallery from './PortfolioGallery';
import GraphicGallery from './GraphicGallery';
import Chip from "@material-ui/core/Chip";

import { FaGithub, FaYoutube } from "react-icons/fa"

const skill_logo = {
    'marginLeft':'12px'
};


class PortfolioPage extends Component{
    render() {
        if (this.props.page === 0){
            return(
                <div style={{"marginTop": "60px", "marginRight":"10px", "marginLeft":"10px"}}>
                    {/*<h1>This is a page of CS Projects</h1>*/}
                    <Container className={'project-container'}>
                        <Col>

                        <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={sosdogs} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>SOSDogs</b>
                                    <p style={{'fontSize': '12px'}}><b>NUS CS3240 Interaction Design</b> - April 2019</p>
                                    <p>
                                       A human-computer interaction project designed for NUS CS3240. Our design problem tackles
                                        the issue of shelter overcrowding at animal shelters, specifically, Save Our Street Dogs (SOSD).
                                        We followed the design process by conducting contextual inquiry, task and requirement analysis,
                                        implementation, and user evaluation. For this project, I designed a high-fidelity prototype for the
                                        application that will improve outreach and matchmaking between sheltered dog and potential adopter. SOSDogs
                                        was awarded with 2nd prize for Most Voted CS3240 project at the 14th NUS School of Computing Term Project Showcase.
                                    </p>
                                    <a href={"https://www.youtube.com/watch?v=fZWI4A9ZoFo"}>
                                        <Chip icon={<FaYoutube style={skill_logo}/>}
                                              label="Watch our video"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>
                                    <a href={"http://isteps.comp.nus.edu.sg/event/14th-steps/module/CS3240/project/9"}>
                                        <Chip label="View on iSTePS"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>

                                    <a href={"https://xd.adobe.com/view/6616def2-e730-45c9-78db-54d491b9df10-1027/"}>
                                        <Chip label="Demo our prototype"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>


                                    <Chip label="Adobe XD" className='skill-badge' variant="outlined" />

                                </Col>
                            </Row>

                            <Row className={'project_row'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={cs3249} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>Custom UI Dashboard</b>
                                    <p style={{'fontSize': '12px'}}><b>NUS CS3249 User Interaction Development</b> - April 2019</p>
                                    <p>
                                       A single-page web application developed as a course project for NUS CS3249. This application's purpose is
                                        to visualize a dataset gathered from temperature sensors. For this project, I worked on the full-stack of the
                                        application. I built this application using the Meteor framework, implemented the front-end using React and back-end
                                        using MongoDB.

                                    </p>
                                    <a href={"https://github.com/uci-mars/cs3249_project"}>
                                        <Chip icon={<FaGithub style={skill_logo}/>}
                                              label="View on GitHub"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>
                                    <Chip label="Meteor" className='skill-badge' variant="outlined" />
                                    <Chip label="React" className='skill-badge' variant="outlined" />
                                    <Chip label="MongoDB" className='skill-badge' variant="outlined" />
                                </Col>
                            </Row>

                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={releaf} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>ReLeaf</b>
                                    <p style={{'fontSize': '12px'}}><b>HackNTU</b> - March 2019</p>
                                    <p>
                                        ReLeaf is a mobile game that provides a platform to encourage people to get out
                                        of their homes and pay more attention to the greenery around them. Our inspiration
                                        for this project came from Singapore's focus on green urbanism and its abundance of
                                        data on local trees. For this project, I planned the requirements and developed
                                        a working-prototype for Android. ReLeaf got selected as one of the Top 8 projects at
                                        HackNTU 2019.

                                    </p>
                                    <a href={"https://github.com/uci-mars/TreeGO"}>
                                        <Chip icon={<FaGithub style={skill_logo}/>}
                                              label="View on GitHub"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>
                                    <Chip label="Android Studio" className='skill-badge' variant="outlined" />
                                    <Chip label="Google Firebase" className='skill-badge' variant="outlined" />
                                    <Chip label="SG SmartNation API" className='skill-badge' variant="outlined" />
                                </Col>
                            </Row>

                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={blink} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>blink</b>
                                    <p style={{'fontSize': '12px'}}><b>SDHacks</b> - October 2018</p>
                                    <p>
                                        Blink is a mobile application that allows its users to network easily by
                                        seamlessly share 'digital business card' via NFC technology. Our inspiration for
                                        this project stems from the inconvenience of exchanging contact information with others
                                        at networking events. For this project, I developed the front-end of the Android application
                                        and implemented the NFC functionality.
                                    </p>
                                    <a href={"https://github.com/uci-mars/blink"}>
                                        <Chip icon={<FaGithub style={skill_logo}/>}
                                              label="View on GitHub"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>
                                    <Chip label="Android Studio" className='skill-badge' variant="outlined" />
                                    <Chip label="Google Firebase" className='skill-badge' variant="outlined" />
                                </Col>
                            </Row>


                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={inbetween} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>InBetween</b>
                                    <p style={{'fontSize': '12px'}}><b>LAHacks</b> - April 2018</p>
                                    <p>
                                        InBetween is a web application that helps you find recommended points of interest that are halfway between you and your friend!
                                        Our inspiration for this project stems from the struggle of having to find a convenient location to meet up.
                                        For this project, I developed the front-end of the application and implemented the Google Maps API.
                                    </p>
                                    <a href={"https://github.com/uci-mars/InBetween"}>
                                        <Chip icon={<FaGithub style={skill_logo}/>}
                                              label="View on GitHub"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>
                                    <Chip label="Python" className='skill-badge' variant="outlined" />
                                    <Chip label="Django" className='skill-badge' variant="outlined" />
                                    <Chip label="Google Cloud Platform" className='skill-badge' variant="outlined" />
                                    <Chip label="Foursquare API" className='skill-badge' variant="outlined" />
                                </Col>
                            </Row>



                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={defcon} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>DEFCON</b>
                                    <p style={{'fontSize': '12px'}}><b>HackUCI</b> - Feburary 2018</p>
                                    <p>
                                        DEFCON is a web application that notifies subscribed users
                                        in the event of any nearby disasters along with step by step guide
                                        for various scenarios, live social media updates, a map of the affected
                                        areas and nearby shelters, hospitals, or grocery stores. For this project,
                                        I designed the graphics and worked on the front-end of the application.
                                    </p>
                                    <a href={"https://github.com/uci-mars/defcon"}>
                                        <Chip icon={<FaGithub style={skill_logo}/>}
                                              label="View on GitHub"
                                              clickable
                                              className='skill-badge'
                                              variant="default" />
                                    </a>
                                    <Chip label="Express.js" className='skill-badge' variant="outlined" />
                                    <Chip label="JQuery" className='skill-badge' variant="outlined" />
                                    <Chip label="OneSignal API" className='skill-badge' variant="outlined" />
                                    <Chip label="Google Maps API" className='skill-badge' variant="outlined" />
                                </Col>
                            </Row>

                        </Col>
                    </Container>
                </div>
            );
        }

        else if (this.props.page === 1){
            return(
                <GraphicGallery/>
            );
        }

        else if (this.props.page === 2){
            return(
                <PortfolioGallery/>
            );
        }

    }
}

export default PortfolioPage;