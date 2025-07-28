import React from 'react'
import { ContentContainer } from '../ComponentContainer'
import styles from './Sectiontwo.module.css'

import halforange from '../../assets/asserts2/images/halforange.jpg'
import juicer from '../../assets/asserts2/images/juicer.jpg'

export const Sectiontwo: React.FC<any> = () => {
    
    return(
          <ContentContainer>
            <div className={styles['sectiontwo-container']}>
                <h2>Orange Benefit</h2>
                <ul>
                    <li>
                        <img className={styles['half-orange']} src={halforange} alt={'Half orange fruit'} />
                    </li>
                    <li>
                        <p>Just reogine eseds and summer in golled <br />
                            quasiup
                        </p>
                        <input type="button" value="LEARN MORE" />
                    </li>
                    <li>
                        <img className={styles['juicer']} src={juicer}  alt={'Juicer with orange juice and some oranges around'} />
                    </li>
                </ul>
                
            </div>
          </ContentContainer>
        
    )
}