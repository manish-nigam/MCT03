import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import '../Css/search.css'

const Search = ({setdetaildata}) => {

    const [searchdata, setsearchdata]  = useState("")
    const navigate = useNavigate()
    

    const data = async() =>{
        const result = await fetch(`https://api.github.com/users/${searchdata}`)
        const data  = await result.json()
        setdetaildata(data)
        navigate("/details")

    }
  return (
     <>
     <Navbar/>
       <div className="maincontentsearch">
        <div className="mainheadsearch">
           <h1>Github-Profile Finder <br />For Github</h1>
           <h3>Check Out the followers and More, <br />Just By entering</h3>
        </div>
        <div className="inputbox">
            <input type="text" placeholder='Enter a Username '  />
            
            <Link to='/details'><button onClick={data} >Search</button></Link>
        </div>
       </div>
     </>
  )
}

export default Search
