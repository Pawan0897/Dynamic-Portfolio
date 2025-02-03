
import { Button, Modal } from 'react-bootstrap'
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from  'yup'
import Swal from 'sweetalert2';
export default function WhatDoBox1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   
    // ////////////////////////////////
    const{data,refetch}  = useQuery({
      queryKey:["whatdo"],
      queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products")
    })
    // //////////////////////////////////////// formik
  
  const formik = useFormik({
    initialValues:{
        id:"3",
      whatdo:{
        firstbox: {
            title: "",
            detail: ""
        },
        secondbox: {
            title: "",
            detail: ""
        },
        thirdbox: {
            title: "",
            detail: ""
        }
    },
    },
    validationSchema:yup.object({
      whatdo:yup.object({
        firstbox:yup.object({
          title:yup.string().required(),
          detail:yup.string().required()
        }),
        secondbox:yup.object({
            title:yup.string().required(),
            detail:yup.string().required()
          }),
          thirdbox:yup.object({
            title:yup.string().required(),
            detail:yup.string().required()
          })
      })
    }),
    onSubmit:(values) => submitbox.mutate(values)
   
  })
  const submitbox = useMutation({
    mutationFn:(values) => axios.put(`https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/${values?.id}`,values),
    onSuccess:() => {
        refetch(),
        Swal.fire({
            title:"successfully Updated !!!!!!",
            text : "your data is Addedd !!!",
            icon:"success"
        })
    }
  })
  
  
  return (
    <>
    <div className="col-md-4">
                  <div className="whatdo-box p-3">
                    <div className="whatdo-inner  p-3">
                      {
                        data?.data?.map((item) => {
                          return(
                            item?.project == "traning" &&
                            <>
                            
                      <h2 className="mb-5 pb-3 text-center  font-styleX ">
                        {item?.whatdo?.firstbox?.title}
                      </h2>
                      <p className="text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Esse quod quisquam ratione magnam maxime
                        aspernatur, inventore, eius officia doloremque natus
                        dolor iste deleniti magni cumque aliquam totam
                        blanditiis, rem qui.
                      </p>
                      <div className="skill-button text-center mt-5">
                        <Button variant="" onClick={() => setShow(true)}>
                          Add Skill
                        </Button>
                      </div>
                      </>
                          )
                        })

                      }
                    </div>
                  </div>
                </div>
       {/* ////////////////////////// modal */}
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add What Do ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalskill">
            <div className="input">
              <label htmlFor="" className="mt3">
                Add Title
              </label>
              <input type="text"
              name='whatdo.firstbox.title'
               className=" mt-3 form-control"
              value={formik?.values?.whatdo?.firstbox?.title}  
              onChange={formik?.handleChange}/>
            </div>
            {formik?.errors?.whatdo?.firstbox?.title && (<p className="text-danger">{formik?.errors?.whatdo?.firstbox?.title}</p>)}
            {/* ////////////////////////////// */}
            <div className="form-group input form-box">
              <label htmlFor="" className=" pt-2 pb-2">
                Add Description
              </label>
              <textarea
                type="text"
                rows={6}
                name="whatdo.firstbox.detail"
                value={formik?.values?.whatdo?.firstbox?.detail}  
              onChange={formik?.handleChange}
                className="form-control pt-4"
              ></textarea>
               {formik?.errors?.whatdo?.firstbox?.detail && (<p className="text-danger">{formik?.errors?.whatdo?.firstbox?.detail}</p>)}
              <i className="flaticon-password"></i>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button type="button" variant="success"  onClick={() => formik?.handleSubmit()}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
