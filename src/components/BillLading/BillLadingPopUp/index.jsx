<<<<<<< Updated upstream
import React from 'react';
=======
import React from 'react'
>>>>>>> Stashed changes

const index = () => {
  return (
    <div className={`${styles.updated_successfully} ${styles.card} card p-0`}>
      <div className={`${styles.card_header} card-header bg-transparent`}>
        <h3>Updated Successfully</h3>
      </div>
      <div className={`${styles.card_body} card-body`}>
<<<<<<< Updated upstream
        <img src="/static/updated-successfully.svg" alt="Updated Successfully" className="img-fluid" />
        <h4>Success</h4>
        <p>The bill of lading is successfully updated.</p>
        <div className="d-flex align-items-center justify-content-between">
          <button type="button" className={`${styles.card_button} ${styles.close} btn`}>
            Close
          </button>
          <button type="button" className={`${styles.card_button} ${styles.track_view} btn`}>
=======
        <img src='/static/updated-successfully.svg' alt='Updated Successfully' className='img-fluid' />
        <h4>Success</h4>
        <p>The bill of lading is successfully updated.</p>
        <div className='d-flex align-items-center justify-content-between'>
          <button type='button' className={`${styles.card_button} ${styles.close} btn`}>
            Close
          </button>
          <button type='button' className={`${styles.card_button} ${styles.track_view} btn`}>
>>>>>>> Stashed changes
            Track &amp; View
          </button>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
  );
};

export default index;
=======
  )
}

export default index
>>>>>>> Stashed changes
