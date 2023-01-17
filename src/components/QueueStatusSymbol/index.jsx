import React from 'react';
import styles from './index.module.scss';

function Index({ status }) {
  let statusStyle = '';
  if (status === 'Approved') {
    statusStyle = styles.approved;
  }
  else if (status === 'Pending') {
    statusStyle = styles.pending;
  }
  else if (status === 'Review') {
    statusStyle = styles.review;
  }
  else if (status === 'Rejected') {
    statusStyle = styles.rejected;
  }

  return (
    <>
      <span
        className={`${styles.status} ${statusStyle}`}
      ></span>
      {status}
    </>
  );
}

export default Index;