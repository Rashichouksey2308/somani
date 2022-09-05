import React,{ useState, useRef,useEffect,useLayoutEffect } from 'react'
import styles from './index.module.scss'

function Index(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0)
  const [state, setState] = useState(props.placeholder);
  const [textType, setText] = useState(props.text);
  const inputEl = useRef(null);
  const [length,setLength]=useState('')
  useEffect(() => {
    let tempWidth=`${inputEl?.current?.offsetWidth}`
    setWidth(props.defaultValue);
    setLength(props?.defaultValue?.length)
   
  },[inputEl.current,props.defaultValue,state])
  const changeHandler = evt => {
   
    setState(evt.target.value)
  };
   const changeHandler2 = evt => {
    setWidth(evt.target.value.length);
    setState(evt.target.value)
  };
 console.log(length,"length")
  return (
  <>
  {
       textType == "text"? <textarea  className={`${styles.input} input`}  size={state?.length > 3 ? state?.length : 3} type="text"  onChange={changeHandler2} value={state} placeholder={props.placeholder} />
    
    :  
    <input ref={inputEl}  className={`${styles.input} input`}   
      size={length}
      type="text" 
       onChange={(e)=>{changeHandler(e)
      {props.getValue?props?.getValue(e.target.name,e.target.value):""}
      }} value={props.defaultValue?props.defaultValue:state} 
      name={props.name} placeholder={props.placeholder}/>

  }
  </>
   
    
  )
}

export default Index