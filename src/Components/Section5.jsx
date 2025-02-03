import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Section5() {
  // //////////////////////////////////////////////
  const {data} = useQuery({
    queryKey:["Skills"],
    queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products/")
  })
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center font-styleX pb-3 mb-5">Sk<strong className="bgcolortext">i</strong>ll<strong className="bgcolortext">s</strong></h2>
        
        <div className="row mt-5 align-item-center justify-content-center">
          <div className="col-md-11 ">
            <div className="skill-slider p-3">
              <ul className="border-0 p-4">
                {
                  data?.data?.map((item) => {

                   return (
                    item?.portfolio &&
                    <>
                <li>
                  <a className="buttton" href="">
                {item?.skills?.name}
                  </a>
                </li>
                </>
                   )
                 })
                }
               
               {/* ////////////////////// */}
               {
                  data?.data?.map((item) => {

                   return (
                    item?.portfolio &&
                    <>
                <li>
                  <a className="buttton" href="">
                {item?.skills?.name}
                  </a>
                </li>
                </>
                   )
                 })
                }
               {/* <li>
                  <a href="">HTML</a>
                </li>
                <li>
                  <a href="">CSS</a>
                </li>
                <li>
                  <a href="">JS</a>
                </li>
                <li className="p-1">
                  <a href="">BOOTSTRAP</a>
                </li>
                <li>
                  <a href="">PHP</a>
                </li>
                <li>
                  <a href="">MYSQL</a>
                </li>
                <li>
                  <a href="">REACT</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
