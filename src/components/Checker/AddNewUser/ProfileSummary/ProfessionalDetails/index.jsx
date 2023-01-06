import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import DateCalender from '../../../../DateCalender';
import Tooltip from '../../../../Tooltip';

const format = (inputDate) => {
    if (inputDate) {
        let formatDate = new Date(inputDate);
        let date, month, year;

        date = formatDate.getDate();
        month = formatDate.getMonth() + 1;
        year = formatDate.getFullYear();

        date = date
            .toString()
            .padStart(2, '0');

        month = month
            .toString()
            .padStart(2, '0');

        return `${date}-${month}-${year}`;
    }
    return '';
}

function Index({ professionalDetails, remarks, professionalDetailsHistory }) {
    return (
        <div className={`${styles.main} mt-4 card border_color`}>
            <div
                className={`${styles.head_container} card-header border_color d-flex justify-content-between bg-transparent`}
                data-toggle="collapse"
                data-target="#keyAddress"
                aria-expanded="true"
                aria-controls="keyAddress"
            >
                <h3 className={`${styles.heading} mb-0`}>Professional Details</h3>
                <span>+</span>
            </div>
            <div id="keyAddress" className="collapse" aria-labelledby="keyAddress">
                <div className={`${styles.dashboard_form} vessel_card card-body m-3`}>
                    <div className="d-flex justify-space-between">
                        <div className="row w-100">
                            <div className="col-md-12 mb-5">
                                <div className={`font-weight-bold label_heading mb-2`}>
                                    User Role
                                </div>
                                <div className='font-weight-light h5'>
                                    <span className={`${JSON.stringify(professionalDetails?.userRole) !== JSON.stringify(professionalDetailsHistory?.userRole) && styles.highlighted_field}`}>
                                        {professionalDetails?.userRole?.length ?
                                            professionalDetails?.userRole.map((role) => (
                                                <span className='badge badge-outline mr-2'>{role}</span>
                                            ))
                                            :
                                            <span>--</span>
                                        }
                                    </span>
                                    { JSON.stringify(professionalDetails?.userRole) !== JSON.stringify(professionalDetailsHistory?.userRole)
                                        &&
                                        <Tooltip data={professionalDetailsHistory?.userRole?.join(', ')} />
                                    }
                                </div>
                            </div>
                            {
                                professionalDetails?.company.map((comp) => (
                                     professionalDetailsHistory?.company.map((compHistory) => (
                                        (comp._id === compHistory._id) && <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                            <div className="col-md-4 col-sm-6">
                                                <div className={`mb-2 font-weight-bold label_heading`}>
                                                    Company/Business Name
                                                </div>
                                                <div className='font-weight-light h5 d-flex align-items-center'>
                                                    <span className={`${(comp._id === compHistory._id) && compHistory?.companyName !== comp?.companyName && styles.highlighted_field}`}>
                                                        { comp._id === compHistory._id && comp?.companyName}
                                                    </span>
                                                    {(comp._id === compHistory._id) && compHistory?.companyName !== comp?.companyName && <Tooltip data={compHistory?.companyName} /> }
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className={`mb-2 font-weight-bold label_heading`}>
                                                    Branch
                                                </div>

                                                <div className='d-flex align-items-center'>
                                                    <span className={`${(comp._id === compHistory._id) && JSON.stringify(comp?.companyBranch) !== JSON.stringify(compHistory?.companyBranch) && styles.highlighted_field} d-flex`}>
                                                        {comp?.companyBranch.length ?
                                                            comp?.companyBranch.map((branch) => (
                                                                <div className='font-weight-light'>
                                                                    <span className='badge badge-outline mr-2'>{branch}</span>
                                                                </div>
                                                            ))
                                                            :
                                                            <span>--</span>
                                                        }
                                                    </span>
                                                    {(comp._id === compHistory._id) && JSON.stringify(comp?.companyBranch) !== JSON.stringify(compHistory?.companyBranch)
                                                        &&
                                                        <Tooltip data={compHistory?.companyBranch?.join(', ') || '--'} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                                ))
                                                ))
                            }

                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Department
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${professionalDetailsHistory?.department !== professionalDetails?.department && styles.highlighted_field}`}>
                                            {professionalDetails?.department || '--'}
                                        </span>
                                        { professionalDetailsHistory?.department !== professionalDetails?.department && <Tooltip data={professionalDetailsHistory?.department || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        EMP ID
                                    </div>
                                    <div className='font-weight-light h5'>
                                    <span className={`${professionalDetailsHistory?.empId !== professionalDetails?.empId && styles.highlighted_field}`}>
                                        {professionalDetails?.empId || '--'}
                                    </span>
                                        { professionalDetailsHistory?.empId !== professionalDetails?.empId && <Tooltip data={professionalDetailsHistory?.empId || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Designation
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${professionalDetailsHistory?.designation !== professionalDetails?.designation && styles.highlighted_field}`}>
                                            {professionalDetails?.designation || '--'}
                                        </span>
                                        { professionalDetailsHistory?.designation !== professionalDetails?.designation && <Tooltip data={professionalDetailsHistory?.designation || '--'} />}
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Reporting Manager
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${professionalDetailsHistory?.reportingManager !== professionalDetails?.reportingManager && styles.highlighted_field}`}>
                                            {professionalDetails?.reportingManager || '--'}
                                        </span>
                                        { professionalDetailsHistory?.reportingManager !== professionalDetails?.reportingManager && <Tooltip data={professionalDetailsHistory?.reportingManager || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Alternate Email ID
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${professionalDetailsHistory?.alternateEmailId !== professionalDetails?.alternateEmailId && styles.highlighted_field}`}>
                                            {professionalDetails?.alternateEmailId || '--'}
                                        </span>
                                        { professionalDetailsHistory?.alternateEmailId !== professionalDetails?.alternateEmailId && <Tooltip data={professionalDetailsHistory?.alternateEmailId || '--'} />}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className={`mb-2 font-weight-bold label_heading`}>
                                                Date Of Joining
                                            </div>
                                            <div className='font-weight-light h5'>
                                                <span className={`${professionalDetailsHistory?.dateOfJoining !== professionalDetails?.dateOfJoining && styles.highlighted_field}`}>
                                                    {format(professionalDetails?.dateOfJoining) || '--'}
                                                </span>
                                                { professionalDetailsHistory?.dateOfJoining !== professionalDetails?.dateOfJoining && <Tooltip data={format(professionalDetailsHistory?.dateOfJoining) || '--'} />}
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className={`mb-2 font-weight-bold label_heading`}>
                                                Last Working Day
                                            </div>
                                            <div className='font-weight-light h5'>
                                                <span className={`${professionalDetailsHistory?.lastWorkingDay !== professionalDetails?.lastWorkingDay && styles.highlighted_field}`}>
                                                    {format(professionalDetails?.lastWorkingDay) || '--'}
                                                </span>
                                                { professionalDetailsHistory?.lastWorkingDay !== professionalDetails?.lastWorkingDay && <Tooltip data={format(professionalDetailsHistory?.lastWorkingDay) || '--'} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 mb-5 px-0 mx-0 row'>
                                <div className="col-md-4 col-sm-6">
                                    <div className={`mb-2 font-weight-bold label_heading`}>
                                        Remarks
                                    </div>
                                    <div className='font-weight-light h5'>
                                        <span className={`${professionalDetailsHistory?.remarks !== professionalDetails?.remarks && styles.highlighted_field} mr-5`}>
                                            {remarks || '--'}
                                        </span>
                                            { professionalDetailsHistory?.remarks !== professionalDetails?.remarks && <Tooltip data={professionalDetailsHistory?.remarks || '--'} />}
                                        {/* <button className='btn btn-outline-primary-custom font-weight-bold py-0 ml-5'>View Document</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index