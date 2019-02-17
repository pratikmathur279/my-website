import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';

class About extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    render () {
        return (
            <Auxiliary>
                <h1>about</h1>
            </Auxiliary>
            
        );
    }
}

export default About;