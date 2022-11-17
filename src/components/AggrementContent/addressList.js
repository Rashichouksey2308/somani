import styles from './index.module.scss';

export const addressLists = (val, index, handleEditAddressInput, onAddressRemove) => {
  return (
    <div key={index} className={`${styles.registeredAddress} d-flex justify-content-between border_color`}>
      <div className={`${styles.registeredAddressHeading}`}>
        <span>{val.addressType} Address</span>
        <div className={`${styles.address_text}`}>
          {val.fullAddress} {val.city} {val.state} {val.country} {val.pinCode}
          <br></br>
          {val.gstin ? `GSTIN No- ${val.gstin}` : ''}
        </div>
      </div>
      <div className={`d-flex ${styles.actions} `}>
        <div
          className={`${styles.addressEdit} d-flex justify-content-center align-items-center mt-n2`}
          onClick={() => {
            handleEditAddressInput(index, val.addressType);
          }}
        >
          <img className={`${styles.image} img-fluid`} src="/static/mode_edit.svg" alt="edit" />
        </div>
        <div
          className={`${styles.addressEdit} ml-3 d-flex justify-content-center align-items-center mr-n3 mt-n2`}
          onClick={() => {
            onAddressRemove(index);
          }}
        >
          <img className={`${styles.image} img-fluid`} src="/static/delete 2.svg" alt="delete" />
        </div>
      </div>
    </div>
  );
};
