import React from 'react';
import styles from './index.module.scss';

const Index = ({ data }) => {
    return (
        <div className={`${styles.tooltip}`}>
            <img className={`ml-2 mt-n1 img-fluid`} src="/static/info-circle.svg" />
            <span className={`${styles.tooltiptext}`}>{data}</span>
        </div>
    )
}

export default Index