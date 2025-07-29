import React from 'react'
import styles from './Sectionfour.module.css'
import berryplate from '../../assets/asserts2/images/berryplate.jpg'
export const Sectionfour = () => {
    return (
        <div className={styles['sectionfour-container']}>
            <h2>Just imagine seeds and summer in gell sunshine</h2>
            <img className={styles['berryplate']}src={berryplate} alt={'Red and  blue berries with strawberries'} />
            <div className={styles['card']}>
                <h4>EBEE WOUS <br /> BENEFIT.</h4>
                <p> WON CHAI, PIESNEWIEWIAOCES
                    <hr /> 
                    Productional Condition
                    <hr />
                </p>
                <input className={styles['input']} type="button" value="HEAD MORE" />
            </div>
        </div>
    )
}