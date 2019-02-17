import React from 'react';

import classes from './Homepage.css';
import Projects from '../Homepage/Projects/Projects';
import HomePageContainer from '../Homepage/HomepageContainer/HomepageContainer';

const Homepage = (props) => {
    return(
        <div className={classes.Homepage}>
            <div className={classes.HomePageContainer}>
                <HomePageContainer/>
            </div>
            <div className={classes.Projects}>
                <Projects/>
            </div>
        </div>
    )
}

export default Homepage;