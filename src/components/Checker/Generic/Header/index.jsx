import React from 'react';
import styles from './index.module.scss';
import Router from 'next/router';

function Index({ companyName }) {
  return (
    <div className={`${styles.dashboardTab} w-100 border`}>
      <div className={`${styles.tabHeader} tabHeader`}>
        <div className={`${styles.title_header} d-flex align-items-center`}>
          <div className={`d-flex align-items-center flex-grow-1`}>
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid image_arrow mr-2"
              onClick={() => Router.push('/checker/generic')}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={`${styles.title} heading text-uppercase`}>{companyName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
