import React, { useState, useEffect } from "react";
import './FirstContainer.css'
import Answear from '../Answear/Answear'
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function FirstContainer() {

  const [userInput, setUserInput] = useState('Napisz coś')
  const [radio, setRadio] = useState('')
  const [errorStatus, setErrorStatus] = useState('')
  const [img, setImg] = useState('')
 
  const [loading, setLoading] = useState('')

  const changeInput = (e) => {
      setUserInput(e.target.value)
      console.log(userInput)
  }  

  const changeControl = (e) => {
      const target = e.target
      if (target.checked) {
          setRadio(target.value)
          
      }
  }

  useEffect(()=> {
    const imgUrl = 'https://cataas.com/cat'
    const waitTime = 1000

    const fetchImg = async() => {
      const res = await fetch (imgUrl);

      if (res.status < 200 || res.status >= 300) {
        setErrorStatus(res.status)
      }
      const imageBlob = await res.blob()
      const imageObjectUrl = URL.createObjectURL(imageBlob)
      setImg(imageObjectUrl)
      setLoading(false)
    } 

    if (userInput !== '') {
      setLoading(true)
      setImg(null)
      setErrorStatus(null)
    }

    const catTimer = setTimeout(()=> fetchImg(), waitTime)
    }, [userInput, radio])
  

  console.log(radio)

  return (
    <div>
        <div className="box">
            <div className="shadow"></div>
            <div className="boxcenter">
            <div className="boxWrapper">
                    <div className="container">
                    <div className="firstBox">
                    <TextField 
                      onChange={changeInput}
                      id="question" label={userInput} variant="standard" />
                      <RadioGroup 
                      aria-labelledby="question"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel 
                      onChange={changeControl}
                      value="female" control={<Radio />} label="Female" />
                      <FormControlLabel 
                      onChange={changeControl}
                      value="male" control={<Radio />} label="Male" />
                      <FormControlLabel 
                      onChange={changeControl}
                      value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </div>
                    </div>
                    <div className="container">
                    <div className="secondBox">
                        
                        <Answear  img={img} setImg={setImg}/>
                    </div>
                    </div>
            </div>

            </div>
        </div>
    </div>
  )
}
