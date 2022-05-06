
import React,{useState} from 'react'

const FirebassForm = () => {
  const [data,setData] = useState({
    name:'',
    age:''
  })

 const changehandler =(e)=>{
   setData({...data,[e.target.name]:e.target.value})
 }

 const submithandler = e =>{
   e.preventDefault();
   fetch('https://hoc-api-1c770-default-rtdb.firebaseio.com/data.json',
   
   {
     method:'POST',
     body:JSON.stringify(data),
     headers: {
       "Content-type":"application/json; charset-UTF-8"
      }
   }
   ).then(res => alert('Data Posted')).catch(err => console.log(err))
 }

  return (
    <div>
     <center>
       <form onSubmit={submithandler}>
       <label>name</label> <br/>
       <input type="text" name="name" onChange={changehandler}/> <br />

       <label>age</label> <br />
       <input type="text" age="age" onChange={changehandler}/> <br />

       <input type="submit" value="postdata" />
       </form>
       </center> 
    </div>
  )
}

export default FirebassForm
