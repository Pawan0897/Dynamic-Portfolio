import "../AdminPanel/style.css";
import AddEducationPort from "./AddEducationPort";
import AddExperience from "./AddExperience";
import AddPersonSkill from "./AddPersonSkill";
import Sidebar from "./Sidebar";
import "../../JS/cursor.js";
export default function AddPortfolio() {
  
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left:`${posX}px`,
    top:`${posY}px`
    
  },{duration:500,fill:"forwards"});

})
  return (
    <>
    <div className="cursor-dot" data-cursor-dot></div>
    <div className="curson-outline" data-cursor-outline></div>
      <section>
        <div className="row m-0 bg-color">
          {/* ///////////// side bar */}
          <Sidebar />
          {/* //////////////////////////////////////////// */}
          <div className="col-md-10 p-0 margin-auto">
            <div className="container pt-5  ">
              <div className="row  me-3">
                <div className="col-md-12 p-4 ">
                    {/* //////////////////////////////////     Education */}
                   <AddEducationPort />
                  {/* ///////////////////////////////////////////// personal skills */}
                  <hr className="bg-danger mt-5 mb-5" style={{height:"2px"}} />

                  <AddPersonSkill />
                  {/* ///////////////////////////////////////////////   ///////////////  Experience */}
                  <hr className="bg-danger mt-5 mb-5" style={{height:"2px"}} />
                  <AddExperience />
 
                  {/* ///////////end  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}
      </section>
    </>
  );
}
