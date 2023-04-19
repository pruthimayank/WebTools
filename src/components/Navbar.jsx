export default function Navbar(props) {
  return (
    <main>
      <nav className={`navbar navbar-expand-lg rounded-bottom-4 bg-${props.mode}}`} data-bs-theme={`${props.mode}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h4 className="navbar-brand m-2">WebTools</h4>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3" key={"xyz"}>
              {/*               <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.apiFn}>APIs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.tempFn}>Templates</a>
              </li>
              {/*               <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.ideaFn}>Ideas</a>
              </li> */}
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input my-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.tT} />
          </div>
        </div>
      </nav>
    </main>
  )
}