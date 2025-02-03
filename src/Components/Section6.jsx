import { useFormik } from "formik";
import contactimg from "./Images/userlog.jpg";
import * as yup from 'yup'
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
export default function   Section6() {
  const location = useLocation()
  // ////////////////// fromik 
  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      phonenumber:"",
      detail:""
    },
    validationSchema:yup.object({
      name:yup.string().required(),
      phonenumber:yup.number().required(),
      email:yup.string().email().required(),
      detail:yup.string().required()
    }),
    onSubmit:(values) => formsubmit.mutate(values) 
  })
  // //////////////////////////////////////////////
  const {data} = useQuery({
    queryKey:["contact"],
    queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/")
  })
  // /////////////////////////////////////////////////////
  const formsubmit = useMutation({
    mutationFn:(id) => axios.post("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users",id),
    onSuccess:() =>{
      Swal.fire({
        text:"You message successfully send !!!!!",
        title:"successfully Send !!!!",
        icon:"success",
        color:"red !important"
      }),
     formik.resetForm()
    }
    
  })
  console.log('errors', formik?.errors)
  return (
    <>
      <hr className="bg-light" />
      <div className="container pt-5 mt-5 mb-5 pb-5">
        <h2 className="font-styleX mb-5">
          Contact wi<strong className="bgcolortext">th</strong>{" "}
          <strong className="bgcolortext">me</strong>
        </h2>
        <div className="row">
{
  location?.pathname=="/contactus" ?
  <div className="col-md-4 ">
              <div className="map">
                <div className="map-box p-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54354.303888203605!2d74.83689069084974!3d31.629907634451097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1730956837462!5m2!1sen!2sin"
                    width={"100%"}
                    height="450px"
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </div>
            :

          <div className="col-md-4 ">
            <div className="contact-detail p-4">
              <img src={contactimg} width={"100%"} height={"200px"} alt="" />
              <h2 className="font-styleXX mt-4">Open for Work</h2>
              <p>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              {/* ////////////////////////// fetch data */}
              {
                data?.data?.map((element) => {
                  return (
                    element?.project == "traning" &&
                    <>
                    
                    <p>Phone : +91{element?.contactinfo?.phone}</p>
                    <p>E-Mail : {element?.contactinfo?.email}</p>
                    
              <div className="icon-box pb-5">
  
                {/* /////////////////////////////////////// */}
                <div className="social-login-icons">
                    <Link to={element?.social_link?.whatsapp}>
                  <div className="socialcontainer">
                    {/* ///////////////////////////////  icon one instagram */}
                    <div className="icon-2 social-icon-1-1">
                      <svg
                        viewBox="0 0 512 512"
                        height="1.7em"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svgIcontwit"
                        fill="white"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </div>
                    <div className="social-icon-1">
                      <svg
                        viewBox="0 0 512 512"
                        height="1.7em"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svgIcontwit"
                        fill="white"
                        >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </div>
                  </div>
                        </Link>
                  {/* /////////////////////////  icon two facebook */}
                  <Link to={element?.social_link?.instagram}>
                  <div className="socialcontainer">
                    <div className="icon-2 social-icon-2-2">
                      <svg
                        fill="white"
                        className="svgIcon"
                        viewBox="0 0 448 512"
                        height="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </div>
                    <div className="social-icon-2">
                      <svg
                        fill="white"
                        className="svgIcon"
                        viewBox="0 0 448 512"
                        height="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg>
                    </div>
                  </div>
                      </Link>
                  {/* ////////// icon 3 mail */}
                  <Link to={element?.social_link?.facebook}>
                  <div className="socialcontainer">
                    <div className="icon-2 social-icon-3-3">
                      <svg
                        viewBox="0 0 384 512"
                        fill="white"
                        height="1.6em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                      </svg>
                    </div>
                    <div className="social-icon-3">
                      <svg
                        viewBox="0 0 384 512"
                        fill="white"
                        height="1.6em"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                      </svg>
                    </div>
                  </div>
                        </Link>
                  {/* //////////////// linkdin */}
                  <Link to={element?.social_link?.linkdin}>
                  <div className="socialcontainer">
                    <div className="icon-2 social-icon-4-4">
                      <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                      </svg>
                    </div>
                    
                    <div className="social-icon-4">
                      <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                      </svg>
                    </div>
                  </div>
                    </Link>
                </div>
              </div>
              </>
                  )
                })
              }
              {/* //////////////////////////// */}

              {/* //////////////////////////// */}
            </div>
          </div>
}

          {/* ///////////////////////////////////////////////////////// form/ */}
          <div className="col-md-8 ">
            <div className="contact-form p-5">
              <form >
                <div className="row  mt-3">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="col-md-6  position-relative">
                    <div className="mb-3 input">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formik?.values?.name}
                        onChange={formik?.handleChange}
                        
                      />
                      {/* //////////////////////////////////// start eror */}
                      {formik?.errors?.name && (<p className="errortext">{formik?.errors?.name}</p>)}
                      {/* //////////////end error */}
                      
                      <div id="emailHelp" className="form-text">
                      
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 input">
                      <label className="form-label">Phone no.</label>
                      <input
                        type="text"
                        name="phonenumber"
                        onChange={formik?.handleChange}
                        value={formik?.values?.phonenumber}
                        className="form-control"
                        
                      />
                      {/* //////////////////////////////////// start eror */}
                      {formik?.errors?.phonenumber && (<p className="errortext">{formik?.errors?.phonenumber}</p>)}
                      {/* //////////////end error */}
                  
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 input">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={formik?.handleChange}
                        value={formik?.values?.email}
                        className="form-control"
                        
                      />
                      {/* //////////////////////////////////// start eror */}
                      {formik?.errors?.email && (<p className="errortext">{formik?.errors?.email}</p>)}
                      {/* //////////////end error */}
                      
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    {/* //////////////////////////////////////////// */}
                    <div className="col-md-12">
                      <div className="mb-3 input">
                        <label className="form-label">Message</label>
                        <textarea
                          type="text"
                          name="detail"
                          value={formik?.values?.detail}
                          onChange={formik?.handleChange}
                          className="form-control"
                         
                          rows="6"
                        ></textarea>
                        {/* //////////////////////////////////// start eror */}
                      {formik?.errors?.detail && (<p className="errortext">{formik?.errors?.detail}</p>)}
                      {/* //////////////end error */}
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button" className="btn mt-3  btn-danger" onClick={() => formik?.handleSubmit()}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
