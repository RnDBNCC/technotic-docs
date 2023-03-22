import { Input } from 'technotic';
import React, { useState } from 'react'

const TextFieldValidation = () => {
    
    const [text, setText] = useState();
    const [error,setError]=useState("")
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(typeof text == 'undefined'||text == ''){
          setError("error");
      }else{
        setError("success");
      }
    }
    return (
      <form onSubmit={handleSubmit}>
          <Input.TextField
          status={error}
          value = {text}
          onChange={(e) => {setText(e.target.value)}}
          /> 
          {error&&typeof text == 'undefined'||text == ''? <small style={{color:"red"}}>Last Name can't be Empty</small>:""}
          <br></br>
          <button>
            Submit
          </button>
      </form>
    );
}

export default TextFieldValidation;