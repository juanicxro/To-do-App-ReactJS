import React from 'react';
import Logo from '../../icons/Logo.svg';
import styles from './navbar.module.css'

export const Navbar: React.FC = () => {
    return (
        <div className={styles.Container}>
            <img src={Logo}></img>
        </div>
    );
};


