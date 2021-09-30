import React, { useCallback, useState } from 'react';


type propTypes = {
    header : string
    onInsert : (text:string)=>void
}
const Input = ( {header,onInsert} : propTypes )=>{

  const [text, setText] = useState('');
  
  const onChange = useCallback((e:any)=>{
    setText(e.target.value)
  },[setText]);

  const onSubmit = useCallback((e:any)=>{
    e.preventDefault();

    if(!text){
      return;
    }

    onInsert(text);
    setText('')
  },[onInsert,setText,text]);

    return(
      <>
        <h1>{header}</h1>
        <form onSubmit={onSubmit}>
        <label htmlFor="insert">입력</label>
        <input onChange={onChange} value={text} id="insert" />
        <button type="submit" >등록</button>
        </form>
      </>
    )
  }

  export default Input