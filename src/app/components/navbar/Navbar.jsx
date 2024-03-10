import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import { GeistSans } from 'geist/font/sans';

const Navbar = () => {
    return (
        <header className={styles.wrap}>
            {/* <Image
                src="/backdropImage.jpg"
                alt="Backdrop Image"
                className={styles.backImage}
                layout="fill"
                objectFit="cover"
            /> */}
            <div className={styles.carbonLogo}>Carbon</div>
            <nav className={styles.innerWrap}>
                <a href="#" className={styles.personal}>
                    Personal
                </a>
                <a href="#" className={styles.carbonLt}>
                    Carbon &lt;18
                </a>
                <a href="#" className={styles.aboutUs}>
                    About Us
                </a>
            </nav>
            <div className={styles.signinButtons}>
                <a href="#" className={styles.logIn}>
                    Log In
                </a>
                <a href="#" className={styles.register}>
                    Register
                </a>
            </div>
        </header>
    );
};

export default Navbar;
