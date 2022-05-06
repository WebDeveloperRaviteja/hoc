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

      title = "new commit";
      commitdate ="16-6-2020"
    </div>
  )
}

export default UseEffe;

// hii this is changed
