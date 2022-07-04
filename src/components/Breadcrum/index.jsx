import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
export default function index({isQuery}) {
  const[show,setShow]=useState({
    units:true,
    currency:true
  })
  useEffect(() => {
    if(isQuery?.match("/leads")||isQuery?.match("/review")) {
      show.units=false
      show.currency=false
      setShow({...show})
    }else if(isQuery?.match("/credit-queue")||isQuery?.match("/termsheet")||isQuery?.match("/margin-money")){
      show.units=false
      show.currency=true
      setShow({...show})
    }
    else if(isQuery?.match("/termsheet/")||isQuery?.match("/margin-money/")){
      show.units=true
      show.currency=true
      setShow({...show})
    }
    else{
       show.units=true
      show.currency=true
      setShow({...show})
    }
  },[isQuery])
 
  const [myUrl, setUrl] = useState([]);
   const [myUrlLength, setUrlLength] = useState([]);
  var url = [];
  const router = useRouter();
  const pageName = useSelector((state) => state?.user.pageName)
 console.log(pageName,"pageName")
  useEffect(() => {
   console.log("here")
    if ("dashboard" == pageName) {
      router.route = "/dashboard";
    }
    if ("leads" == pageName) {
      router.route = "/leads";
    }
 
    if ("review-queue" == pageName) {
      router.route = "/leads" + "/review queue";
    }
     if ("credit-queue" == pageName) {
      router.route = "/leads" + "/credit queue";
    }
      if ("termsheet" == pageName) {
      router.route = "/leads" + "/termsheets";
    }
console.log( router.route," router.route")

    router.route.split("/").map((subRoute, index) => {
      console.log(subRoute,"subRoute")

      if (subRoute !== "") {
        if (subRoute == "[id]") {
          // setUrl([...url, router.query.id])
          url.push(router.query.id);
        } else {
          // setUrl([...url, subRoute])
          url.push(subRoute);
        }
      } else {
        // setUrl([...url, "Home"])
        // url.push("");
      }
      if (index === router.route.split("/").length - 1) {
        setUrl(url);
        setUrlLength(url.length)

      }
    });
  }, [pageName]);
  console.log(myUrl,"url")
  return (
    <div className={`${styles.main_container} d-flex justify-content-between background1`}>
      <div>
        <img src="/static/home.svg"></img>
        <div className={`${styles.breadcrumItem}`}>
          {myUrl.map((val,index)=>{
            {console.log(myUrl.length-1==index,"val")}
            return(
               <div key={index} className={`${styles.breadcrumcontainer} ${myUrlLength-1==index?`${styles.highlight}`:null}`}>
              <span>/</span>
              <span className={`${styles.value}`}>{val.toUpperCase()}</span>
            </div>
            )
          })}
        </div>
     </div>
      <div className={`${styles.unit_container} d-flex`}>
           {show.units?<div className="mr-0 mr-sm-2">
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Units :
            </h5>
            <select className={`${styles.options} accordion_DropDown`}>
              <option>Crores</option>
            </select>
           </div>:null}
           {show.currency? <div>
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Currency :
            </h5>
            <select className={`${styles.options} bg-transparent px-0 accordion_DropDown`}>
              <option>INR</option>
            </select>
           </div>:null}
          </div>
          </div>
   
  )
}