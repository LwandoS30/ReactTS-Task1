import React from 'react'
import styles from './Section.module.css'
import { ContentContainer } from '../ComponentContainer'

export const Section: React.FC<any> = () => {

    return(
        <ContentContainer>
            <div className={styles['section-container']}>
                <div className={styles['sub-head']}>
                    <h5>Premium Restaurant</h5>
                    <input className={styles['sign-in']} type="button" value="SIGN IN" />
                </div>    
                <div className={styles['container-one']}>
                    <h2>Anida Dedelay</h2>
                    <p>BEST HEALTHY SALAD SERVED <br />
                        IN OUR RESTUANT
                    </p>
                    <input type="button" value="LEARN MORE" />
                </div>
            </div>
        </ContentContainer>
       
    )
}