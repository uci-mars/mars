import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PortfolioPage from './PortfolioPage'

class PortfolioContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event, value){
        this.setState({ value });
    };

    render(){
        return(
            <div className={"portfolio-container"}>
                <h3 className="info-title" style={{'paddingTop': '50px'}}>Portfolio</h3>
                <Tabs
                    className={'portfolio-tabs'}
                    value={this.state.value}
                    onChange={this.handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                >

                    <Tab label="Projects" />
                    <Tab label="Graphic Design" />
                    <Tab label="Photography" />
                </Tabs>
                <div>

                <PortfolioPage page={this.state.value}/>
                </div>
            </div>

        )
    }

}

export default PortfolioContainer;