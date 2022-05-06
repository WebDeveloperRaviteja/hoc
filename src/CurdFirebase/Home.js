import React,{useState} from 'react'
import { Link } from 'react-router-dom'
//import firebaseDB from './firebase';

const Home = () => {
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
    })

    const {firstname,lastname,email} = {...data}

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submithandler = async(e) =>{
        e.preventDefault()
       var dataAdded = await console.log(data)
        // firebaseDB.child('register').push(
        //     data,
        //     err =>{
        //         if(err){
        //             console.log(err);
        //         }
        //     }
        // )

        setData ({
            firstname:"",
            lastname:"",
            email:"", 
        })
    }
  return (
    <div>

          <h1 style={{"textAlign":"center"}}> Register Form</h1>
           <form className='form-horizantal' onSubmit={submithandler} autoComplete='off'>
          <div className='form-group'>
          <label className='control-label col-sm-2'>First Name:</label> 
            <div className='col-sm-4'>
               <input type="text" className='form-control' placeholder='FistName' 
               name="firstname" value={firstname} onChange={changeHandler}/>   
            </div>

            <div className='form-group'>
          <label className='control-label col-sm-2'>Last Name:</label> 
            <div className='col-sm-4'>
               <input type="text" className='form-control' placeholder='FistName'
                name="lastname" value={lastname} onChange={changeHandler}/>   
            </div>

            <div className='form-group'>
          <label className='control-label col-sm-2'>Email:</label> 
            <div className='col-sm-4'>
               <input type="text" className='form-control' placeholder='Email'
                name="email" value={email} onChange={changeHandler}/>   
            </div>

         <div className='form-group'>
         <div className='col-sm-offset-2 col-sm-10'>
           <input type="submit" className='btn btn-success' value="submit"/>
         </div>

         </div>

           </div>
  
           </div>
           </div>
         </form>
         
        
      <Link to="/Edit">Go to edit page</Link>
    </div>
  )
}

export default Home
