import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function Question() {

    const [userInput, setUserInput] = useState('Napisz coś')
    const [radio, setRadio] = useState('')

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

    console.log(radio)


  return (
    <div>
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
  )
}
