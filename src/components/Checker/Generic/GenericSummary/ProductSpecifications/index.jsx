import React, { Component } from 'react';
import styles from './index.module.scss';
import Toggle from '../../../../Toggle/index';
import ProductSpecificationsTable from './ProductSpecificationTable';

const onToggle = (state) => { };

function Index({ productSpecifications }) {
  return (
    <div className={`${styles.main} vessel_card mt-4 card border_color`}>
      <div onClick={onToggle}>
        <div className={`${styles.head_container}  card-header border_color d-flex justify-content-between bg-transparent`}>
          <h3 className={`${styles.heading} mb-0`}>Product Specifications</h3>
        </div>
      </div>
      <div>
        <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
          <div className="d-flex justify-space-between">
            <div className="row w-100 m-1">
              <div className="col-md-12 mb-5 px-0 mx-0 row d-flex justify-content-center">
                <ProductSpecificationsTable />
              </div>

              <span className={`font-weight-bold h4`}>Comments:</span>
              <div className="col-md-12 mb-4 px-0 mx-0 row d-flex flex-column p-3">

                <div className='card p-3 w-50'>
                  {productSpecifications?.comments?.length > 0 ?
                    productSpecifications?.comments?.map((comment, index) => (
                      <div className='p-3'>
                        <div className='d-flex justify-content-center'>
                          <div className={`${index !== 0 && `${styles.styled_comment} pb-4 w-100`}`}></div>
                        </div>
                        <div>
                          <span className='h5 mr-3'>{index + 1}.</span>
                          <span className='h5'>{comment}</span>
                        </div>
                      </div>
                    ))
                    :
                    <div className='h5 p-3 m-auto'>
                      <span>No Record Found</span>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
