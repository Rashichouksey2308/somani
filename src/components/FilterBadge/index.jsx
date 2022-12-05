import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';


const Index = ({label,onClose}) => {

    return (
        <div className={`${styles.filterd_card} d-flex align-center`}>
           <h5 className={`${styles.label}`}>{label}</h5>
            <div onClick={onClose} className={`${styles.close_img} ml-2`} >
                <img src="/static/close-b.svg" className="img-fluid" alt="Close"/>
            </div>
        </div>
    )
}
export default Index; 