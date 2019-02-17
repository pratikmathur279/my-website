import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/about">About Me</NavigationItem>
        <NavigationItem to="/contact">Contact</NavigationItem>
        <NavigationItem to="/projects">Projects</NavigationItem>
    </ul>
);

export default navigationItems;