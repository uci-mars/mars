import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import asml from "./images/asml.png";
import sosdogs from "./images/sosdogs.PNG";
import PortfolioGallery from './PortfolioGallery';


class PortfolioPage extends Component{
    render() {
        if (this.props.page === 0){
            return(
                <div style={{"marginTop": "60px"}}>
                    {/*<h1>This is a page of CS Projects</h1>*/}
                    <Container className={'project-container'}>
                        <Col>
                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={asml} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>DEFCON</b>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis sit amet eleifend arcu. Duis ullamcorper vel ex non
                                        tincidunt. Duis at malesuada massa. Sed blandit tempus accumsan.
                                        Duis a nisl at sem ultricies facilisis. Proin eu ultrices mi.
                                        Aenean venenatis lacus eros, nec vestibulum turpis porttitor sit
                                        amet. Proin non felis maximus, blandit lectus eget, suscipit sapien.
                                    </p>
                                </Col>
                            </Row>

                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={asml} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>InBetween</b>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis sit amet eleifend arcu. Duis ullamcorper vel ex non
                                        tincidunt. Duis at malesuada massa. Sed blandit tempus accumsan.
                                        Duis a nisl at sem ultricies facilisis. Proin eu ultrices mi.
                                        Aenean venenatis lacus eros, nec vestibulum turpis porttitor sit
                                        amet. Proin non felis maximus, blandit lectus eget, suscipit sapien.
                                    </p>
                                </Col>
                            </Row>

                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={asml} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>blink</b>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis sit amet eleifend arcu. Duis ullamcorper vel ex non
                                        tincidunt. Duis at malesuada massa. Sed blandit tempus accumsan.
                                        Duis a nisl at sem ultricies facilisis. Proin eu ultrices mi.
                                        Aenean venenatis lacus eros, nec vestibulum turpis porttitor sit
                                        amet. Proin non felis maximus, blandit lectus eget, suscipit sapien.
                                    </p>
                                </Col>
                            </Row>

                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={asml} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>ReLeaf</b>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis sit amet eleifend arcu. Duis ullamcorper vel ex non
                                        tincidunt. Duis at malesuada massa. Sed blandit tempus accumsan.
                                        Duis a nisl at sem ultricies facilisis. Proin eu ultrices mi.
                                        Aenean venenatis lacus eros, nec vestibulum turpis porttitor sit
                                        amet. Proin non felis maximus, blandit lectus eget, suscipit sapien.
                                    </p>
                                </Col>
                            </Row>

                        </Col>
                    </Container>
                </div>
            );
        }

        else if (this.props.page === 1){
            return(
                <div style={{"marginTop": "60px"}}>
                    <Container className={'project-container'}>
                        <Col>
                            <Row className={'project_row test'}>
                                <Col className={'logo-container test'} lg="auto">
                                    <img src={sosdogs} alt="Logo"/>
                                </Col>
                                <Col style={{"textAlign": "left"}} className={'test'}>
                                    <b>SOSDogs</b>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis sit amet eleifend arcu. Duis ullamcorper vel ex non
                                        tincidunt. Duis at malesuada massa. Sed blandit tempus accumsan.
                                        Duis a nisl at sem ultricies facilisis. Proin eu ultrices mi.
                                        Aenean venenatis lacus eros, nec vestibulum turpis porttitor sit
                                        amet. Proin non felis maximus, blandit lectus eget, suscipit sapien.
                                    </p>
                                </Col>
                            </Row>


                        </Col>
                    </Container>
                </div>
            );
        }

        else if (this.props.page === 2){
            return(
                <h1>This is a page of Graphic Design</h1>
            );
        }

        else if (this.props.page === 3){
            return(
                <PortfolioGallery/>
            );
        }

    }
}

export default PortfolioPage;