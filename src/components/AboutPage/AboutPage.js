import React from 'react';

import classes from './AboutPage.css';
import Image from '../Images/Image';
import Description from '../Description/Description';

const AboutPage = (props) => {
    return(
        <div className={classes.AboutPage}>
            <Image src={props.state.image} alt={props.alt} />
            <Description desc={props.state.description} />
        </div>
    )
}

export default AboutPage;

