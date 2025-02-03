import { Link } from "react-router-dom";
import Header from "./Header";
import aboutimg from "./Images/userlog.jpg";
import Section6 from "./Section6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function Contactus() {
  // //////////////////////////////////  cursor
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove",function(e){
    const posX = e.clientX;
    const posY = e.clientY;
  
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  
    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;
  
    cursorOutline.animate({
      left:`${posX}px`,
      top:`${posY}px`
      
    },{duration:500,fill:"forwards"});
  
  })


  // ////////////////////////////////////////
  // ///////////////////////////
  const { data } = useQuery({
    queryKey: ["contact"],
    queryFn: () =>
      axios.get(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/"
      ),
  });
  return (
    <>
      <Header />
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="curson-outline" data-cursor-outline></div>
      <div className="cursor-dot" data-cursor-dot></div>
 <div className="curson-outline" data-cursor-outline></div>
      <section className="contact-sec"></section>
      {/* /////////////////////////////// */}
      <section>
        <div className="container p-6">
          <div className="about bg-color ">
            <div className="row px-5 py-3">
            {data?.data?.map((element) => {
                      return element?.project == "traning" &&
                       <>
                      
              <div className="col-md-6">
                <div className="about-detail d-flex">
                  <div className="about-img">
                    <img src={aboutimg} alt="" />
                  </div>
                  <div className="ms-4 about-icon">
                   
                      

                    <h2>{element?.name}</h2>
                   
                    <p>
                      I am a{" "}
                      <span className="bgcolortext">Fronted Developer</span>
                    </p>

                    <ul className="example-2 mt-5">
                   
                   
                      <li className="icon-content ">
                        <Link
                         to={element?.social_link?.linkdin}
                          aria-label="LinkedIn"
                          data-social="linkedin"
                        >
                          <div className="filled"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                        <div className="tooltip">LinkedIn</div>
                      </li>
                      {/* ////////////////////////////////////////////////////////////////// */}
                      <li className="icon-content">
                        <Link
                          to={element?.social_link?.whatsapp}
                          aria-label="GitHub"
                          data-social="github"
                        >
                          <div className="filled"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-github w-6 h-6 text-gray-800"
                            viewBox="0 0 24 24"
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
                        <div className="tooltip">Wahtsapp</div>
                      </li>
                      {/* ////////////////////////////////////////////////////////////////// */}
                      <li className="icon-content">
                        <Link
                         to={element?.social_link?.instagram}
                          aria-label="Instagram"
                          data-social="instagram"
                        >
                          <div className="filled"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                        <div className="tooltip">Instagram</div>
                      </li>
                      {/* ////////////////////////////////////////////////////////////////// */}
                      <li className="icon-content">
                        <Link
                          to={element?.social_link?.mail}
                          aria-label="Youtube"
                          data-social="youtube"
                        >
                          <div className="filled"></div>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="group-hover:fill-[#171543] fill-white duration-300"
                              d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Link>
                        <div className="tooltip">Mail</div>
                      </li>
                    
                      {/* ////////////////////////////////////////////////////////////////// */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6  border-start">
                <div className="about-me ms-5 pt-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-det">
                        <span className="mt-3 bgcolortext">email</span>
                        <p className="mt-3"> {element?.contactinfo.email}</p>
                        <span className="mt-3 bgcolortext">Location</span>
                        <p className="mt-3"> {element?.contactinfo.address}</p>
                      </div>
                    </div>
                    <div className="col-md-6 ps-5">
                      <div className="about-det">
                        <span className="mt-3 bgcolortext">phone</span>
                        <p className="mt-3">+91  {element?.contactinfo.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////// about section two */}
      <section className="pb-5">
        <Section6 />
      </section>
    </>
  );
}

export default Contactus;
