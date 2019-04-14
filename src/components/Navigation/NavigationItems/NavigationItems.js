import React from 'react';

import styles from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link={'/'}>Burger Builder</NavigationItem>
            {props.isAuthenticated ? <NavigationItem link={'/orders'}>Orders</NavigationItem> : null }
            {!props.isAuthenticated
                ? <NavigationItem link={'/auth'}>Authenticate</NavigationItem>
                : <NavigationItem link={'/logout'}>Logout</NavigationItem> }
        </ul>
    );
};

export default NavigationItems;