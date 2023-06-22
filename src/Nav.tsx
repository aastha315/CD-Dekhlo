import './App.css'
import React from 'react';

function Nav(){
    return(
    <div>
      <nav className="navbar navbar-expand-lg style={{ backgroundColor: '#bd7dbd' }}">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>CD-DEKHLO</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Virtual Rating Change</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Comapre Handle</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Say Something</a>
        </li>
      </ul>
      
      <br />
    </div>
    </div>
    </nav>
    </div>
    )
}

export default Nav