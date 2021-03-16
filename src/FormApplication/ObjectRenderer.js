import { InputLabel } from '@material-ui/core'
import React from 'react'

const ObjectRenderer = (props) => {
    
    // console.log(Object.keys(props.attr.properties))
    return (
    <div>
                {props.attr?.properties && Object.keys(props.attr.properties).map((elements, ids)=>{
                    return (
                    <div className='inner'>
                        <InputLabel style={{padding:'0.6rem'}} key={ids}>{elements.toUpperCase()}:</InputLabel>
                        {props.attr.properties[elements].type === 'object' && 
                        <ObjectRenderer attr={props.attr.properties[elements]} />
                        }
                        {props.attr.properties[elements].type === 'string' && <input/>}
                        {props.attr.properties[elements].type === 'integer' && <input type="number"/>}
                    </div>)
                })}
    </div>
        )
}

export default ObjectRenderer