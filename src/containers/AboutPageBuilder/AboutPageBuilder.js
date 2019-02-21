import React, { Component } from 'react';
// import AboutPage from '../../components/AboutPage/AboutPage';

import Auxiliary from '../../hoc/Auxiliary';
import AboutPage from '../../components/AboutPage/AboutPage';

import pratik from '../../assets/Images/pratik.jpg';

class AboutPageBuilder extends Component {
    constructor(){
        super();
        this.state = {
            image: pratik,
            description: "This is the description."
        };    
    }
    
    render () {
        return (
            <Auxiliary>
                <AboutPage state={this.state} />
            </Auxiliary>
        );
    }
}

export default AboutPageBuilder;