import React from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
  return (
    <div>
        <h1 style={{"textAlign":"center"}}>Edit Form</h1>
        <form className='form-horizantal' autoComplete='off'>
        <div className='form-group'>
          <label className='control-label col-sm-2'>First Name:</label> 
            <div className='col-sm-4'>
               <input type="text" className='form-control' placeholder='FistName'/>   
            </div>

            <div className='form-group'></div>
            <label className='control-label col-sm-2'>Last Name:</label> 
            <div className='col-sm-4'>
               <input type="text" className='form-control' placeholder='LastName'/>   
            </div>


            <div className='form-group'></div>
            <label className='control-label col-sm-2'>Email:</label> 
            <div className='col-sm-4'>
               <input type="text" className='form-control' placeholder='Email'/>   
            </div>

            <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
                <input type="submit" className='btn btn-success' value="save" />

            </div>
            </div>
          
        </div>

        </form>
     
      <Link to="/">Go to home</Link>
    </div>
  )
}

export default Edit
