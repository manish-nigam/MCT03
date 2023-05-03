import React from 'react'
import '../Css/navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({setdetaildata,setlogintype}) => {
  const navigate = useNavigate()
    const {Useralldata} = useSelector((storedata)=>storedata)
    
    const update = () => {
      setlogintype(false)
       navigate("/")
    }
  return (
    <div>
        <nav className='headstick'>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Github Exploration App</label>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/userdetail"><li>Userdetail</li></Link>
        <Link to="/search"><li>Search</li></Link>
        <li onClick={update}>Logout</li>
        <Link to='/userdetail'><div  id='account'>
        <i class="fa-solid fa-user"></i>
        <p>{Useralldata.login}</p>
        </div></Link>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar