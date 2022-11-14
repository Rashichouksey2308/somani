import React from 'react';
import styles from './index.module.scss';
import { STATISTICS_TYPES } from '../../data/constant';

function Index({ data }) {
    let statData = [];
    for (var key of Object.keys(data)) {
        if (key === STATISTICS_TYPES.ALL) {
            statData.push({ 'type': key, 'img-url': '/static/leads-icon.svg', 'value': data[key] });
        } else if (key == STATISTICS_TYPES.APPROVED) {
            statData.push({ 'type': key, 'img-url': '/static/check.svg', 'value': data[key] });
        } else if (key == STATISTICS_TYPES.REVIEW) {
            statData.push({ 'type': key, 'img-url': '/static/access-time.svg', 'value': data[key] });
        } else if (key == STATISTICS_TYPES.REJECTED) {
            statData.push({ 'type': key, 'img-url': '/static/close-b.svg', 'value': data[key] });
        } else if (key == STATISTICS_TYPES.PENDING) {
            statData.push({ 'type': key, 'img-url': '/static/pending.svg', 'value': data[key] });
        }
    }
    return (
        <div className={`${styles.statusBox} statusBox border d-flex align-items-center justify-content-between`}>
            {statData.map((item) => {
                return (
                    <div className={`${item.type} ${styles.boxInner} border_color`}>
                        <div className="d-lg-flex align-items-center d-inline-block">
                            <div className={`${styles.iconBox} iconBox`}>
                                <img src={item['img-url']} className="img-fluid" alt="All Leads" />
                            </div>
                            <h3>
                                <span> {item.type} </span>
                                {item.value}
                            </h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Index