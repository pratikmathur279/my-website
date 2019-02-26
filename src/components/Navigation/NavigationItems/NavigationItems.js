import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/about">About</NavigationItem>
        <NavigationItem to="/experience">Work Experience</NavigationItem>
        <NavigationItem to="/projects">Projects</NavigationItem>
        {/* <NavigationItem to="/contact">Contact</NavigationItem> */}        
    </ul>
    )
}
    

export default navigationItems;