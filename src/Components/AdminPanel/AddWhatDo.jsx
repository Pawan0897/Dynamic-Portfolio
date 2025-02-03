import Sidebar from "./Sidebar";
import "../AdminPanel/style.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
export default function AddWhatDo() {
  // ////////////////////////////////

  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });

  // ////////////////////////////////////////
  const queryClient = useQueryClient();
  
  const [show, setShow] = useState(false);
  // /////////////////////////////////
  const [showName, setShowName] = useState("");
  console.log("showName", showName);
  const handleClose = () => {
    setShow(false);
    setShowName("");
  };

  // ////////////////////////////////
  const { data, refetch } = useQuery({
    queryKey: ["whatdo"],
    queryFn: () =>
      axios.get(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products"
      ),
  });
  // //////////////////////////////////////// formik

  const formik = useFormik({
    initialValues: {
      id: "3",
      whatdo1: {
        title: "",
        detail: "",
      },
      whatdo2: {
        title: "",
        detail: "",
      },
      whatdo3: {
        title: "",
        detail: "",
      },
    },
    validationSchema: yup.object({
      whatdo1: yup.object({
        title: yup.string(),
        detail: yup.string(),
      }),

      whatdo2: yup.object({
        title: yup.string(),
        detail: yup.string(),
      }),
      whatdo3: yup.object({
        title: yup.string(),
        detail: yup.string(),
      }),
    }),
    // ///////////////////////// submit
    onSubmit: (values) => {
      // //////////////////////111111111111111111
      if (showName == "1") {
        const body = {
          id: "3",
          whatdo1: {
            title: values?.whatdo1?.title,
            detail: values?.whatdo1?.detail,
          },
        };
        submitbox.mutate(body);
      }
      /////////////////////////////////////////////////22222222222222222222
      else if (showName == "2") {
        const body = {
          id: "3",
          whatdo2: {
            title: values?.whatdo2?.title,
            detail: values?.whatdo2?.detail,
          },
        };
        submitbox.mutate(body);
      }
      ///////////////////////////////////////// 333333333333333
      else if (showName == "3") {
        const body = {
          id: "3",
          whatdo3: {
            title: values?.whatdo3?.title,
            detail: values?.whatdo3?.detail,
          },
        };
        submitbox.mutate(body);
      }
    },
  });
  // /////////////////////////// end submit
  const submitbox = useMutation({
    mutationFn: (values) =>
      axios.put(
        `https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/${values?.id}`,
        values
        // showName=="1" ?
        // values?.whatdo1:showName=="2" ?
        // values?.whatdo2:g
        // values?.whatdo3
      ),
    onSuccess: () => {
      refetch(),
        setShow(false),
        queryClient.invalidateQueries({ queryKey: ["whatdo"] });
      setShowName("");
      Swal.fire({
        title: "successfully Updated !!!!!!",
        text: "your data is Addedd !!!",
        icon: "success",
      });
    },
  });
  // /////////////////////////////////////////
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
              <h2 className="mb-5 pb-4 text-center font-styleX ">
                A<strong className="bgcolortext">dd</strong> Wh
                <strong className="bgcolortext">a</strong>t Do{" "}
                <strong className="bgcolortext">?</strong>
              </h2>
              <div className="row px-3">
                {/* ///////////////////////// data fetch from api  */}
                {data?.data?.map((item) => {
                  return (
                    item?.project == "traning" && (
                      <>
                        {/* /////////////////////////////////// first box */}
                        <div className="col-md-4">
                          <div className="whatdo-box p-3">
                            <div className="whatdo-inner  p-3">
                              <h2 className="mb-5 pb-3 text-center  font-styleX ">
                                {item?.whatdo1?.title}
                              </h2>
                              <p className="text-justify">
                                {item?.whatdo1?.detail}
                              </p>
                              <div className="skill-button text-center mt-5">
                                <Button
                                  variant=""
                                  onClick={() => {
                                    setShow(true),
                                      setShowName("1"),
                                      formik?.setValues({});
                                  }}
                                >
                                  Add Skill
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ////////////////////////////////// end first */}
                        {/* /////////////////////////////////// Second */}
                        <div className="col-md-4">
                          <div className="whatdo-box p-3">
                            <div className="whatdo-inner  p-3">
                              <h2 className="mb-5 pb-3 text-center  font-styleX ">
                                {item?.whatdo2?.title}
                              </h2>
                              <p className="text-justify">
                                {item?.whatdo2?.detail}
                              </p>
                              <div className="skill-button text-center mt-5">
                                <Button
                                  variant=""
                                  onClick={() => {
                                    setShow(true), setShowName("2");
                                  }}
                                >
                                  Add Skill
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ////////////////////////////////// end Second */}
                        {/* /////////////////////////////////// Third */}
                        <div className="col-md-4">
                          <div className="whatdo-box p-3">
                            <div className="whatdo-inner  p-3">
                              <h2 className="mb-5 pb-3 text-center  font-styleX ">
                                {item?.whatdo3?.title}
                              </h2>
                              <p className="text-justify">
                                {item?.whatdo3?.detail}
                              </p>
                              <div className="skill-button text-center mt-5">
                                <Button
                                  variant=""
                                  onClick={() => {
                                    setShow(true), setShowName("3");
                                  }}
                                >
                                  Add Skill
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ////////////////////////////////// end third */}
                      </>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
      </section>
      {/* //////////////////////////////////////////// */}
      {/* ////////////////////////// modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add What Do ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalskill">
            <div className="input">
              <label htmlFor="" className="mt3">
                Add Title
              </label>
              <input
                type="text"
                name={`${
                  showName == "1"
                    ? "whatdo1.title"
                    : showName == "2"
                    ? "whatdo2.title"
                    : "whatdo3.title"
                }`}
                className=" mt-3 form-control"
                value={
                  showName == "1"
                    ? formik?.values?.whatdo1?.title
                    : showName == "2"
                    ? formik?.values?.whatdo2?.title
                    : formik?.values?.whatdo3?.title
                }
                onChange={formik?.handleChange}
              />
            </div>
            {/* {formik?.errors?.whatdo1.title && (
              <p className="text-danger">
                {formik?.errors?.whatdo1?.title}
              </p>
            )} */}
            {/* ////////////////////////////// */}
            <div className="form-group input form-box">
              <label htmlFor="" className=" pt-2 pb-2">
                Add Description
              </label>
              <textarea
                type="text"
                rows={6}
                name={`${
                  showName == "1"
                    ? "whatdo1.detail"
                    : showName == "2"
                    ? "whatdo2.detail"
                    : "whatdo3.detail"
                }`}
                value={
                  showName == "1"
                    ? formik?.values?.whatdo1?.detail
                    : showName == "2"
                    ? formik?.values?.whatdo2?.detail
                    : formik?.values?.whatdo3?.detail
                }
                onChange={formik?.handleChange}
                className="form-control pt-4"
              ></textarea>
              {formik?.errors?.whatdo?.firstbox?.detail && (
                <p className="text-danger">
                  {formik?.errors?.whatdo?.firstbox?.detail}
                </p>
              )}
              <i className="flaticon-password"></i>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="button"
            variant="success"
            onClick={() => formik?.handleSubmit()}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
