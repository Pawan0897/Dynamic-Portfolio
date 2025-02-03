import { Button, Modal } from "react-bootstrap";
import AddIcon from "./AddIcon";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddSkills() {
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

   /******************************************************** */
  const queryClient = useQueryClient()
 
  /******************************************************** */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ///////////////////////////////////////// use quary
  const{data,refetch}=useQuery({
      queryKey:["skill"],
      queryFn:() => axios("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/")
  })
  // /////////////////////////////////////////
  
  const formik = useFormik({
    initialValues:{
      id:"3",
    skills:{
      name:""
    },
    portfolio:true
    
    },
    validationSchema:yup.object({
      id:yup.string().required(),
      skills:yup.object({
        name:yup.string().required("field is required !!!!")
      })
      
    }),
    onSubmit:(values) => submitskill.mutate(values)
    
  })

  // //////////////////////////////////////
  const submitskill = useMutation({
    mutationFn:(values) => axios.post(`https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/`,values),
     
    onSuccess:() => {
      refetch(),
      setShow(false),
      queryClient.invalidateQueries({queryKey: ['Skills'] })
      Swal.fire({
        title:"Successfully Addedd !!!!",
        text:"Your Skill Successfully Addedd !!",
        icon:"success"
      })
    }

    
    
  })
  return (
    <>
      <section>
        <div className="row m-0 bg-color">
          {/* ///////////// side bar */}
          <Sidebar />
          {/* //////////////////////////////////////////// */}
          <div className="col-10 p-0 margin-auto">
            <div className="container pt-5 ">
              <div className="row justify-content-center align-items-center ">
                <div className="col-md-5">
                  <h2 className="mb-5 pb-3 text-center font-styleX ">
                    A<strong className="bgcolortext">dd</strong> Ski
                    <strong className="bgcolortext">ll</strong>
                  </h2>
                  <div className="add-skill">
                    <div className="skill-item">
                      <ul className="border-0 p-4">
                        {
                          data?.data?.map((item) => {
                            return (
                              item?.portfolio &&  
                              <>

                        <li>
                          <a className="" href="">
                           {item?.skills?.name}
                          </a>
                        </li>
                              </>
                            )
                          })
                        }
                        

                        {/* ////////////////////// */}
                      </ul>
                    </div>
                  </div>
                  {/* /////////////////// button */}
                  <div className="skill-button text-center mt-5">
                  <Button variant="" onClick={handleShow}>
                           Add Skill
                  </Button>
                  </div>
                </div>
                {/* ////////////////////////////////// icon add                  */}
                <AddIcon />
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
      </section>
      {/* ////////////////////////////////////   modal start  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <form action="">
        <Modal.Body>
          <div className="modalskill">
            <div className="input">
                <label htmlFor="" className="mt3">Add Skill</label>
                <input type="text" name="skills.name" value={formik?.values?.skills?.name}  onChange={formik?.handleChange} className="mt-3 form-control"/>
                {formik?.errors?.skills?.name  && (<p className="text-danger">{formik?.errors?.skills?.name}</p>)}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <button type="button"   onClick={() => formik?.handleSubmit()}>Submit</button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
