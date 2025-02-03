import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import * as yup from "yup";

export default function AddEducationPort() {
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
  // //////////////////////////////////////////////////////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // //////////////////// use quary
  const { data, refetch } = useQuery({
    queryKey: ["personalskill"],
    queryFn: () =>
      axios.get(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products"
      ),
  });
  // ////////////////////// formik
  const formik = useFormik({
    initialValues: {
      id: "3",
      education: {
        first_title: "",
        first_detail: "",
        start_date: new Date(),
        end_date: "",
        second_title: "",
        second_detail: "",
        secondstart_date: "",
        secondend_date: "",
      },
    },
    validationSchema: yup.object({
      education: yup.object({
        first_title: yup.string(),
        first_detail: yup.string(),
        start_date: yup.date(),
        end_date: yup.date(),
        second_title: yup.string(),
        second_detail: yup.string(),
        secondstart_date: yup.date(),
        secondend_date: yup.date(),
      }),
    }),
    onSubmit: (values) => submitportfolio.mutate(values),
  });
  // ///////////////////////////////
  const submitportfolio = useMutation({
    mutationFn: (values) =>
      axios.put(
        `https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/${values?.id}`,
        values
      ),
    onSuccess: () => {
      setShow(false),
        refetch(),
        Swal.fire({
          title: "successfully Addedd !!!!",
          text: "You data will be Addedd !!!",
          icon: "success",
        });
    },
  });
  return (
    <>
    <div className="cursor-dot" data-cursor-dot></div>
    <div className="curson-outline" data-cursor-outline></div>
      <div className="row">
        <h2 className="mb-5 pb-3 text-center font-styleX ">
          A<strong className="bgcolortext">dd</strong> Edu
          <strong className="bgcolortext">ca</strong>tion
        </h2>
        {data?.data?.map((item) => {
          return (
            item?.project == "traning" && (
              <>
                <div className="col-md-6">
                  <div className="add-portfolio p-3">
                    <div className="add-portfolioinnner p-4 ">
                      <h2>{item?.education?.first_title}</h2>
                      <p>
                         (
                        {moment(item?.education?.start_date).format("MM-YYYY")}{" "}
                        <strong className="bgcolortext">to</strong>{" "}
                        {moment(item?.education?.end_date).format("MM-YYYY")})
                      </p>
                      <br></br>
                      <hr />
                      <p>{item?.education?.first_detail}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="add-portfolio p-3">
                    <div className="add-portfolioinnner p-4 ">
                      <h2>{item?.education?.second_title}</h2>
                      <p>
                       (
                        {moment(item?.education?.secondstart_date).format(
                          "YYYY"
                        )}{" "}
                        -{" "}
                        {moment(item?.education?.secondend_date).format("YYYY")}
                        )
                      </p>

                      <br>
                      </br>
                      <hr />

                      <p>{item?.education?.second_detail}</p>
                    </div>
                  </div>
                </div>

                {/* ///////////buttton */}
                <div className="skill-button text-center mt-5">
                  <button
                    onClick={() => {
                      setShow(true),
                        formik?.setValues({
                          ...formik?.values,
                          education: {
                            first_title: item?.education?.first_title,
                            first_detail: item?.education?.first_detail,
                            start_date: item?.education?.start_date,
                            end_date: item?.education?.end_date,
                            second_title: item?.education?.second_title,
                            second_detail: item?.education?.second_detail,
                            secondstart_date: item?.education?.secondstart_date,
                            secondend_date: item?.education?.secondend_date,
                          },
                        });
                    }}
                  >
                    Add Skill
                  </button>
                </div>
              </>
            )
          );
        })}
      </div>
      {/* //////////////////////////// modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Experience?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-1  font-styleXX ">
                  Fir<strong className="bgcolortext">st</strong> bo
                  <strong className="bgcolortext">x</strong>
                </h2>
                <div className="modalskill">
                  {/* ////////////////////////////////// title */}
                  <div className="input">
                    <label htmlFor="" className="mt3">
                      Add Title
                    </label>
                    <input
                      type="text"
                      name="education.first_title"
                      onChange={formik?.handleChange}
                      value={formik?.values?.education?.first_title}
                      className=" mt-3 form-control"
                    />
                  </div>
                  {/* /////////////////////////////// */}
                  {/* <div className="input">
                    <label htmlFor="" className="mt3">
                      Add Description
                    </label>
                    <input type="text" name="education.first_description" value={formik?.values?.education?.first_description} onChange={formik?.handleChange} className=" mt-3 form-control" />
                  </div> */}
                  {/* ////////////////////////////////////// */}
                  {/* //////////////////////////////////  date */}
                  <div className="row">
                    <div className="col-md-6">
                      {/* //////////////////////////// start date */}
                      <div className="input">
                        <label htmlFor="" className="mt3">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name="education.start_date"
                          onChange={formik?.handleChange}
                          value={formik?.values?.education?.start_date}
                          className=" mt-3 form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* /////////////////// first end date */}
                      <div className="input">
                        <label htmlFor="" className="mt3">
                          End Date
                        </label>
                        <input
                          type="date"
                          name="education.end_date"
                          onChange={formik?.handleChange}
                          value={formik?.values?.education?.end_date}
                          className=" mt-3 form-control"
                        />
                      </div>
                    </div>
                  </div>
                  {/* ////////////////////////////// detail */}
                  <div className="form-group input form-box">
                    <label htmlFor="" className=" pt-2 pb-2">
                      Add Description
                    </label>
                    <textarea
                      type="text"
                      rows={7}
                      name="education.first_detail"
                      value={formik?.values?.education?.first_detail}
                      onChange={formik?.handleChange}
                      className="form-control pt-4"
                    ></textarea>
                    <i className="flaticon-password"></i>
                  </div>
                  {/* ///////////////////////////////////  second//////////////////////////////// ///////// */}
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-1  font-styleXX ">
                  Sec<strong className="bgcolortext">on</strong>d bo
                  <strong className="bgcolortext">x</strong>
                </h2>
                <div className="modalskill">
                  {/* /////////////////////////////////// */}
                  <div className="input">
                    <label htmlFor="" className="mt3">
                      Add Title
                    </label>
                    <input
                      type="text"
                      name="education.second_title"
                      value={formik?.values?.education?.second_title}
                      onChange={formik?.handleChange}
                      className=" mt-3 form-control"
                    />
                  </div>
                  {/* //////////////////////////////   add second description*/}
                  {/* <div className="input">
                    <label htmlFor="" className="mt3">
                      Add Description
                    </label>
                    <input type="text" name="education.second_description" value={formik?.values?.education?.second_description} onChange={formik?.handleChange} className=" mt-3 form-control" />
                  </div> */}
                  {/* //////////////////////////////////  date */}
                  <div className="row">
                    <div className="col-md-6">
                      {/* //////////////////////////////////  start date */}
                      <div className="input">
                        <label htmlFor="" className="mt3">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name="education.secondstart_date"
                          onChange={formik?.handleChange}
                          value={formik?.values?.education?.secondstart_date}
                          className=" mt-3 form-control"
                        />
                      </div>
                      {/* ///////////////////////////////  */}
                    </div>
                    <div className="col-md-6">
                      {/* /////////////////////// end date */}
                      <div className="input">
                        <label htmlFor="" className="mt3">
                          End Date
                        </label>
                        <input
                          type="date"
                          value={formik?.values?.education?.secondend_date}
                          name="education.secondend_date"
                          onChange={formik?.handleChange}
                          className=" mt-3 form-control"
                        />
                      </div>
                      {/* //////////////////////////// */}
                    </div>
                  </div>
                  {/* ////////////////////////////// detail */}
                  <div className="form-group input form-box">
                    <label htmlFor="" className=" pt-2 pb-2">
                      Add Description
                    </label>
                    <textarea
                      type="text"
                      rows={7}
                      name="education.second_detail"
                      onChange={formik?.handleChange}
                      value={formik?.values?.education?.second_detail}
                      className="form-control pt-4"
                    ></textarea>
                    <i className="flaticon-password"></i>
                  </div>
                  {/* /////////////////////////////////// */}
                  {/* ////////////////////////////////////////////// */}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              formik?.handleSubmit();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
