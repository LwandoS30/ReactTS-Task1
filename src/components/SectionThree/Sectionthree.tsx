import React from 'react'
import { ContentContainer } from '../ComponentContainer'
import styles from './Sectionthree.module.css'

import oranges2 from '../../assets/asserts2/images/oranges2.jpg'
import t3 from '../../assets/asserts2/images/t3.jpg'
import berryplate from '../../assets/asserts2/images/berryplate.jpg'

export const Sectionthree: React.FC<any> = () => {
    return(
        <ContentContainer>
            <div className={styles['sectionthree-container']}>
                <div className={styles['itemcard']}>
                    <img src={oranges2} alt={'one full orange and one half orange'} />
                    <h3>ARCU VOLUT FAT VITAE</h3>
                    <p>Phestier 1greart</p>
                </div>
                <div className={styles['itemcard']}>
                    <img src={t3} alt={'three full oranges and two half oranges'} />
                    <h3>$19,99190E</h3>
                    <p>Orviste past bronor</p>
                </div>
                <div className={styles['itemcard']}>
                    <img src={berryplate} alt={'Boul of blue berries, red berries, strawberries and cherries'} />
                    <h3>SFIELY TUN DAENARD</h3>
                </div>
                        
            </div>
        </ContentContainer>
    )
}
