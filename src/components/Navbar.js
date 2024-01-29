import React from 'react'
import PropTypes from 'prop-types' 

export default function Navbar(props) {
  return (
  
    <nav className={'navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}'}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.abouttext} </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
          </li>
        </ul>

                            <div className='form-check form-switch text-${props.mode}==='>
                      <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
        
        </div>
      </div>
    </nav>
      
              
              


  );
}
Navbar.prototype={
    title: PropTypes.string,
    abouttext: PropTypes.string
}
Navbar.defaultProps={
    title: "set title here",
    abouttext:"about text"
}