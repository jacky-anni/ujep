import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <>
      {/* ========== Left Sidebar Start ========== */}
      <div className='left-side-menu'>
        <div className='h-100' data-simplebar>
          {/* User box */}

          {/*- Sidemenu */}
          <div id='sidebar-menu'>
            <ul id='side-menu'>
              <li className='menu-title'>Navigation</li>
              <li>
                <Link to='#sidebarDashboards' data-bs-toggle='collapse'>
                  <i className='fa fa-user' />
                  <span className='badge bg-info rounded-pill float-end'>
                    4
                  </span>
                  <span> Employées </span>
                </Link>
                <div className='collapse' id='sidebarDashboards'>
                  <ul className='nav-second-level'>
                    <li>
                      <Link to='/dashbord/add-employee'>
                        {" "}
                        <i className='fa fa-chevron-right' /> &nbsp; Ajouter
                        employé
                      </Link>
                    </li>
                    <li>
                      <Link to='/dashbord/employees'>
                        {" "}
                        <i className='fa fa-chevron-right' /> &nbsp; Liste des
                        employés
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to='/dashbord/students'>
                  <i className='fa fa-user' />
                  <span className='badge bg-info rounded-pill float-end'>
                    4
                  </span>
                  <span> Etudiants </span>
                </Link>
              </li>

              <li>
                <Link to='/dashbord/users'>
                  <i className='fa fa-user' />
                  <span className='badge bg-info rounded-pill float-end'>
                    4
                  </span>
                  <span> Utilisateurs </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Sidebar */}
          <div className='clearfix' />
        </div>
        {/* Sidebar -left */}
      </div>
      {/* Left Sidebar End */}
    </>
  );
};

export default LeftSideBar;
