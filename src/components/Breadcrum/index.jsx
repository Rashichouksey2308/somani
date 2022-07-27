import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
export default function Index({isQuery}) {
  const[show,setShow]=useState({
    units:true,
    currency:true
  })
  useEffect(() => {
 
    if(isQuery?.match("/leads")||isQuery?.match("/order-list") 
    ||isQuery?.match("/new-order")
    ||isQuery?.match("/termsheet-preview")
    ) {
      show.units=false
      show.currency=false
      setShow({...show})
    }else if(isQuery?.match("/credit-queue")||isQuery?.match("/termsheet")||isQuery?.match("/margin-money")|| isQuery?.match("/review")){
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
 console.log(isQuery,"isQuery")
  const [myUrl, setUrl] = useState([]);
   const [myUrlLength, setUrlLength] = useState([]);
  var url = [];
  const router = useRouter();
  const pageName = useSelector((state) => state?.user.pageName)
  const id = useSelector((state) => state?.user.id)
 console.log(id,"pageName",pageName)
  useEffect(() => {

    if ("dashboard" == pageName) {
      router.route = "/Dashboard";
    }
     if ("newOrder" == pageName) {
      router.route = "/Leads"  +`/${id}` +"/New Order"
    }
    if ("leads" == pageName) {
      if(id!==null) {
        router.route = "/Leads"  +`/${id}`;
      }else{
        router.route = "/Leads";
      }
      
    }
     if ("leads/" == pageName) {
      router.route = "/Leads" + "/Register Your Company";
    }
 
    if ("review-queue" == pageName) {
      if(id!==null){
     
         router.route = "/Leads" + "/Review Queue" +`/${id}`;
         
      }else{
          router.route = "/Leads" + "/Review Queue";
      }
      
    }
     if ("credit-queue" == pageName) {
        if(id!==null) {
        router.route = "/Leads"  + "/Credit Queue" +`/${id}`;
       
      }else{
        router.route = "/Leads" + "/Credit Queue";
      }}
         if ("margin-money" == pageName) {
        if(id!==null) {
        router.route = "/Leads"  + "/Margin Money" +`/${id}`+ "/Order ID";
        console.log("router123",router.route)
      }else{
        router.route = "/Leads" + "/Margin Money";
      }
     
    }
   
    
    if ("termsheet" == pageName) {
      if(id!==null) {
        router.route = "/Leads"  + "/Termsheet" +`/${id}`;
        console.log("router123",router.route)
      }else{
         router.route = "/Leads" + "/Termsheet";
      }
     
    }
console.log( router.route," router.route")

    router.route.split("/").map((subRoute, index) => {
      console.log(subRoute,"subRoute")

      if (subRoute !== "") {
        if (subRoute == "[id]") {
          // setUrl([...url, router.query.id])
          // url.push(router.query.id);
          url.push(subRoute);
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
  }, [pageName,id]);
  console.log(myUrl,"url")
  return (
    <div className={`${styles.main_container} d-sm-flex d-block justify-content-between background1`}>
      <div>
        <img src="/static/home.svg"></img>
        <div className={`${styles.breadcrumItem}`}>
          {myUrl.map((val,index)=>{
            {console.log(myUrl.length-1==index,"val")}
            return(
               <div key={index} className={`${styles.breadcrumcontainer} ${myUrlLength==4?myUrlLength-2==index?`${styles.highlight} highlight`:myUrlLength-1==index?`${styles.highlight} highlight`:null:myUrlLength-1==index?`${styles.highlight} highlight`:null}`}>
              <span className='breadcrum_mode'>/</span>
              <span className={`${styles.value} breadcrum_mode`}>{val}</span>
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