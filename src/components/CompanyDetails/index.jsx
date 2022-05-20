import React from 'react'
import styles from './index.module.scss'
import {Form} from 'react-bootstrap'




const index = () => {

          return (
            <div className={styles.main}>
            <div className={styles.heading}>Company Profile</div>
            <div className={styles.radio_form}>
                <div className={styles.sub_heading}>Transaction Type</div>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                        <Form.Check
                            className={styles.radio}
                            inline
                            label="Domestic"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                             className={styles.radio}
                            inline
                            disabled
                            label="International"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
                    </Form>
            </div>

            <div className={styles.input_container}>
                <div className={styles.each_input}>
                    <label className={styles.label_heading} id="textInput">Company PAN</label>
                  <input 
                  type="text"
                  id="textInput"
                  value="IDKOP3409G"
                  className={styles.input_field} />

                </div>

                <div className={styles.each_input}>
                    <label className={styles.label_heading} id="textInput">Company Name</label>
                  <input 
                  type="text"
                  value="Ramakrishna Traders"
                  id="textInput"
                  className={styles.input_field} />

                </div>

                <div className={styles.each_input}>
                    <label className={styles.label_heading} id="drop">GST</label>
                  <select
                  id="drop"
                  className={styles.input_field} >
                      <option value="gst">27AAATW4183C2ZG</option>
                      <option value="gst1">282176JDEJ88UD</option>
                      <option value="gst2">27AAATW46786C2ZG</option>
                      <option value="gst3">VW5688TW4183C2ZG</option>


                  </select>

                </div>


            </div>

            <div className={styles.input_container}>
                <div className={styles.each_input}>
                    <label className={styles.label_heading} id="textInput">Type Of Business</label>
                  <input 
                  type="text"
                  id="textInput"
                  value="Manufacturer"
                  className={styles.input_field} />

                </div>

                <div className={styles.each_input}
                >
                 <label className={styles.label_heading} id="textNumber">Phone</label>
                <div className={styles.phone_card}>
                <select id="Code" className={styles.code_phone}>
                    <option>+91</option>
                    <option>+1</option>
                    <option>+92</option>
                    <option>+95</option>
                    <option>+24</option>

                </select>
                <input type="text"
                   value="9876543210"
                  id="textNumber"
                  className={styles.input_field}
                 
                  />

                 </div>
                </div>

                <div className={styles.each_input}>
                    <label className={styles.label_heading} id="textInput">Email ID</label>
                  <input 
                  type="text"
                  value="johndow@email.com"
                  id="textInput"
                  className={styles.input_field} />

                </div>


            </div>

            <div className={styles.input_container}>
                <div className={styles.each_input}>
                 <div className={styles.label_heading}
                 style={{marginTop:10}}>Turn Over(in Crores)</div>  
                <div className={styles.slidecontainer}>
                    <input type="range" min="0" max="100" step="20"
                    list="tickmarks"
                    className={styles.slider} id="myRange"/>
                    <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="20" label="20"></option>
                    <option value="40" label="40"></option>
                    <option value="60" label="60"></option>
                    <option value="80" label="80"></option>
                    <option value="100" label="100"></option>
                    </datalist>
                    </div>
              
                </div>
                <div className={styles.each_input}
                style={{marginTop:-30}}>
                <div className={styles.radio_form}
                style={{paddingLeft:10}}>
                <div className={styles.sub_heading}
                >Communication Mode</div>
                <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className={styles.radio_group}>
                        <Form.Check
                            className={styles.radio}
                            inline
                            label="Email ID"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                             className={styles.radio}
                            inline
                            disabled
                            label="SMS"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />

                        <Form.Check
                             className={styles.radio}
                            inline
                            label="Whatsapp"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
                    </Form>
           

                </div>
                </div>

                <div className={styles.each_input}
                style={{marginLeft:25}} >
                    <label className={styles.label_heading} id="drop">Whatsapp Number(Optional)</label>
                    <div className={styles.phone_card}>
                <select id="Code" className={styles.code_phone}>
                    <option>+91</option>
                    <option>+1</option>
                    <option>+92</option>
                    <option>+95</option>
                    <option>+24</option>

                </select>
                <input type="text"
                   value="9876543210"
                  id="textNumber"
                  className={styles.input_field}
                  //style={{ width:360}}
                  />

                 </div>

                </div>


            </div>
      
          </div>
          );
        }
    
    
  
export default index
