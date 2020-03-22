import React from 'react';

import classes from './AboutPage.css';
import Image from '../Images/Image';
import Description from '../Description/Description';

const AboutPage = (props) => {
    return(
        <div className={classes.Homepage}>
            <div className={classes.HomepageContainer}>
                <div className={classes.title}>
                    <h3>My Passions & Personality</h3>
                </div>
            </div>
            <div className={classes.AboutPage}>
                <Image src={props.state.image} alt={props.alt} />
                <Description desc={props.state.description} />
            </div>
        </div>
        
    )
}

export default AboutPage;

