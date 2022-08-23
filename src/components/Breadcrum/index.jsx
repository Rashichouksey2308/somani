import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
export default function Index({isQuery}) {
  console.log(isQuery,"isQuery")
  const[show,setShow]=useState({
    units:true,
    currency:true
  })
  useEffect(() => {
 
    if(
      isQuery?.match("/leads")||isQuery?.match("/order-list") 
    ||isQuery?.match("/new-order")
    ||isQuery?.match("/termsheet-preview")
    ||isQuery?.match("/generic")
    ||isQuery?.match("/letter-table/letter-amend/id")
     ||isQuery=="/agreement/preview"
     ||isQuery == "/transit"
     ||isQuery == "/review-queue"
      ||isQuery == "/margin-preview"

    ) {
      show.units=false
      show.currency=false
      setShow({...show})
    }else if(
      isQuery?.match("/credit-queue")||isQuery?.match("/termsheet")||isQuery?.match("/margin-money")|| isQuery?.match("/review")
    ||isQuery?.match("/vessel") ||isQuery?.match("/third-party")

    ||isQuery?.match("/transit/id")
    ){
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
  const order = useSelector((state) => state?.user.order)
  const currency = useSelector((state) => state?.user)

 console.log(id,"pageName",pageName,currency)
//  const [currency,setCurrency]=useState("CRORES")
//  useEffect(() => {
//   if(window){
//    setCurrency(sessionStorage.getItem("unitOfValue").toUpperCase())
//   }
//  })
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
        router.route = "/Leads"  + "/Margin Money" +`/${id}`+ `/${order}`;
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
    if ("termsheet-preview" == pageName) {
      if(id!==null) {
        router.route = "/Leads"  + "/Termsheet" +`/${id}`+ `/${order}`;
        console.log("router123",router.route)
      }else{
         router.route = "/Leads" + "/Termsheet";
      }
     
    }
      if ("generic" == pageName) {
      if(id!==null) {
        router.route = "/Agreements & LC Module"  + "/Generic" +`/${id}` + "/Order ID";
        console.log("router123",router.route)
      }else{
         router.route = "/Agreements & LC Module" + "/Generic";
      }
     
    }
       if ("vessel" == pageName) {
      if(id!==null) {
        router.route = "/Vessel Nomination"   +`/${id}` + "/Order ID";
        console.log("router123",router.route)
      }else{
         router.route = "/Vessel Nomination";
      }
     
    }
      if ("loading" == pageName) {
      if(id!==null) {
        router.route = "/Loading, Transit & Unloading"   +`/${id}` + "/Order ID";
        console.log("router123",router.route)
      }else{
         router.route = "/Loading, Transit & Unloading";
      }
   
     
    }
    if ("inception" == pageName) {
      if(id!==null) {
        router.route = "/Loading, Transit & Unloading"   +`/${id}` ;
        console.log("router123",router.route)
      }else{
         router.route = "/Loading, Transit & Unloading";
      }
    }
     if ("inception2" == pageName) {
      if(id!==null) {
        router.route = "/Loading, Transit & Unloading"   +`/${id}` + "/Third Party Inception" + "/110E67FGD566" + "/Order Id";
        console.log("router123",router.route)
      }else{
         router.route = "/Loading, Transit & Unloading";
      }
    }
     if ("transit" == pageName) {
      if(id!==null) {
        router.route = "/Loading, Transit & Unloading" + "/Bill of Loading"  +`/${id}`;
        console.log("router123",router.route)
      }else{
        router.route = "/Loading, Transit & Unloading" + "/Transit Details";
      }
    }
         if ("custom" == pageName) {
      if(id!==null) {
        router.route = "/Custom Clearance & Warehouse"   +`/${id}` + "/Bill of Entry" + "/Ramal001-00002";
        console.log("router123",router.route)
      }else{
        router.route = "/Custom Clearance & Warehouse" ;
      }
    }
    if ("payment" == pageName) {
      if(id!==null) {
        router.route = "/Payment, Invoicing & Delivery"   +`/${id}` + "/Bill of Entry" + "/Ramal001-00002";
        console.log("router123",router.route)
      }else{
        router.route = "/Payment, Invoicing & Delivery" ;
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
  console.log(currency,"pageName")
  return (
    <div className={`${styles.main_container} d-sm-flex d-block justify-content-between background1`}>
      <div>
        <img src="/static/home.svg"></img>
        {pageName=="generic" || pageName=="vessel"||pageName=="custom" || pageName=="payment"?
        <div className={`${styles.breadcrumItem}`}>
          {myUrl.map((val,index)=>{
            {console.log(myUrl.length-1==index,"val")}
            return(
               <div key={index} className={`${styles.breadcrumcontainer} ${myUrlLength==index+1?`${styles.highlight} highlight`:null}`}>
              <span className='breadcrum_mode'>/</span>
              <span className={`${styles.value} breadcrum_mode`}>{val}</span>
            </div>
            )
          })}
        </div>
        :
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
        </div>}
     </div>
      <div className={`${styles.unit_container} d-flex`}>
           {show.units?<div className="mr-0 mr-sm-2">
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Unit :
            </h5>
            <select className={`${styles.options} accordion_DropDown`}
            value={currency.currency}
            >
              <option selected>CRORES</option>
              <option>MILLIONS</option>
            </select>
           </div>:null}
           {show.currency? <div>
             <h5 className={`${styles.unit_label} accordion_Text`}>
              Currency :
            </h5>
            <select className={`${styles.options} bg-transparent px-0 accordion_DropDown`}
            value={currency.currency}
            >
              <option selected>INR</option>
              <option>EURO</option>
              <option >USD</option>
              
              <option>BRITISH POUND</option>
            </select>
           </div>:null}
          </div>
          </div>
   
  )
}