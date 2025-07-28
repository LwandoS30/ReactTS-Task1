import React from 'react'
import styles from './Sectionfour.module.css'
import berryplate from '../../assets/asserts2/images/berryplate.jpg'

export const Sectionfour = () => {
    return (
        <div className={styles['sectionfour-container']}>
            <h2>Just imagine seeds and summer in gell sunshine</h2>
            <img src={berryplate} alt={''} />
            <div>
                <h4>EBEE WOUS <br /> BENEFIT.</h4>
                <p> 
                    <hr /> 
                
                </p>
                <input type="button" value="HEAD MORE" />
            </div>
        </div>
    )
}