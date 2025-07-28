import React from 'react'
import { ContentContainer } from '../ComponentContainer'
import styles from './Footer.module.css'
import peel from '../../assets/asserts2/icons/peel.png'
import pumpkin from '../../assets/asserts2/icons/pumpkin.png'
import juice from '../../assets/asserts2/icons/juice.png'

export const Footer = () => {
  return(
      <footer>
        <ContentContainer className={styles['footer-container']}>
            <div className={styles['footer-container']}>
                <div className={styles['image-button']}>
                    <input type="button" value="HELLO." />
                </div>

                <h3>OUR MENU BENEFIT</h3>
                <div className={styles['container-menu']}>
                    <img className={styles['footer-icons']} src={juice} alt ={''} />
                    <h4>FRESH</h4>
                    <ul>
                        <li>Plays orange on</li>
                        <li>Nutriences</li>
                    </ul>
                </div>

                <div className={styles['vitamin-container']}>
                    <img className={styles['footer-icons']}  src={peel} alt ={''}/>
                    <h4>VITAMIN</h4>
                    <ul>
                        <li>Nispen noen</li>
                        <li>proerns</li>
                    </ul>
                </div>

                <div className={styles['ore-anic']}>
                    <img className={styles['footer-icons']}  src={pumpkin} alt ={''} />
                    <h4>ORE ANIC</h4>
                    <ul>
                        <li>Towagelos</li>
                        <li>woruis</li>
                    </ul>
                </div>

                <div className={styles['opening-hours']}>
                    <h3>OPENING HOURS</h3>
                    <ul>
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li></li>
                    </ul>
                    <hr />
                    <h3>QUICK LINKS</h3>
                </div>
            </div>
        </ContentContainer>
            
      </footer>
  )
}