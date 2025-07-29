import React from 'react'
import { ContentContainer } from '../ComponentContainer'
import styles from './Footer.module.css'

export const Footer = () => {
  return(
      <footer>
        <ContentContainer className={styles['footer-container']}>
            <div className={styles['footer-container']}>
                <div className={styles['image-button']}>
                    <img src="" alt="" />
                    <input type="button" value="HELLO." />
                </div>
                <div className={styles['sub-sec-two']}>
                    <h3>OUR MENU BENEFIT</h3>
                    <div className={styles['container-menu']}>
                        <img src="" alt="" />
                        <h4>FRESH</h4>
                        <ul>
                            <li>Plays orange on</li>
                            <li>Nutriences</li>
                        </ul>
                    </div>

                    <div className={styles['vitamin-container']}>
                        <img src="" alt="" />
                        <h4>VITAMIN</h4>
                        <ul>
                            <li>Nispen noen</li>
                            <li>proerns</li>
                        </ul>
                    </div>

                    <div className={styles['ore-anic']}>
                        <img src="" alt="" />
                        <h4>ORE ANIC</h4>
                        <ul>
                            <li>Towagelos</li>
                            <li>woruis</li>
                        </ul>
                    </div>

                </div>
                
                <div className={styles['opening-hours']}>
                    <h3>OPENING HOURS</h3>
                    <ul className={styles['opening-hours']}>
                        <li>Monday          17.00cm x17</li>
                        <li>Tuesday          17.00cm x17</li>
                        <li>Wednesday          17.00cm x17</li>
                        <li>Thursday          17.00cm x17</li>
                    </ul>
                    <hr />
                    <h3>QUICK LINKS</h3>
                </div>
            </div>
        </ContentContainer>
            
      </footer>
  )
}