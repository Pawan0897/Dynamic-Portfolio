import user from "./Images/userlog.jpg";
import "../Style/cd-wordwrapper.css";
import "../Js/cdjs-wordwrapper.js";
import "../Style/Icon.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// /////////////////////////////////////////////////




export default function Section1() {
  // ////////////////////////////////////////
  const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  cursorOutline.animate({
    left:`${posX}px`,
    top:`${posY}px`
    
  },{duration:500,fill:"forwards"});

})



 const {data} = useQuery({
    queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products")     
  })
  

  console.log('first', data?.data)
  return (
    <>
    {/*///////////// start  */}
 
 {/* //////////////////// end  */}
      <div className="container-fluid p-2">
        <div className="row ">
          <div className="col-md-4">
            <div className="user-image p-3 animate__animated animate__rotateInDownLeft " id="pk">
              <img src={user} width={"100%"} alt="" />
            </div>
          </div>
          <div className="col-md-8 ps-5 animate__animated  animate__rotateInDownRight">
            <div className="user-detail p-3 me-3 ">
              <div className="title">

                {
                  data?.data?.map((item) => {
                   
                    return (
                      item?.project == "traning" &&
                      <>
                   
                <span>
                  Hi, I’m <b>{item?.name} </b>
                </span>

                </>
                    )
                  })
                }

                <div className="dynamic-title cd-headline clip is-full-width">
                  <br></br>
                  <span className="cd-words-wrapper">
                    <b className="is-visible">
                      {" "}
                      a&nbsp;
                      <span className="gold-title">Graphic Designer.</span>
                    </b>
                   
                    <b>
                      {" "}
                      a&nbsp;<span className="gold-title">UI Designer.</span>
                    </b>
                    <b>
                      a&nbsp;
                      <span className="gold-title">Prototype Developer.</span>
                    </b>
                    <b>
                      an&nbsp;<span className="gold-title">Artist.</span>
                    </b>
                    <b>
                      a&nbsp;<span className="gold-title">Humanitarian.</span>
                    </b>
                  </span>
                </div>
              </div>
              {
                data?.data?.map((item) => {
                  return(
                    item?.project == "traning" &&
                    <>
              <p>
               {item?.detail}
              </p>
                    </>
                  )
                })
              }
            </div>
            {/* ////////////////////  start  */}
            <div className="skill">
              <div className="row">
                <div className="col-md-5">
                <div className="icon-box">
                    <ul>
                      <li>
                        <a className="button">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-800 dark:text-white"
                          >
                            <path
                              clipRule="evenodd"
                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                              fillRule="evenodd"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      {/* ///////////////// */}
                      <li>
                        {/* <a className="button" href="https://api.whatsapp.com/send?phone=919781222386&text=Hello, My self Pawan Kumar?"> */}
                        <Link to={"https://wa.me/919781222386?text=Hello, I'm Web Developer"}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-800 dark:text-white"
                          >
                            <path
                              clipRule="evenodd"
                              d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                              fillRule="evenodd"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <a className="button">
                          <FacebookIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="icon-box1">
                    <ul>
                      <li>
                        <a className="button">
                          <MailOutlineIcon />
                        </a>
                      </li>
                      
                      <li>
                        <a className="buttton" href="https://www.linkedin.com/in/pawan-kumar-05533b242/">
                          <LinkedInIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
