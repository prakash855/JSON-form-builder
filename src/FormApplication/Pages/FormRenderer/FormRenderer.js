import React from 'react'
import { InputLabel } from '@material-ui/core';
import './FormRenderer.css'
import ObjectRenderer from '../../ObjectRenderer';
const FormRenderer = (props) => {
    // console.log(props.data)
    return (
        <div className='main'>
            <form>
                {props.data?.properties && Object.keys(props.data.properties).map((elements, ids)=>{
                    return (
                    <div className='inner'>
                        <InputLabel style={{padding:'0.6rem'}} key={ids}>{elements.toUpperCase()}:</InputLabel>
                        {props.data.properties[elements].type === 'object' && <ObjectRenderer attr={props.data.properties[elements]} />}
                        {props.data.properties[elements].type === 'string' && <input/>}
                        {props.data.properties[elements].type === 'integer' && <input type="number"/>}
                    </div>)
                })}
            </form>
        </div>
    )
}
export default FormRenderer