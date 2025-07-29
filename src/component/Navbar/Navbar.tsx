import React from 'react'
import {Text } from '../Text/Text'
import styles from './Navbar.module.css'

import { ContentContainer } from '../ContentContainer'

export const Navbar = () => {

    return (
        <nav>
            {/* <div className={styles.content}> */}
            <ContentContainer className={styles.content}>
                <Text variant={'h2'} style={{ margin: 0}}>Perfu-Scent</Text>
                <div className={styles.links}>
                    <a href="/#" className={styles.link}>Home</a>
                    <a href="/#" className ={styles.link}>Contact US</a>
                    <a href="/#" className ={styles.link}>About Us</a>
                    {/* <a href="/#" className ={styles.link}>Products</a>
                    <a href="/#" className ={styles.link}>Services</a> */}
                    <div className={styles['profile-icon']}>
                        <Text variant ={'span'} style={{color: 'black'}}>L</Text>
                    </div>
                </div>
            </ContentContainer>
                
            {/* </div> */}
        </nav>
    )
}