
import Links from "./Links";




export default function Header() {
  return (
    <>
      {/* ////////////////////////// */}
     
   
      <nav className="navbar navbar-expand-lg py-4 px-3 bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
             My Journey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse me-0 navbar-collapse " >
            <ul className="navbar-nav   ms-auto mb-2 mb-lg-0">
             <Links />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
