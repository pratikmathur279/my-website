import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import AboutWebsite from '../AboutWebsite/AboutWebsite';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <div>
            <AboutWebsite />
        </div>
    </header>
);

export default toolbar;