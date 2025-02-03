import { useFormik } from "formik";
import "../AdminPanel/style.css";
import Sidebar from "./Sidebar";
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
export default function AddName() {


   // ///////////// cursor
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
  const { data, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      axios.get(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products"
      ),
  });
  // ////////////////////////////////
  const formik = useFormik({
    initialValues: {
      id:"3",
      name: "",
      portfoli: true,
      detail:""
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      detail:yup.string().required()
      
    }),
    onSubmit: (values) => senddata.mutate(values)

  });
  
   

  const senddata = useMutation({
    mutationFn: (values) =>
      axios.put(
        `https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/${values?.id}`,values
      ),
    onSuccess: () => {
      refetch(), formik.resetForm();
      Swal.fire({
        title: "Successfully Addedd !!!!",
        text: "You data Addedd successfully !!!",
        icon: "success",
      });
    },
  });


  return (
    <>
    <div className="cursor-dot" data-cursor-dot></div>
    <div className="curson-outline" data-cursor-outline></div>
      <section>
        <div className="row m-0 bg-color">
          {/* ///////////// side bar */}
          <Sidebar />
          <div className="col-10 p-0 margin-auto">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabIndex="0"
            >
              <div className="login-2">
                <div className="container">
                  <div className="row ">
                    <div className="col-lg-5 col-md-12 bg-img">
                      <div className="info">
                        <div className="info-text">
                          {data?.data?.map((item) => {
                            return (
                              item?.project == "traning" && (
                                <>
                                  <div className="waviy">
                                    <span className="bgcolortext">
                                      {item?.name}
                                    </span>
                                  </div>
                                  <p className="text-form">{item?.detail}</p>
                                </>
                              )
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* /////////////////////////////////////// from */}
                    <div className="col-lg-7 col-md-12 form-info">
                      <div className="form-section">
                        <div className="logo clearfix">
                          <a href="login-2.html">
                            {/* <img src="assets/img/logos/logo-2.png" alt="logo"> */}
                          </a>
                        </div>
                        <h2 className="mb-4 pb-2 text-center font-styleXX ">
                          A<strong className="bgcolortext">dd</strong> Ba
                          <strong className="bgcolortext">n</strong>ne
                          <strong className="bgcolortext">r</strong> D
                          <strong className="bgcolortext">e</strong>tai
                          <strong className="bgcolortext">l</strong>
                        </h2>
                        <div className="login-inner-form">
                          <form action="#" method="GET">
                            <div className="form-group form-box">
                              <label htmlFor="" className=" pt-2 pb-2">
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formik?.values?.name}
                                onChange={formik?.handleChange}
                                className="form-control"
                              />
                              <i className="flaticon-mail-2"></i>
                            </div>
                            {formik?.errors?.name && (
                              <p className="text-danger">
                                {formik?.errors?.name}
                              </p>
                            )}
                            <div className="form-group form-box">
                              <label htmlFor="" className=" pt-2 pb-2">
                                Detail
                              </label>
                              <textarea
                                type="text"
                                rows={6}
                                name="detail"
                                value={formik?.values?.detail}
                                onChange={formik?.handleChange}
                                className="form-control pt-4"
                              ></textarea>
                              <i className="flaticon-password"></i>
                            
                            </div>

                            <div className="form-group mb-0">
                              <div className="skill-button text-center mt-5">
                                <Button
                                  variant=""
                                  type="button"
                                  onClick={() => formik?.handleSubmit()}
                                >
                                  Add Skill
                                </Button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
      </section>
    </>
  );
}

//     {
//   "name": "TRANING",
//   "avatar": "https://loremflickr.com/640/480/food",
//   "social_link": {
//     "w": "gth",
//     "i": "ghg",
//     "f": "gfhfhg",
//     "l": "gfgfhgfh"
//   },
//   "skills": [
//     {
//       "name": "gth"
//     },
//     {
//       "name": "ghg"
//     },
//     {
//       "name": "gfhfhg"
//     },
//     {
//       "name": "rtgfg"
//     }
//   ],
//   "price": "666.00",
//   "detail": "dgr",
//   "coupenname": "Technician",
//   "coupendetail": "red",
//   "iscoupen": "revivify",
//   "coupenvalue": "Raynor",
//   "skill": "Berkshire",
//   "id": "19",
//   "portfoli": true
// }
