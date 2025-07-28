import React from 'react'
import { Text } from '../Text/Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ComponentContainer'

import profile from '../../assets/asserts2/icons/profile.png'
import cart from '../../assets/asserts2/icons/cart.png'
import premium from '../../assets/asserts2/images/premium.jpeg'

export const Navbar: React.FC<any> = (props) => {
    return(
        <nav>
            <ContentContainer className={styles.content}>
                <div className={styles.logo}>
                    <img src={premium} alt={'Premium resturent logo'}/>
                    <Text  variant={'h2'} style={{margin: 0, color: '#fff'}}>PREMIUM VITAMIN</Text>

                </div>
                
                <div className={styles.links}>
                    <a href="/#" className={styles.link}>HOME</a>
                    <a href="/#" className={styles.link}>MENU</a>
                    <a href="/#" className={styles.link}>PAGES</a>
                    <a href="/#" className={styles.link}>BLOG</a>
                    <a href="/#" className={styles.link}>CONTACT US</a>
                    
                    <div className={styles['profile-icon']}>
                        <img className={styles.profileicon} src={profile} alt={'Profile icon'}/>
                        <img className={styles.cart} src={cart} alt={'shopping cart icon'}/>
                    </div>
                </div>
            </ContentContainer>
            
        </nav>
    )
}