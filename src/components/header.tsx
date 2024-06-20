export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">CarsBinar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end canvas-nav"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul
              className="d-flex align-items-start gap-4 mb-0 flex-column flex-lg-row ms-auto"
            >
              <li>
                <a href="index.html" className="">Out Service</a>
              </li>
              <li>
                <a href="about.html" className="">Why Us</a>
              </li>
              <li>
                <a href="courses.html" className="">Testimonial</a>
              </li>
              <li><a href="contact.html" className="">FAQ</a></li>
              <li>
                <a href="courses.html" className="btn btn-primary">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
}