import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import * as yup from "yup";
export default function AddExperience() {
  const [show, setShow] = useState(false);
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
// //////////////////////////////////////////////
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
      experience: {
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
      experience: yup.object({
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
                      <h2>{item?.experience?.first_title}</h2>
                      <p>
                         (
                        {moment(item?.experience?.start_date).format("MM-YYYY")}{" "}
                        <strong className="bgcolortext">to</strong>{" "}
                        {moment(item?.experience?.end_date).format("MM-YYYY")})
                      </p>
                      <br></br>
                      <hr />
                      <p>{item?.experience?.first_detail}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="add-portfolio p-3">
                    <div className="add-portfolioinnner p-4 ">
                      <h2>{item?.experience?.second_title}</h2>
                      <p>
                       (
                        {moment(item?.experience?.secondstart_date).format(
                          "YYYY"
                        )}{" "}
                        -{" "}
                        {moment(item?.experience?.secondend_date).format("YYYY")}
                        )
                      </p>

                      <br></br>
                      <hr />

                      <p>{item?.experience?.second_detail}</p>
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
                          experience: {
                            first_title: item?.experience?.first_title,
                            first_detail: item?.experience?.first_detail,
                            start_date: item?.experience?.start_date,
                            end_date: item?.experience?.end_date,
                            second_title: item?.experience?.second_title,
                            second_detail: item?.experience?.second_detail,
                            secondstart_date: item?.experience?.secondstart_date,
                            secondend_date: item?.experience?.secondend_date,
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
                      name="experience.first_title"
                      onChange={formik?.handleChange}
                      value={formik?.values?.experience?.first_title}
                      className=" mt-3 form-control"
                    />
                  </div>
                  {/* /////////////////////////////// */}
                  {/* <div className="input">
                    <label htmlFor="" className="mt3">
                      Add Description
                    </label>
                    <input type="text" name="experience.first_description" value={formik?.values?.experience?.first_description} onChange={formik?.handleChange} className=" mt-3 form-control" />
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
                          name="experience.start_date"
                          onChange={formik?.handleChange}
                          value={formik?.values?.experience?.start_date}
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
                          name="experience.end_date"
                          onChange={formik?.handleChange}
                          value={formik?.values?.experience?.end_date}
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
                      name="experience.first_detail"
                      value={formik?.values?.experience?.first_detail}
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
                      name="experience.second_title"
                      value={formik?.values?.experience?.second_title}
                      onChange={formik?.handleChange}
                      className=" mt-3 form-control"
                    />
                  </div>
                  {/* //////////////////////////////   add second description*/}
                  {/* <div className="input">
                    <label htmlFor="" className="mt3">
                      Add Description
                    </label>
                    <input type="text" name="experience.second_description" value={formik?.values?.experience?.second_description} onChange={formik?.handleChange} className=" mt-3 form-control" />
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
                          name="experience.secondstart_date"
                          onChange={formik?.handleChange}
                          value={formik?.values?.experience?.secondstart_date}
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
                          value={formik?.values?.experience?.secondend_date}
                          name="experience.secondend_date"
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
                      name="experience.second_detail"
                      onChange={formik?.handleChange}
                      value={formik?.values?.experience?.second_detail}
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
