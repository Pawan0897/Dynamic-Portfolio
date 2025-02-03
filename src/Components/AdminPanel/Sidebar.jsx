import logo from '../Images/logo/nreact.jpg';
import '../AdminPanel/style.css';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <>
     <div className="col-md-2">
     <div className="admin-nav ">
      <ul>
        <li><img src={logo} alt="" /></li>
        <li><Link to={"/admin"}>home</Link></li>
        <li><Link className=' ' to={"/addname"}>Add Name</Link></li>
        <li><Link  to={"/addskill"}>Add Icon & skills</Link></li>
        <li><Link to={"/addcontactinfo"}>Add Contact Info</Link></li>
        <li><Link to={"/addwhatdo"}>Add WhatDo ?</Link></li>
        <li><Link to={"/addportfolio"} >Add Portfolio </Link></li>
        
      </ul>
    </div>
    </div>
  
      
    </>
  )
}
