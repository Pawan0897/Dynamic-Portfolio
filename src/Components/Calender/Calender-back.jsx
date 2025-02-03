import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../Header";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment/moment";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from '@mui/icons-material/Close';
export default function Calender() {
  // const events = [
  //   { title: "Meeting", start: new Date() },
  //   //   { title: "demo", start: new Date(), end: addDays(new Date(), 3) },
  //   //   { title: "function", start: addDays(new Date(), 3) }, // start after how much day your event
  // ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ////////////////////// event show state
  const [eventshow, seteventshow] = useState(false);
  const eventClose = () => seteventshow(false);
  // //////////////// event open adn close

  const[eventdetail,seteventdetail] = useState(false)
  const[eventopen,setevent] = useState(true)

  // ////////////////////////////////////////////////////////////
  const { data, refetch } = useQuery({
    queryKey: ["der"],
    queryFn: () =>
      axios.get(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users"
      ),
  });
  // console.log(data);
  //  //////////////////////////////////////
  const formik = useFormik({
    initialValues: {
      event: true,
      name: "",
      title: "",
      startdate: new Date(),
      enddate: "",
      color: "",
      descript: "",
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      startdate: yup.date().required(),
      enddate: yup.date().required(),
      title: yup.string().required(),
      color: yup.string().required(),
      descript: yup.string().required(),
    }),
    onSubmit: (values) => eventsubmit.mutate(values),
  });
  // /////////////////////// event addd
  const eventsubmit = useMutation({
    mutationFn: (values) =>
      axios.post(
        "https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users",
        values
      ),
    onSuccess: () => {
      setShow(false);
      refetch();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Event Addedd successfully !!!",
      });
      formik.setValues({
        name: "",
        title: "",
        startdate: new Date(),
        enddate: "",
        color: "",
        descript: "",
      });
    },
  });
  // ///////////////////// delete event
  const deleve = useMutation({
    mutationFn: (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users/${id}`
            )
            .then(() => {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            });
        }
      });
    },
    // ///////
    onSuccess: () => refetch(),
  });
  // //////////////////////// 
  const  showevent = (id) => {
  axios.get(`https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/all-users/${id?.event?.id}`).then((response) =>{
    formik?.setValues({
      name: response?.data?.name,
      title: response?.data?.title,
    })
  })
  seteventdetail(true)
  }
  // ///////////////////////////////////
  const closeeventdet = () => {
    seteventdetail(false),
    setevent(true),
    formik?.setValues({
      name:"",
      title: "",
    })

  }
  return (
    <>
      <Header />
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-4">
            <div className="calender-sidebar">
              <div className="add-button pt-3 ps-2 ">
                <div className="float-end">
                  {/* ////////////////////// add button and remove event */}
                  <Button
                    className={`border-0 bg-danger me-4 ${eventdetail != true ? "d-block" : "d-none"}`}
                    variant="primary"
                    onClick={handleShow}
                  >
                    Add Event
                  </Button>
                  <span className={`p-3 ${eventopen == true ? "d-none" : ""} pe-auto` }  onClick={() => closeeventdet()} ><a href=""><CloseIcon/></a></span>
                </div>
                {/* ////////////////////////////////////////////////////////// */}
                <div className="events mt-5">
                  <ul>
                    {/* ////////////////////////////////////////// */}
                    {
                      eventopen && ( <>
                    {data?.data?.map((item) => {
                      return (
                        item?.event == true && (
                          <>
                            <li className="p-3 mt-5">
                              <a
                                onClick={() => {
                                  seteventshow(true),
                                    formik.setValues({
                                      name: item?.name,
                                      title: item?.title,
                                      startdate: item?.startdate,
                                      enddate: item?.enddate,
                                      color: item?.color,
                                      descript: item?.descript,
                                    });
                                }}
                              >
                                {item?.title}
                              </a>
                              <span
                                className="del-icon float-end"
                                onClick={() => deleve.mutate(item?.id)}
                              >
                                {<DeleteForeverIcon />}
                              </span>
                            </li>
                          </>
                        )
                      );
                    })}
                    </>)
                    }
                    {/* ////////////////////////////////////////// */}
                  </ul>
                  <div className="event-d  p-3">
                    {/* //////////////////////////// */}
                    {
                      eventdetail && 
                    
                    <div className="event-ds ">
                      <div className="icon del-icon d-flex justify-content-center align-items-center">
                        <DoneIcon />
                      </div>
                      <div className="event-in ms-5 pb-2 pt-2">
                        <p className="">
                          <strong>Event </strong>{" "}
                        </p>
                        <p>{formik?.values?.title}</p>
                      </div>
                    </div>
                    }
                    {/* /////////////////////////////// */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////// */}
          <div className="col-md-8">
            <div className="calender p-5">
              {/* ////////////////////////// calender */}
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={data?.data?.map((item) => {
                  return {
                    title: item?.title,
                    start: item?.startdate,
                    id:item?.id,
                    end: moment(item?.enddate).endOf("days").format(),
                    // color:item?.startdate == "2024-10-31" ? "black" : item?.color,
                    color: item?.color,
                  };
                })}
                eventClick={(event) => {
                 showevent(event),
                 setevent(false);
                }}
                // eventClick={(event) => {
                //   console.log(event?.event?.id)
                // /////////////////////////////////
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                // /////////////////////////////////
                editable={true}
                eventTextColor="#fffff"
                eventChange={() => {
                  alert("red");
                }}
                // dateClick={() => {
                // alert("click")
                // }}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
              />
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////// Add Event Modal ///////////////////////// */}
      <Modal show={show} centered size="lg" onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* /////////////////////////////// */}
                  <div className="mb-3">
                    <label className="form-label">Your name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && (
                      <p className="text-danger">{formik.errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  {/* /////////////////////////////////////////////// event name*/}
                  <div className="mb-3">
                    <label className="form-label">Event Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.title && (
                      <p className="text-danger">{formik.errors.title}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  {/* ///////////////////////////////////////////////  start date */}
                  <div className="mb-3">
                    <label className="form-label">Start Event</label>
                    <input
                      type="date"
                      className="form-control"
                      min={moment().format("YYYY-MM-DD")}
                      value={formik?.values?.startdate}
                      onChange={(e) => {
                        formik.setFieldValue("enddate", ""),
                          formik.setFieldValue("startdate", e.target.value);
                      }}
                      name="startdate"
                    />
                    {formik.errors.startdate && (
                      <p className="text-danger">{formik.errors.startdate}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  {/* /////////////////////////////////////////////////  end date */}
                  <div className="mb-3">
                    <label className="form-label">End Event</label>
                    <input
                      type="date"
                      value={formik?.values?.enddate}
                      onChange={formik?.handleChange}
                      min={moment(formik.values.startdate).format("YYYY-MM-DD")}
                      values={formik.values.enddate}
                      className="form-control"
                      name="enddate"
                    />
                    {formik.errors.enddate && (
                      <p className="text-danger">{formik.errors.enddate}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  {/* //////////////////////////////////////////////////////////////  event color */}
                  <div className="mb-3">
                    <label className="form-label">Event color</label>
                    <input
                      type="color"
                      className="form-control mt-1"
                      name="color"
                      value={formik?.values?.color}
                      onChange={formik?.handleChange}
                    />
                    {formik.errors.color && (
                      <p className="text-danger">{formik.errors.color}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  {/* //////////////////////////////////////////  event detail */}
                  <div className="mb-3">
                    <label className="form-label">Event Detail</label>
                    <textarea
                      className="form-control"
                      name="descript"
                      rows="5"
                      value={formik?.values?.descript}
                      onChange={formik.handleChange}
                    ></textarea>
                    {formik.errors.descript && (
                      <p className="text-danger">{formik.errors.descript}</p>
                    )}
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
              type="submit"
              variant="success"
              onClick={formik.handleSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {/* ////////////////////////////////////////////////  show modal event */}
      <Modal show={eventshow} centered onHide={eventClose}>
        <Modal.Header closeButton>
          <Modal.Title>Event </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="event border text-capitalize p-3">
                  <strong>Task </strong>
                  <p>{formik?.values?.title}</p>
                  {/* ///////////////////// */}
                  <strong>Start event </strong>
                  <p>{formik?.values?.startdate}</p>
                  {/* //////////////////////// */}
                  <strong>End event </strong>
                  <p>{formik?.values?.enddate}</p>
                </div>
              </div>
              <div className="col-md-6 border">
                <div className="evetn-detail  text-capitalize  p-3">
                  <strong>Event Desription </strong>
                  <p>{formik?.values?.descript}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={eventClose}>
            Close
          </Button>
          <Button variant="success" onClick={eventClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
