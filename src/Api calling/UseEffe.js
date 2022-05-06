import React,{useEffect,useState} from 'react';

const UseEffe = () => {
 const [data,setData] = useState([]);
    useEffect (()=>{
     fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(json => setData(json))
   },[])

  return (
    <div>
      {data.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default UseEffe;
