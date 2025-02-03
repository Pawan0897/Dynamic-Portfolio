import { Button, Modal } from "react-bootstrap";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
export default function AddIcon() {
  // ///////////////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // //////////////////////////////////////////////////////use quary
  const { data, refetch } = useQuery({
    queryKey: ["icon"],
    queryFn: () =>
      axios.get(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products"
      ),
  });
  // //////////////////////////////formik

  const formik = useFormik({
    initialValues: {
      id: "3",
      social_link: {
        whatsapp: "",
        facebook: "",
        instagram: "",
        linkdin: "",
        mail: "",
      },
    },
    validationSchema: yup.object({
      social_link: yup.object({
        whatsapp: yup.string(),
        facebook: yup.string(),
        instagram: yup.string(),
        linkdin: yup.string(),
        mail: yup.string(),
      }),
    }),
    onSubmit: (values) => submiticon.mutate(values)
  });
  // ///////////////////////////////////////////// mutate
  const submiticon = useMutation({
    mutationFn:(values) =>
      axios.put(`https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/${values?.id}`,values),
    onSuccess:() => {
      refetch()
      setShow(false)
      Swal.fire({
        title:"successfully addedd!!!!",
        text:"your Social Link is Addedd !!!!",
        icon:"success"
      })
    }
    
  })
  return (
    
    <>
    <div className="cursor-dot" data-cursor-dot></div>
    <div className="curson-outline" data-cursor-outline></div>
      <div className="col-md-5 p-5">
        <h2 className="mb-5 pb-3 text-center font-styleX ">
          E<strong className="bgcolortext">d</strong>it L
          <strong className="bgcolortext">in</strong>ks
        </h2>
        <div className="add-skill p-5">
          <div className="icon-box">
            <ul>
              {data?.data?.map((link) => {
                return (
                  link?.project == "traning" && 
                  <>

              <li>
                <Link className="button" to={link?.social_link?.instagram}>
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
                </Link>
              </li>
                 
              {/* ///////////////// */}
              <li>
                <Link
                 to={link?.social_link?.whatsapp}
                >
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
                <Link className="button" to={link?.social_link?.facebook}>
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link className="button" to={link?.social_link?.mail}>
                  <MailOutlineIcon />
                </Link>
              </li>

              <li>
                <Link
                to={link?.social_link?.linkdin}
                  className="buttton"
                  href="https://www.linkedin.com/in/pawan-kumar-05533b242/"
                >
                  <LinkedInIcon />
                </Link>
              </li>
              </>
                )
              })}
            </ul>
          </div>
        </div>
        {/* ///////////////button */}
        <div className="skill-button text-center mt-5">
          <Button variant="" onClick={handleShow}>
            Add Links
          </Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalskill">
            <div className="row">
              <div className="col-md-6">
                {/* ///////////////////////// facebook */}
                <div className="input">
                  <label htmlFor="" className="mt3 pt-3">
                    Add Facebook
                  </label>
                  <input
                    type="text"
                    name="social_link.facebook"
                    value={formik?.values?.social_link?.facebook}
                    onChange={formik?.handleChange}
                    className=" mt-3 form-control"
                  />
                </div>
                {formik?.errors?.social_link?.facebook && (
                  <p className="text-danger">
                    {formik?.errors?.social_link?.facebook}
                  </p>
                )}
              </div>
              {/* .////////////////////////////////////// */}
              <div className="col-md-6">
                {/* ////////////////////////////// instagram */}
                <div className="input">
                  <label htmlFor="" className="mt3 pt-3">
                    Add Instagram
                  </label>
                  <input type="text" name="social_link.instagram" value={formik?.values?.social_link?.instagram} onChange={formik?.handleChange}
                   className=" mt-3 form-control" />
                </div>
                {formik?.errors?.social_link?.instagram && (
                  <p className="text-danger">
                    {formik?.errors?.social_link?.instagram}
                  </p>
                )}
              </div>
              {/* //////////////////////////////////////// end */}
              <div className="col-md-6">
                {/* ///////////////////////////////////////////////// ehatsapp */}
                <div className="input">
                  <label htmlFor="" className="mt3 pt-3">
                    Add Whatsapp
                  </label>
                  <input type="text" name="social_link.whatsapp" value={formik?.values?.social_link?.whatsapp} onChange={formik?.handleChange} className=" mt-3 form-control" />
                </div>
                {formik?.errors?.social_link?.whatsapp && (
                  <p className="text-danger">
                    {formik?.errors?.social_link?.whatsapp}
                  </p>
                )}
              </div>
              
              {/* /////////////////////////////////// end */}
              <div className="col-md-6">
                {/* ////////////////////// mail */}
                <div className="input">
                  <label htmlFor="" className="mt3 pt-3">
                    Add Mail
                  </label>
                  <input type="text" name="social_link.mail"
                   value={formik?.values?.social_link?.mail}
                    onChange={formik?.handleChange}
                     className=" mt-3 form-control" />
                </div>
                {formik?.errors?.social_link?.mail && (
                  <p className="text-danger">
                    {formik?.errors?.social_link?.mail}
                  </p>
                )}
              </div>
              {/* //////////////////////////// end */}
              <div className="col-md-6">
                {/* ////////////////////////////////// linkdin */}
                <div className="input">
                  <label htmlFor="" className="mt3 pt-3">
                    Add Linkdin
                  </label>
                  <input type="text" name="social_link.linkdin" value={formik?.values?.social_link?.linkdin} onChange={formik?.handleChange} className=" mt-3 form-control" />
                </div>
                {formik?.errors?.social_link?.mail && (
                  <p className="text-danger">
                    {formik?.errors?.social_link?.mail}
                  </p>
                )}
                
              </div>
              {/* ///////////////////////////// linkdin */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => formik?.handleSubmit()}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
