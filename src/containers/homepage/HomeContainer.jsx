import React, { Component } from "react";
import './style.css';
import ClickComp from "../../components/ClickComp";
import ChangeColor from "../../components/changeColor";

class HomeContainer extends Component {

    constructor() {
        super();
        this.state = {
            click: false,
            cubeClick:false
        }
        this.stateChange = this.stateChange.bind(this);
        this.clickCube = this.clickCube.bind(this);
    }

    render() {
        const { click, cubeClick } = this.state;
        return (
            <>
                <ClickComp click={click} stateChange={this.stateChange} />
                <ChangeColor clickCube={this.clickCube} cubeClick={cubeClick} /> 

            </>

        )
    }

    stateChange() {
        this.setState({ click: !this.state.click });
    }
    clickCube () {
        this.setState({cubeClick: !this.state.cubeClick});
    }


}

export default HomeContainer;

