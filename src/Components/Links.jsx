import { Link, useNavigate } from "react-router-dom";
import DayNight from "./DayNight";

export default function Links() {
  const navigate = useNavigate()
  return (
    <>
     <li className="nav-item me-4">
                <Link to={"/"} className={`${location.pathname == "/" ? "navborder" : "" } nav-link bg-navtext active`} aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link to={"/calender"} className={`${location.pathname == "/calender" ? "navborder" : "" } nav-link bg-navtext`} href="#">
                  Calender
                </Link>
              </li>
              {/* /////////////////// */}
              <li className="nav-item me-4">
                <Link to={"/stripe"} className={`${location.pathname == "/stripe" ? "navborder" : "" } nav-link bg-navtext`} href="#">
                  Stripe
                </Link>
              </li>
              {/* ////////////// */}
              <li className="nav-item me-4">
                <Link to={"/contactus"} className={`${location.pathname == "/contactus" ? "navborder" : ""} nav-link bg-navtext`} href="#">
                  Contacts
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link  className={` nav-link bg-navtext`} onClick={(e)=>{
                  e.preventDefault();
                  location.pathname == "/" ?
                  window.scrollBy(2000, 2000)
                  : navigate('/') 
                  
                  
                }}>
                  Quotes
                </Link>
              </li>
              <li className="nav-item d-flex me-4">
                <DayNight />
              </li>

      
    </>
  )
}



//  {
//   "project": "traning",
//   "name": "Sunny Singh",
//   "avatar": "https://loremflickr.com/640/480/food",
//   "social_link": {
//       "whatsapp": "king is rock",
//       "facebook": "right",
//       "instagram": "lokk",
//       "linkdin": "high level",
//       "mail": "good"
//   },
//   "skills": {
//       "name": "pk"
//   },
//   "contactinfo": {
//       "phone": 9781223886,
//       "email": "kumarpawan9041491@gmail.com",
//       "address": "Amritsar "
//   },
//   "whatdo1": {
//       "title": "wwe3",
//       "detail": "test3"
//   },
//   "whatdo2": {
//       "title": "pk23",
//       "detail": "light"
//   },
//   "whatdo3": {
//       "title": "pk",
//       "detail": "pk3"
//   },
//   "education": {
//       "first_title": "",
//       "first_detail": "",
//       "start_date": "2024-11-11T18:44:09.909Z",
//       "end_date": "",
//       "second_title": "",
//       "second_detail": "",
//       "secondstart_date": "",
//       "secondend_date": ""
//   },
//   "experience": {
//       "first_title": "qas",
//       "first_detail": "ash",
//       "start_date": "2024-11-02",
//       "end_date": "2024-11-09",
//       "second_title": "pk1",
//       "second_detail": "Loreanm   jjfoierf ojansfvha dfjviudfhv jneiuhwdc neffvureg efkjvnierh qrekn ifhverg eknerug erjfgqqqqqq12211neirh erjnierhgej fvnqieb ",
//       "secondstart_date": "2024-11-16",
//       "secondend_date": "2024-11-14"
//   },
//   "personal_skill": {
//       "first_title": "pk23",
//       "first_detail": "wwwed",
//       "first_description": "",
//       "start_date": "2024-11-12",
//       "end_date": "2024-11-14",
//       "second_title": "pwk",
//       "second_description": "",
//       "second_detail": "Loreanm   jjfoierf ojansfvha dfjviudfhv jneiuhwdc neffvureg efkjvnierh qrekn ifhverg eknerug erjfgneirh erjnierhgej fvnqieb ",
//       "secondstart_date": "2024-11-13",
//       "secondend_date": "2024-11-14"
//   },
//   "price": "666.00",
//   "detail": "good",
//   "coupenname": "Technician",
//   "coupendetail": "red",
//   "iscoupen": "revivify",
//   "coupenvalue": "Raynor",
//   "skill": {
//       "name": "java223"
//   },
//   "id": "3",
//   "portfoli": true,
//   "title": ""
// },