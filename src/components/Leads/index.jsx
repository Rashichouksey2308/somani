import React ,{useState,useEffect}from 'react'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'
function index(props) {
  const [data,setData]=useState({
    all:0,
    approved:0,
    inprocess:0,
    rejected:0
  })
  useEffect(() => {
    if(props?.data?.length > 0) {
      let inprocess=0
      let approved=0
      let rejected=0
      let all=0
    props?.data.forEach((val,index)=>{
      console.log(val.total,"val.total",val._id)
      if(val._id=="ReviewQueue"){
        console.log("vlllllll")
        inprocess=val.total
        
      }
      if(val._id=="CreditQueue"){
        approved=val.total
       
      }
      if(val._id=="Rejected"){
        rejected=val.total
        
      }
    })
    setData({
    all:0,
    approved:approved,
    inprocess:inprocess,
    rejected:rejected
   })
    }
  },[props.data])
  console.log(data,"data121")
  return (
    <Card className={`${styles.card} border`}>
      <Card.Header className={`${styles.header} heading_card border_color`}> {props.header} </Card.Header>
      <Card.Body className={styles.body}>
        <div className={styles.leads}>
          <div className={styles.leadsSub}>
            <img src={`${props.image}`} className={styles.image}></img>
          </div>
          <div className={styles.lead_headContainer}>
            <div className={styles.lead_header}>{props.subHeader}</div>
            <div className={`${styles.lead_value} heading`}>{data.all}</div>
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.lead_headContainer}>
          <div className={styles.lead_header}>{props.content[0]}</div>
          <div className={styles.lead_value} style={{ color: '#43C34D' }}>
            {data.approved}
          </div>
        </div>
        <div className={styles.lead_headContainer}>
          <div className={styles.lead_header}>{props.content[1]}</div>
          <div className={styles.lead_value} style={{ color: '#FF9D00' }}>
            {data.inprocess}
          </div>
        </div>
        <div className={styles.lead_headContainer}>
          <div className={styles.lead_header}>{props.content[2]}</div>
          <div className={styles.lead_value} style={{ color: '#EA3F3F' }}>
            {data.rejected}
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default index
