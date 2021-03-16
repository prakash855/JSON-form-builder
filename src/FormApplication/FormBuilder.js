import React from 'react'
import FormRenderer from './Pages/FormRenderer/FormRenderer'
import SchemaInput from './Pages/SchemaInput/SchemaInput'
import './FormBuilder.css'

const FormBuilder = () => {
    return (
        <div className='form'>
         <SchemaInput />
        <FormRenderer />
        </div>
    )
}

export default FormBuilder