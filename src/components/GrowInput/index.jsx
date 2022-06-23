import React,{ useState, useRef } from 'react'

function Index(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0)
  const [state, setState] = useState(props.placeholder);
  const [textType, setText] = useState(props.text);
  
  const changeHandler = evt => {
    setWidth(evt.target.value.length);
    setState(evt.target.value)
  };
   const changeHandler2 = evt => {
    setWidth(evt.target.value.length);
    setState(evt.target.value)
  };
 
  return (
  <>
  {
       textType == "text"? <textarea style={{ height: height +'ch',  width: width +'ch'}} type="text"  onChange={changeHandler2} value={state} />
    
    :  <input style={{ width: width +'ch'}} type="text"  onChange={changeHandler} value={state} />

  }
  </>
   
    
  )
}

export default Index