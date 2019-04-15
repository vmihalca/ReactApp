import React, { Component } from "react";
import './../../css/style.css';
import Header from "../../components/Header";
import Homepage from "../../components/Homepage";
import Footer from "../../components/Footer";

class HomeContainer extends Component {


    render() {
        return (
            <>
                <Header /> 
                <Homepage />
                <Footer />
            </>

        )
    }
}

export default HomeContainer;

