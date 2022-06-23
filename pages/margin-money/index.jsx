import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from './index.module.scss'
import RevisedMargin from '../../src/components/RevisedMargin'
import { Form } from 'react-bootstrap'
import useDarkMode from 'use-dark-mode';
import UploadOther from '../../src/components/UploadOther'


import {Row,Col} from 'react-bootstrap'
function Index() {
   const darkMode = useDarkMode(false);
    return (
        <div className={`${styles.dashboardTab} tabHeader w-100`}>
            <div className={`${styles.tabHeader} tabHeader `}>
              <div className="d-flex align-items-center">
                <h1 className={`${styles.title} heading`}><img src={`${darkMode.value?`/static/white-arrow.svg`:`/static/arrow-right.svg`}`} alt="arrow right" className="img-fluid image_arrow" />Margin Money</h1>
                <div className="ml-auto">
                  <button type="button" className={`${styles.btnPrimary} btn btn-primary`}><img src="/static/refresh.svg" alt="refresh" className="img-fluid" />Update Info</button>
                  <div className={`${styles.lastModified} text `}><span>Last Modified:</span> 28 Jan,11:34am</div>
                </div>
              </div>
              <ul className={`${styles.navTabs} nav nav-tabs`}>
                  <li className={`${styles.navItem}  nav-item`}>
                      <a className={`${styles.navLink} navLink  nav-link active`} data-toggle="tab" href="#Margin" role="tab" aria-controls="Margin" aria-selected="true">Margin Money</a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} navLink nav-link`} data-toggle="tab" href="#revisedMargin" role="tab" aria-controls="revisedMargin" aria-selected="false">Revised Margin Money</a>
                  </li>
                  {/* <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} navLink nav-link`} data-toggle="tab" href="#gst" role="tab" aria-controls="GST" aria-selected="false">Payment</a>
                  </li> */}
                  <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} navLink nav-link`} data-toggle="tab" href="#Documents" role="tab" aria-controls="Documents" aria-selected="false">Document</a>
                  </li>
             
              </ul>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12  accordion_body">
                        <div className={`${styles.tabContent} tab-content`}>
                            <div className="tab-pane fade show active" id="Margin" role="tabpanel">
                                    <div className={`${styles.card}  accordionMargin card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between`} data-toggle="collapse" data-target="#commodityAccordion" aria-expanded="true" aria-controls="commodityAccordion">
                                         <div className={`${styles.commodity}`}>
                                           <span className={`${styles.comm_head} sub_heading mb-2`}>Commodity</span>
                                           <span className={`${styles.comm_val} heading`}>Thermal Coal</span>
                                         </div>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <div className={`${styles.pay} mr-5`}>
                                          <strong className={`mr-2`}>Status</strong>
                                          <div className={`d-flex align-items-center justify-content-between`}>
                                            <div className={`${styles.round} mr-2`}></div>
                                            <span className={`heading`}>Payment Initiated</span>
                                          </div>
                                          </div> 
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                        </div>
                                        <div id="commodityAccordion" className="collapse" aria-labelledby="commodityAccordion" data-parent="#commodityAccordion">
                                            <div className={`${styles.cardBody} card-body `}>
                                                   <div className={`${styles.content} border_color`}>
                                                     <div className={`${styles.input_container} row`}>
                                                  <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>A</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                         Quantity<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val}  heading`}>55,000 MT</div>
                                                        </div>
                                                  </div>
                                                    <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>B</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                         Unit Price<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading`}>USD 70</div>
                                                        </div>
                                                  </div>
                                                      <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>C</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                         Conversion Rate<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading`}>75</div>
                                                        </div>
                                                  </div>
                                                       <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>D</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                        Usance Interest (%) (For 90 Days)<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading d-flex align-items-center`}>4%
                                                         <div className={` d-flex align-items-center`}>
                                                        <label className={`${styles.label_heading} ml-3 label_heading mb-0`} id="textInput">Include in Calculation
                                                         
                                                         </label>
                                                                                                 <Form>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} className={`${styles.radio_group} d-flex ml-3`}>
                                                            <Form.Check
                                                                className={`${styles.radio} radio`}
                                                                inline
                                                                label="Yes"
                                                                
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <Form.Check
                                                                className={`${styles.radio} radio`}
                                                                inline
                                                                label="No"
                                                                
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />

                                                            
                                                            </div>
                                                        ))}
                                                        </Form>
                                                         </div>
                                           
                    
                                                         </div>
                                                        </div>
                                                  </div>
                                                    <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>E</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                         Trade Margin (%)<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading`}>75</div>
                                                        </div>
                                                  </div>
                                                    <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>F</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                        Tolerance (+/-) Percentage<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading`}>75</div>
                                                        </div>
                                                  </div>
                                                  <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>G</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                       Margin Money (%)<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading`}>75</div>
                                                        </div>
                                                  </div>
                                                   <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                                      <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                                        <span>F</span>
                                                      </div>
                                                        <div className={`${styles.val_wrapper} ml-3`}>
                                                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                                                     {` No. of PDC's`}<strong className='text-danger'>*</strong>
                                                        </label>
                                                         <div className={`${styles.val} heading`}>75</div>
                                                        </div>
                                                  </div>
                                                  </div>
                                                   </div>
                                                   <div className={`${styles.content} border_color`}>
                            <span>Calculation</span>
                             <div className={`${styles.input_container} row`}>
                         
                                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>J</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                               Order Value <strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(A*B)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
          
                                <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>K</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Order Value (INR) <strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(J*C)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                              <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>L</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                           Usance Interest (%) for 90 days (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(K*D*90/365)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                             <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>M</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                           Trade Margin (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(K*E)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                             <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>N</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                           Gross Order Value (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(K+L+M)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                           
                          <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>O</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                          Tolerance Value (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(N*F)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                          <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>P</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                          Total Order Value (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(N+O)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                          <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>Q</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                          Provisional Unit Price Per Ton (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(N/A)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                          <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>R</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                          Margin Money (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(P*G)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                          <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>S</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                          Total SPDC Amount Req. (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(P-R)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                          <div className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                              <div className={`${styles.alphabet} d-flex justify-content-center align-content-center`}>
                                <span>T</span>
                              </div>
                                <div className={`${styles.val_wrapper} ml-3`}>
                                    <label className={`${styles.label_heading} label_heading`} id="textInput">
                          Amount per SPDC (INR)<strong className='text-danger'>*</strong><span className={`${styles.blue}`}>{`(S/H)`}</span>
                                </label>
                                 <div className={`${styles.val} heading`}>USD 38,50,000.00</div>
                                </div>
                          </div>
                          </div>
                           </div>   
                                        </div>
                                    </div>
                                 
                            </div>

                            <div className={`${styles.card}  accordionMargin card`}>
            <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between`} data-toggle="collapse" data-target="#invoiceDetails" aria-expanded="true" aria-controls="invoiceDetails">
                <h2 className="mb-0">Invoice Details</h2>
                <span className='ml-3'>+</span>
            </div>
            <div id="invoiceDetails" className="collapse" aria-labelledby="invoiceDetails" data-parent="#invoiceDetails">
                <div className={`${styles.cardBody} card-body `}>
                    <div className={`${styles.content} border_color`}>
                        <div className={`${styles.input_container} row`}>
                    <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Buyer Name<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                    <select
                        id="Code"
                    
                        name="typeOfBussiness"
                        className={`${styles.input_field} input form-control`}
                        required
                    >
                        <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Trading">Trading</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}  id="textInput">
                        Buyer GSTIN<strong className='text-danger'>*</strong>
                    </label>
                    </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Buyer Address<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                    <div className={`${styles.radio_form} col-md-12`}>
                            <div className={`${styles.label_heading} label_heading`}>Is Consignee same as Buyer<strong className='text-danger'>*</strong></div>
                            <Form>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className={styles.radio_group}>
                                <Form.Check
                                    className={`${styles.radio} radio`}
                                    inline
                                    label="Yes"
                                    onChange={() => saveOrderData("IncoTerms", "FOB")}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    className={`${styles.radio} radio`}
                                    inline
                                    label="No"
                                    onChange={() => saveOrderData("IncoTerms", "CFR")}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />

                                
                                </div>
                            ))}
                            </Form>
                        </div>
                            <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Consignee Name
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                    <select
                        id="Code"
                    
                        name="typeOfBussiness"
                        className={`${styles.input_field} input form-control`}
                        required
                    >
                        <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Trading">Trading</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}  id="textInput">
                    Consignee GSTIN<strong className='text-danger'>*</strong>
                    </label>
                    </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Consignee Address<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                    <div className={`${styles.radio_form} col-md-12`}>
                            <div className={`${styles.label_heading} label_heading`}>Is Consignee same as Buyer <span className='ml-4'>{`Comments: In Case User Selects "No"`}</span></div>
                            <Form>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className={styles.radio_group}>
                                <Form.Check
                                    className={`${styles.radio} radio`}
                                    inline
                                    label="Yes"
                                    onChange={() => saveOrderData("IncoTerms", "FOB")}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    className={`${styles.radio} radio`}
                                    inline
                                    label="No"
                                    onChange={() => saveOrderData("IncoTerms", "CFR")}
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />

                                
                                </div>
                            ))}
                            </Form>
                        </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Consignee Name
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                    <select
                        id="Code"
                    
                        name="typeOfBussiness"
                        className={`${styles.input_field} input form-control`}
                        required
                    >
                        <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Trading">Trading</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}  id="textInput">
                    Consignee GSTIN<strong className='text-danger'>*</strong>
                    </label>
                    </div>
                        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Consignee Address<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                    </div>
                    </div>
                    <div className={`${styles.content} border_color`}>
                        <div className={`${styles.input_container} row`}>
                    <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Importer Name<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                    <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Branch Office<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                            Company Address<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                    <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Importer GSTIN<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Bank Name<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Branch<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                        Branch Address<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                    IFSC Code<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                        <div className={`${styles.each_input} col-md-3 col-sm-6`}>
                            <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                            
                                className={`${styles.input_field} input form-control`}
                                required
                            />
                            <label className={`${styles.label_heading} label_heading`} id="textInput">
                    A/C Number<strong className='text-danger'>*</strong>
                            </label>
                    </div>
                    
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>

                            <div className="tab-pane fade" id="revisedMargin" role="tabpanel">
                                <div className={`${styles.card}  accordion_body`}>
                                  <RevisedMargin/>
                    
                                </div>
                            </div>

                            <div className="tab-pane fade" id="Documents" role="tabpanel">
                                <div className={`${styles.card}  accordion_body`}>
                                  <UploadOther/>
                    
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

