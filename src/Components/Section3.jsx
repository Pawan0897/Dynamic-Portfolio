import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
function Section3() {
  const {data} = useQuery({
    queryKey:["portfolio"],
    queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/") 
  })
  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="resum">
              <p className="text-center">
                Visit my portfolio and keep your feedback
              </p>
        
              <h2 className="text-center">M<strong className="bgcolortext">y</strong> Por<strong className="bgcolortext"></strong>tfo<strong className="bgcolortext">lio</strong></h2>
              <div className="row justify-content-center mt-5">
                <div className="res-detail d-flex justify-content-center align-items-center">
                  <ul className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                    <li
                      className="nav-link  active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Education
                    </li>
                    <li
                      className="nav-link "
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Professional Skills
                    </li>
                    <li
                      className="nav-link "
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Experience
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////// */}
      {
      data?.data?.map((item) => {
        return(
          item?.project == "traning" &&
          <>
         
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="container mt-5 pt-5">
            <div className="row">
              <div className="col-md-6 border-edit ps-5 pe-5 pe-0">
                <div className="detail-first p-4 ">
                  <h2>{item?.education?.first_title}</h2>
                  <p>
                     ({moment(item?.education?.start_date).format("YYYY")} -  {moment(item?.education?.end_date).format("YYYY")})
                  </p>

                  <br></br>
                  <hr />

                  <p>
                   {
                    item?.education?.first_detail
                   }
                  </p>
                </div>
              </div>
              <div className="col-md-6 border-edit ps-5 pe-0">
                <div className="detail-first  p-4">
                <h2>{item?.education?.second_title}</h2>
                  <p>
                     ({moment(item?.education?.secondstart_date).format("YYYY")} -  {moment(item?.education?.secondend_date).format("YYYY")})
                  </p>

                  <br></br>
                  <hr />

                  <p>
                   {
                    item?.education?.second_detail
                   }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////// */}
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="container mt-5 pt-5">
            <div className="row ">
              <div className="col-md-6 border-edit ps-5 pe-5 pe-0">
                <div className="detail-first p-4 ">
                <h2>{item?.personal_skill?.first_title}</h2>
                  <p>
                     ({moment(item?.personal_skill?.start_date).format("YYYY")} -  {moment(item?.personal_skill?.end_date).format("YYYY")})
                  </p>

                  <br></br>
                  <hr />

                  <p>
                   {
                    item?.personal_skill?.first_detail
                   }
                  </p>
                </div>
              </div>
              <div className="col-md-6 border-edit ps-5 pe-0">
                <div className="detail-first  p-4">
                <h2>{item?.personal_skill?.second_title}</h2>
                  <p>
                     ({moment(item?.personal_skill?.secondstart_date).format("YYYY")} -  {moment(item?.personal_skill?.secondend_date).format("YYYY")})
                  </p>

                  <br></br>
                  <hr />

                  <p>
                   {
                    item?.personal_skill?.second_detail
                   }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////// */}
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className="container  mt-5 pt-5">
            <div className="row ">
                
              <div className="col-md-6 border-edit ps-5 pe-5 pe-0">
                <div className="detail-first p-4 ">
                <h2>{item?.experience?.first_title}</h2>
                  <p>
                     ({moment(item?.experience?.start_date).format("YYYY")} -  {moment(item?.experience?.end_date).format("YYYY")})
                  </p>

                  <br></br>
                  <hr />

                  <p>
                   {
                    item?.experience?.first_detail
                   }
                  </p>
                </div>
              </div>
              <div className="col-md-6 border-edit ps-5 pe-0">
                <div className="detail-first  p-4">
                <h2>{item?.experience?.second_title}</h2>
                  <p>
                     ({moment(item?.experience?.secondstart_date).format("YYYY")} -  {moment(item?.experience?.secondend_date).format("YYYY")})
                  </p>

                  <br></br>
                  <hr />

                  <p>
                   {
                    item?.experience?.second_detail
                   }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////// */}
      </div>
      </>
        )
      })
    }
    </>
  );
}

export default Section3;
