import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Toggle from '../../../..//Toggle/index';

const tableHooks = (hooks) => {
  hooks.visibleColumns.push((columns) => [
    ...columns,
    {
      id: 'Preview',
      Header: 'Action',
      Cell: ({ row }) => {
        return (
          <div className="d-flex">
            <div className={`${styles.action_image} img-fluid badge badge-outline mr-4`}>
              <Link href={`/masters/order-history/`}>
                <Image height="30px" width="30px" src="/static/mode_edit.svg" alt="Edit" />
              </Link>
            </div>
            <div className={`${styles.action_image} img-fluid badge badge-outline`}>
              <Link href={`/masters/order-history/`}>
                <Image height="30px" width="30px" src="/static/delete.svg" alt="Edit" />
              </Link>
            </div>
          </div>
        );
      },
    },
  ]);
};
const onToggle = (state) => {};
export class Index extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={`${styles.main} vessel_card mt-4 card border_color`}>
        <Toggle onToggle={onToggle}>
          {({ on, onToggle }) => (
            <div onClick={onToggle}>
              <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#AuthorisedSignatoriesDetails"
                aria-expanded="true"
                aria-controls="keyAddress"
              >
                <h3 className={`${styles.heading} mb-0`}>Authorised Signatories Details</h3>
                <span>{on ? '+' : '-'}</span>
              </div>
              <div id="AuthorisedSignatoriesDetails" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                  <div className="d-flex justify-space-between">
                    <div className="row w-100">
                      <div className="col-md-12 mb-5 px-0 mx-0 row">
                        <div className="col-md-4 col-sm-6">
                          <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                          <div className="font-weight-light h5">John doe</div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className={`mb-2 font-weight-bold label_heading`}>Email</div>
                          <div className="font-weight-light h5">abc@email.com</div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className={`mb-2 font-weight-bold label_heading`}>Designation</div>
                          <div className="font-weight-light h5">Manager</div>
                        </div>
                      </div>

                      <div className="col-md-12 mb-5 px-0 mx-0 row">
                        <div className="col-md-4 col-sm-6">
                          <div className={`mb-2 font-weight-bold label_heading`}>Name</div>
                          <div className="font-weight-light h5">John doe</div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className={`mb-2 font-weight-bold label_heading`}>Email</div>
                          <div className="font-weight-light h5">abc@email.com</div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className={`mb-2 font-weight-bold label_heading`}>Designation</div>
                          <div className="font-weight-light h5">Manager</div>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    );
  }
}

export default Index;
