/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getGenericData } from '../../src/redux/generic/actionsType'

import { setPageName,setDynamicName } from '../../src/redux/userData/action'

function Index(props) {
  console.log("🚀 ~ file: index.jsx ~ line 14 ~ Index ~ props", props)
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()
 const [genData,setData]=useState([])
  
  const { generic } = useSelector((state) => state.generic.allGeneric)
  console.log(genData,"generic22131")

 useEffect(() => {
    dispatch(setPageName('agreemnent'))
    dispatch(setDynamicName(null))
  })
 useEffect(() => {
   getDate()
  },[])

const getDate = async () =>{

 let data = await dispatch(getGenericData())
 console.log(data,"dgeneric22131ata")
 setData(data)
}


  const handleRoute = (term) => {
   
    sessionStorage.setItem('genericSelected', JSON.stringify(term))
    Router.push("/agreement")
     dispatch(setDynamicName(term))
    // Router.push('/lc-module')
  }

  return (
    <>
      {' '}
      <div className={`${styles.container} container-fluid p-0 border-0`}>
        <div className={styles.leads_inner}>
          {/*filter*/}
          <div className={`${styles.filter} d-flex align-items-center`}>

            

               <div className={styles.search}>
              <div className="input-group">
                <div
                  className={`${styles.inputGroupPrepend} input-group-prepend`}
                >
                  <img
                    src="/static/search.svg"
                    className="img-fluid"
                    alt="Search"
                  />
                </div>
                <input
                  type="text"
                  className={`${styles.formControl} form-control formControl `}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

         
          {/*leads table*/}
          <div className={`${styles.datatable} datatable card`}>
            <div
              className={`${styles.tableFilter} d-flex align-items-center justify-content-between`}
            >
              <h3 className="heading_card">Agreements</h3>
              <div
                className={`${styles.pageList} d-flex justify-content-end align-items-center`}
              >
                <span>
                  Showing Page {currentPage + 1} out of{' '}
                  {Math.ceil(generic?.length / 10)}
                </span>
                <a
                  onClick={() => {
                    if (currentPage === 0) {
                      return
                    } else {
                      setCurrentPage((prevState) => prevState - 1)
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.leftArrow} arrow`}
                >
                  {' '}
                  <img
                    src="/static/keyboard_arrow_right-3.svg"
                    alt="arrow right"
                    className="img-fluid"
                  />
                </a>
                <a
                  onClick={() => {
                    if (currentPage + 1 < Math.ceil(genData?.length / 10)) {
                      setCurrentPage((prevState) => prevState + 1)
                    }
                  }}
                  href="#"
                  className={`${styles.arrow} ${styles.rightArrow} arrow`}
                >
                  <img
                    src="/static/keyboard_arrow_right-3.svg"
                    alt="arrow right"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table`}
                  cellPadding="0"
                  cellSpacing="0"
                  border="0"
                >
                  <thead>
                    <tr className="table_row">
                      <th >ORDER ID <img className={`mb-1`} src="/static/icons8-sort-24.svg" /></th>
                    
                      <th>COMPANY NAME </th>
                      <th>Customer ID</th>
                    

                    </tr>
                  </thead>
                  {genData?.length>0 && genData?.map((term, index) => (<tbody Key={index}>

                    <td >
                      {term?.company._id}
                    </td>
                    <td className={`${styles.buyerName}`} onClick={() => handleRoute(term)} >{term?.company.companyName}</td>

                    <td >{term?.company.customerId}</td>
                    {/* <td>{term?.order?.createdAt?.slice(0, 10)}</td> */}
                    {/* <td>
                      <span
                        className={`${styles.status} ${term?.order?.queue === 'Rejected' ? styles.rejected : term?.order?.queue === 'ReviewQueue'
                          ? styles.review
                          : term?.order?.queue === 'CreditQueue'
                            ? styles.approved
                            : styles.rejected
                          }`}
                      ></span>

                      {term?.order?.queue === 'Rejected' ? 'Rejected' : term?.order?.queue === 'ReviewQueue'
                        ? 'Review'
                        : term?.order?.queue === 'CreditQueue'
                          ? 'Approved'
                          : 'Rejected'}
                    </td> */}



                  </tbody>))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// export async function getServerSideProps(context) {
//   try {
//     console.log("inside123", context.req.cookies['SOMANI']);
//     let cookie = context.req.cookies['SOMANI']
//    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
//   console.log("inside fetch2222");
//   let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
//   var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }

//   var result = await fetch(`${API.corebaseUrl}/api/core/generic`, {
//       method: "GET",
//       headers: headers,
//       // body: urlencoded,
//       redirect: "follow",
//     }).then((response) => response.json());

   
  
//    console.log(result,"thi sis result123")
   
 

//     if (result.code === 200) {
//       return {
//         props: {
//           pageProps: result.data,
         
         
//         },
//       };
//     } else {

//       return {
//         props: { pageProps: result.data},
//       };
//     }
//   } catch (error) {
//     console.log(error)
//     return {}
//   }
// }
export default Index
