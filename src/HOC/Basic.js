import React from 'react'
import Hoc from './Hoc';

const Basic = (props) => {
  return (
    <div>
     <h1>welcome user {props.name}</h1> 
    </div>
  )
}

export default Hoc(Basic);
