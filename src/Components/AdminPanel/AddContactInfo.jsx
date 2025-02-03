import Sidebar from "./Sidebar";

import "../AdminPanel/style.css";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup"
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
export default function AddContactInfo() {
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

  // /////////////////////////////////////////////////
  const {data,refetch} = useQuery({
    queryKey:["contactinfo"],
    queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products")
  })
  // /////////////////////////////
  const formik = useFormik({
    initialValues:{
      id:"3",
      contactinfo:{
        phone:"",
          // email:"",
          // address:""
      },
      
    },
    validationSchema:yup.object({
      contactinfo:yup.object({
        phone:yup.number().required("fiels is empty !!!!"),
        email:yup.string().email().required("fiels is empty !!!!"),
        address:yup.string().required("fiels is empty !!!!")

      })
    }),
    onSubmit:(values) => addcontactInfo.mutate(values)
    
  })
  console.log('first', formik?.errors)
  ///////////////////////////////////
  const addcontactInfo = useMutation({
      mutationFn:(values) => 
        axios.put(`https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/${values?.id}`,values),
      onSuccess:() => {
        refetch()
        Swal.fire({
        title: "Successfully Addedd !!!!",
        text: "You contact data Addedd successfully !!!",
        icon: "success",
        })
      }

  })
  return (
    <>
     <div className="cursor-dot" data-cursor-dot></div>
     <div className="curson-outline" data-cursor-outline></div>
      <section>
        <div className="row m-0 bg-color">
          {/* ///////////// side bar */}
          <Sidebar />
          {/* //////////////////////////////////////////// */}
          <div className="col-10 p-0 margin-auto">
            <div className="container pt-5 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="login-2">
                    <div className="container">
                      <div className="row login-box">
                        <div className="col-lg-5 col-md-12 bg-img">
                          <div className="info">
                            <div className="info-text">
                              {
                                data?.data?.map((ele) => {
                                  return (
                                    ele?.project == "traning" &&
                                    <>
                                   
                              <p>
                                <span>Phone </span> :{ele?.contactinfo?.phone}
                              </p>
                              <p>
                                <span>Email </span> :{ele?.contactinfo?.email}
                              </p>
                              <p>
                                <span>Address </span> :{ele?.contactinfo?.address}
                              </p>
                              </>
                                  )
                                })
                              }
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
                            <h2 className="mb-5 pb-3 text-center font-styleXX ">
                              A<strong className="bgcolortext">dd</strong> Con
                              <strong className="bgcolortext">ta</strong>ct I
                              <strong className="bgcolortext">n</strong>fo
                            </h2>
                            <div className="login-inner-form">
                              <form action="#" >
                                <div className="form-group form-box">
                                  <label htmlFor="" className=" pt-2 pb-2">
                                    Phone no.
                                  </label>
                                  <input
                                    type="number"
                                    name="contactinfo.phone"
                                    value={formik?.values?.contactinfo?.phone}
                                    onChange={formik?.handleChange}
                                    className="form-control"
                                  />
                                  <i className="flaticon-mail-2"></i>
                                  {formik?.errors?.contactinfo?.phone && (<p className="text-danger">{formik?.errors?.contactinfo?.phone}</p>)}
                                </div>

                                {/* /////////////////   */}
                                <div className="form-group form-box">
                                  <label htmlFor="" className=" pt-2 pb-2">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="contactinfo.email"
                                    className="form-control"
                                    onChange={formik?.handleChange}
                                    value={formik?.values?.contactinfo?.email}
                                  />
                                  <i className="flaticon-mail-2"></i>
                                  {formik?.errors?.contactinfo?.email && (<p className="text-danger">{formik?.errors?.contactinfo?.email}</p>)}
                                </div>
                          
                                <div className="form-group form-box">
                                  <label htmlFor="" className=" pt-2 pb-2">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    name="contactinfo.address"
                                    onChange={formik?.handleChange}
                                    value={formik?.values?.contactinfo?.address}
                                    className="form-control"
                                  />
                                  {formik?.errors?.contactinfo?.address && (<p className="text-danger">{formik?.errors?.contactinfo?.address}</p>)}
                                </div>
                                {/* ////////////////////////////////// */}

                                <div className="form-group mb-0">
                                <div className="skill-button text-center mt-5">
                                <Button 
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
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
      </section>
    </>
  );
}
