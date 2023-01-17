import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import Router from 'next/router';

function Index() {
  return (
    <div className={`${styles.dashboardTab} w-100`}>
      <div className={`${styles.tabHeader} tabHeader `}>
        <div className={`${styles.title_header} d-flex align-items-center`}>
          <div className={`d-flex align-items-center flex-grow-1`}>
            <img
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid image_arrow mr-2"
              onClick={() => Router.push('/credit-queue')}
              style={{ cursor: 'pointer' }}
            />
            <h1 className={`${styles.title} heading`}>Indo german international private limited</h1>
          </div>
          <div class="ml-auto d-flex">
            <div class="ml-auto  mr-2">
              <div class="generic_lastModified__bojdo text ">
                <span class={`${styles.accordian_text}`}>Last Modified:</span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
