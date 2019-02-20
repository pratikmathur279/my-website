import React from 'react';

import FooterImage from './FooterImage/FooterImage';
import classes from './Footer.css';

import linkedin from '../../../assets/Images/linkedin1.png';
import github from '../../../assets/Images/github.png';

const footer = (props) => (
    <div className={classes.Footer}>
        <div className={classes.FooterDiv}>
            <div className={classes.FooterContainer}>
                <FooterImage src={linkedin} alt="Facebook" url="https://www.linkedin.com/in/pratik-mathur/" target="_blank" />
                <FooterImage src={github} alt="Github" url="https://github.com/pratikmathur279"  target="_blank" />
            </div>
        </div>
    </div>
);

export default footer;