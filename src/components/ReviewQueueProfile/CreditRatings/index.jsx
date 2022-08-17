/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from '../profile.module.scss'
import moment from "moment"
function
  Index({ creditRating }) {
  const [dates, setDates] = useState([])
  const [filteredCredit, setFilteredCredit] = useState([])



  useEffect(() => {
    let array1 = []
    let finalarray = []
    creditRating?.forEach((item) => {
      let year = (item.dateOfIssuance)?.slice(0, 4)
      array1.push(year)
    })
    finalarray = [...new Set(array1)]
    let tempdates = finalarray.sort((a, b) => b - a).slice(0, 3)
    setDates(tempdates)

  }, [creditRating])
  console.log(dates, 'jdhgkghfgadsklj')


  useEffect(() => {


    const filteredArray = []
    creditRating?.forEach(element => {
      if (
        element?.dateOfIssuance?.slice(0, 4) === dates[0] ||
        element.dateOfIssuance?.slice(0, 4) === dates[1] ||
        element.dateOfIssuance?.slice(0, 4) === dates[2]) {
        filteredArray.push(element)
      }
      console.log(element?.dateOfIssuance?.slice(0, 4), dates[0], 'filteredArray')
    });

    console.log(filteredArray, 'filteredArray')
    setFilteredCredit(filteredArray);

  }, [dates])


  // console.log(creditRating, "creditRating")
  return (
    <>
      <div className={`${styles.card} card mb-6`}>
        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#creditRatings" aria-expanded="true" aria-controls="creditRatings">
          <h2 className="mb-0">Credit Ratings</h2>
          <span>+</span>
        </div>
        <div id="creditRatings" className="collapse" aria-labelledby="creditRatings" data-parent="#profileAccordion">
          <div className={`${styles.borderTable} ${styles.cardBody} card-body border_color`}>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th width="10%" rowSpan="2">DATE</th>
                      <th width="15%" rowSpan="2">RATING AGENCY</th>
                      <th width="15%" rowSpan="2">TERM</th>
                      <th width="28%" rowSpan="2">INSTRUMENT</th>
                      <th width="8%" rowSpan="2" className="text-center">CHANGE<br />IN RATING</th>
                      <th colSpan="3" className="text-center">CREDIT RATING</th>
                    </tr>
                    <tr>
                      <th width="8%" className="text-center">{dates[0]}</th>
                      <th width="8%" className="text-center">{dates[1]}</th>
                      <th width="8%" className="text-center">{dates[2]}</th>
                    </tr>
                  </thead>
                  <tbody>

                    {filteredCredit && filteredCredit?.map((rating, index) => {

                      return (
                        <tr key={index}>
                          <td>{moment((rating?.dateOfIssuance)?.slice(0, 10)).format("DD-MM-YYYY")}</td>
                          <td>{rating?.ratingAgency}</td>
                          <td>{rating?.ratingTerm}</td>
                          <td>{rating?.instrument}</td>
                          <td className="text-center"><img src={rating?.outlook === 'Negative' ? "/static/arrow-down-red.svg" : "/static/arrow-up-green.svg"} alt="Arrow Red" className="img-fluid" /></td>
                          {rating?.dateOfIssuance?.slice(0, 4) === dates[0] ? <td className={`${rating?.outlook === 'Positive' ? styles.positive : rating?.outlook === 'Negative' ? styles.negative : styles.stable} text-center`}>
                            {rating?.rating_}<span>({rating?.outlook})
                            </span></td> :
                            <td className="text-center">-</td>}
                          {rating?.dateOfIssuance?.slice(0, 4) === dates[1] ? <td className={`${rating?.outlook === 'Positive' ? styles.positive : rating?.outlook === 'Negative' ? styles.negative : styles.stable} text-center`}>
                            {rating?.rating_}<span>({rating?.outlook})
                            </span></td> :
                            <td className="text-center">-</td>}
                          {rating?.dateOfIssuance?.slice(0, 4) === dates[2] ? <td className={`${rating?.outlook === 'Positive' ? styles.positive : rating?.outlook === 'Negative' ? styles.negative : styles.stable} text-center`}>
                            {rating?.rating_}<span>({rating?.outlook})
                            </span></td> :
                            <td className="text-center">-</td>}

                        </tr>)

                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index