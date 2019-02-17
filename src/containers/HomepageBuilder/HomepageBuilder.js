import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Homepage from '../../components/Homepage/Homepage';

class HomepageBuilder extends Component {
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
                <Homepage/>
            </Auxiliary>
        );
    }
}

export default HomepageBuilder;