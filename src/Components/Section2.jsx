import { useQuery } from "@tanstack/react-query";
import axios from "axios";





function Section2() {
const {data} = useQuery({
  queryKey:["whatido"],
  queryFn:() => axios.get("https://66e408c7d2405277ed12c7ba.mockapi.io/all/users/products")
  
})

  return (
    <>
      <div className="container  " >
        <div className="section2" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

          {/* ////////////////////////////////// */}
          {
            data?.data?.map((item) => {
              return(
                item?.project == "traning" &&
                <>
          <div className="row ">
            <p className="text-center font-bold bgcolortext">Feactures</p>
            <h2 className="mb-5 pb-3 text-center font-styleX ">
              what i <strong className="bgcolortext">do</strong>
            </h2>

            <div className="col-md-4 ">
              <div className="do-sec  p-5">
                <h3 className="font-styleXX bgcolortext">{item?.whatdo1?.title}</h3>
                <p className="">
                 {
                  item?.whatdo1?.detail
                 }
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sec p-5">
                <i></i>
                <h3 className="font-styleXX bgcolortext">{item?.whatdo2?.title}</h3>
                <p>
                  {item?.whatdo2?.detail}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sec p-5">
                <i></i>
                <h3 className="font-styleXX bgcolortext">{item?.whatdo3?.title}</h3>
                <p>
                {item?.whatdo3?.detail}
                
                </p>
              </div>
            </div>
          </div>
          </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Section2;
