import React from 'react'
import {Form} from 'react-bootstrap'
import styles from './index.module.scss'


const index = () => {
  return (
                   <div className={`${styles.main} card border_color mb-4`}>
                    <div className={`${styles.head_container} card-header d-flex justify-content-between bg-transparent`}  data-toggle="collapse" data-target="#recommendations" aria-expanded="true" aria-controls="recommendations">
                    <h3 className={`${styles.heading} mb-0`}>Recommendations</h3>
                    <span>+</span>
                            </div> 
                            <div id="recommendations" className="collapse" aria-labelledby="recommendations" data-parent="#profileAccordion">       
                            <div className={`${styles.dashboard_form} mr-3`}> 
                            <h5 className={styles.sub_heading}>Company Profile</h5>
                            <div className={`${styles.comment_para} d-flex `}>
                            <p className={`${styles.comment}`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='ml-3'>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid mb-3`} alt="edit"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                            </div> 
                              
                        </div>

                        <div className='d-flex mt-4 pb-4'>

                            <input
                                as="textarea"
                                rows={3}
                                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                                className={`${styles.comment_field} form-control`}
                                />
                             <label className={`${styles.label_heading}`}>Comments</label>

                            <img className='img-fluid ml-4' src="/static/add-btn.svg" alt="add button"/>


                        </div>
                    
                            </div>
                            <hr className={styles.line}></hr>
                            <div className={`${styles.dashboard_form} mr-3`}> 
                            <h5 className={styles.sub_heading}>Comments On Financials</h5>
                            <div className={`${styles.comment_para} d-flex `}>
                            <p className={`${styles.comment}`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='ml-3'>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid mb-3`} alt="edit"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                            </div> 
                              
                        </div>

                        <div className='d-flex mt-4 pb-4'>
                            <input
                                as="textarea"
                                rows={3}
                                placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                                className={`${styles.comment_field} form-control`}
                                />
                            <label className={`${styles.label_heading}`}>Comments</label>

                            <img className='img-fluid ml-4' src="/static/add-btn.svg" alt="add button"/>


                        </div>
                    
                            </div>
                            <hr className={styles.line}></hr>
                          
                        <div className={`${styles.datatable} pt-5 datatable`}>
                        <h5>Group Exposure Details</h5>
                        <table
                            className={`${styles.table} table`}
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                        >
                        <thead>
                        <tr>
                            <th>S.NO.</th>
                            <th>NAME OF THE BUYER</th>
                            <th>LIMIT AMOUNT</th>
                            <th>OUTSTANDING LIMIT</th>
                            <th>ACCOUNT CONDUCT</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        <tr className='table_row'>
                            <td className={styles.number}>1</td>
                            <td className='font-weight-bold'>
                            Simport Pvt. Ltd.
                            </td>
                            <td>50 Lakh</td>
                            <td>40 Lakh</td>
                            <td>Good</td>
                            <td>
                            <div>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} mr-3 img-fluid`} alt="edit"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                           </div>
                           </td>
                        </tr>
                        <tr className='table_row'>
                            <td className={styles.number}>2</td>
                            <td><select className={`${styles.dropDown} font-weight-bold heading`}>
                                <option>Simport Pvt. Ltd.</option>
                                <option>Krishna</option>
                                </select></td>
                            <td>
                            <input placeholder='50 Lakh'/>
                            </td>
                            <td> <input placeholder='40 Lakh'/></td>
                            
                            <td><select className={`${styles.dropDown} heading`}>
                                <option>Satisfactory</option>
                                <option>Not Satisfied</option>
                                </select></td>
                            <td>
                           <div>
                               <img src= "/static/save-3.svg" className={`${styles.edit_image} mr-3 img-fluid`} alt="save"/>
                               <img src= "/static/delete 2.svg" className='img-fluid' alt="delete"/>
                           </div>
                            </td>
                        </tr>
                        
                        </tbody>
                        </table>
                        <div className={`${styles.add_image} p-3 d-flex justify-content-end`}>
                            <span>+</span>
                            <div>Add More Rows</div>
                        </div>
                        </div>
                        <span className={styles.view_order}>View Past Orders</span>
                        
                        <hr className={styles.line}></hr>

                         <div className={`${styles.dashboard_form}`}> 
                            <div className={`${styles.sub_heading} value`}>Strengths</div>
                            <div className='d-flex mt-5 pb-4'>
                                <input
                                    as="textarea"
                                    rows={3}
                                    placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                                    className={`${styles.comment_field} input form-control`}
                                    />
                                 <label className={`${styles.label_heading} label_heading`}>Comments</label>

                                <img className='img-fluid ml-4' src="/static/add-btn.svg" alt="add button"/>


                            </div>
                            <div className={`${styles.strength} value`}>Strengths</div>
                            <div className='d-flex justify-content-between'>
                            <p className={`${styles.paragraph} value`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='mt-3'>
                               <img src= "/static/delete 2.svg" className='img-fluid mr-4' alt="delete"/>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid`} alt="edit"/>
                            </div> 
                              
                             </div>
                             <hr></hr>
                             <div className='d-flex justify-content-between'>
                            <p className={`${styles.paragraph} value pt-3`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='mt-3'>
                               <img src= "/static/delete 2.svg" className='img-fluid mr-4' alt="delete"/>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid`} alt="edit"/>
                             </div>   
                             </div>
                            </div>

                            <div className={`${styles.dashboard_form}`}> 
                            <div className={`${styles.sub_heading} value`}>Weakness</div>
                            <div className='d-flex mt-5 pb-4'>
                                <input
                                    as="textarea"
                                    rows={3}
                                    placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                                    className={`${styles.comment_field} form-control`}
                                    />
                                 <label className={`${styles.label_heading} label_heading`}>Comments</label>

                                <img className='img-fluid ml-4' src="/static/add-btn.svg" alt="add button"/>


                            </div>
                            <div className={`${styles.strength} value`}>Weakness</div>
                            <div className='d-flex justify-content-between'>
                            <p className={`${styles.paragraph} value`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='mt-3'>
                               <img src= "/static/delete 2.svg" className='img-fluid mr-4' alt="delete"/>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid`} alt="edit"/>
                            </div> 
                              
                             </div>
                             <hr></hr>

                             <div className='d-flex justify-content-between'>
                            <p className={`${styles.paragraph} value pt-3`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='mt-3'>
                               <img src= "/static/delete 2.svg" className='img-fluid mr-4' alt="delete"/>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid`} alt="edit"/>
                            </div> 
                              
                             </div>

                            
                    
                            </div>

                            
                            <div className={`${styles.sanction_terms} d-flex justify-content-between align-items-center`}>
                            <div className={`${styles.sanction_heading} value`}>Sanction Terms</div>
                            <div className={`${styles.limit_container} d-flex justify-content-center`}>
                                <div className={styles.limit}>Total Limit: <span>1,900.00</span></div>
                                <div className={styles.limit}>Utilised Limit: <span>1,900.00</span></div>
                                <div className={styles.limit}>Available Limit: <span>1,900.00</span></div>

                            </div>
                            </div>
                            <div className='d-flex justify-content-start align-items-center pt-5 pl-5'>
                                <div className={`${styles.form_group} mr-5`}>
                                    <div className={`${styles.label_sanction}`}>Limit Value</div>
                                    <div>100 CR</div>
                                </div>
                                <div className={`${styles.form_group} ml-5 mr-5`}>
                                    <div className={`${styles.label_sanction}`}>Order Value</div>
                                    <div>100 Lakhs</div>
                                </div>
                                
                                <div className={`${styles.form_group} mt-4`} >
                                    <input className={`${styles.input_field} input form-control`} required type="text"/> 
                                    <label className={`${styles.label_heading} label_heading`}>Recommended Order Value</label>

                                </div>
                            </div>

                            <div className={`${styles.dashboard_form}`}> 
                            <div className='d-flex mt-5 pb-4'>
                                <input
                                    as="textarea"
                                    rows={3}
                                    placeholder="Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the"
                                    className={`${styles.comment_field} form-control`}
                                    />
                                 <label className={`${styles.label_heading} label_heading`}>Sanction Condition</label>

                                <img className='img-fluid ml-4' src="/static/add-btn.svg" alt="add button"/>


                            </div>
                            <div className={`${styles.strength} value`}>Weakness</div>
                            <div className='d-flex justify-content-between'>
                            <p className={`${styles.paragraph} value`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='mt-3'>
                               <img src= "/static/delete 2.svg" className='img-fluid mr-4' alt="delete"/>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid`} alt="edit"/>
                            </div> 
                              
                             </div>
                             <hr></hr>

                             <div className='d-flex justify-content-between'>
                            <p className={`${styles.paragraph} value pt-3`}> 
                            Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product. Lorem ipsum is a name for a common type of placeholder text.
                            </p> 
                               <div className='mt-3'>
                               <img src= "/static/delete 2.svg" className='img-fluid mr-4' alt="delete"/>
                               <img src= "/static/mode_edit.svg" className={`${styles.edit_image} img-fluid`} alt="edit"/>
                            </div> 
                              
                             </div>

                            
                    
                            </div>

                        </div>
                        </div> 
                         
                    
                            
  )
}

export default index
