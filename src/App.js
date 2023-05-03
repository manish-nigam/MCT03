import './App.css';
import Home from './Component/Home';
import { useState } from 'react';
import Login from './Component/Login';
import Deatils from './Component/Deatils';
import {Routes, Route,Navigate} from 'react-router-dom'
import Userdetail from './Component/Userdetail';
import Search from './Component/Search';
function App() {

  const [logintype, setlogintype] = useState(false)
  const[homedata,sethomedata] = useState({})
  console.log(homedata);
  const [detaildata,setdetaildata] = useState(homedata)
  
  return (
    <>
    <Routes>
    <Route path='/' element={logintype?<Navigate to="/home"/>:<Login setlogintype={setlogintype}/>}/>
    <Route path='/home' element={logintype?<Home setdetaildata={setdetaildata} sethomedata={sethomedata}/>:<Navigate to="/"/>}/>
    <Route path='/details' element={logintype?<Deatils detaildata={detaildata} />:<Navigate to="/"/>}/>
    <Route path='/search' element={logintype?<Search setdetaildata={setdetaildata}/>:<Navigate to="/"/>}/>
    <Route path='/userdetail' element={logintype?<Userdetail/>:<Navigate to="/"/>}/>
    </Routes>
    </>
  );
}

export default App;
