import React, { useState } from 'react'
import FormRenderer from '../FormRenderer/FormRenderer'
import './SchemaInput.css'
const SchemaInput = () => {
    const [input, setInput] = useState({})

    const submitHandler = event => {
        event.preventDefault()
        let inputData = JSON.parse(event.target.data.value)
        setInput(inputData)
    }
    return (
        <div className='main' style={{display:'flex'}}>
            <form onSubmit={submitHandler}>
            <textarea type='text' name='data' rows='35' cols='30'></textarea>
            <button type='submit'>Submit</button>
            </form>
            <FormRenderer data={input} />
        </div>
    )
}

export default SchemaInput