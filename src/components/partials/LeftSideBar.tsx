import { Link } from "react-router-dom";
import { MenuAvatar } from "./../Ui/MenuAvatar";
const LeftSideBar = ({ user }: any) => {
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
              {user && user.role.role_name === "ADMIN" && (
                <>
                  <li>
                    <Link to='/dashbord'>
                      <MenuAvatar img={"home"} />
                      {/* <span className='badge bg-info rounded-pill float-end'>
                        4
                      </span> */}
                      <span className='bold'> Acceuil </span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/dashbord/users'>
                      <MenuAvatar img={"users"} />
                      {/* <span className='badge bg-info rounded-pill float-end'>
                        4
                      </span> */}
                      <span className='bold'> Utilisateurs </span>
                    </Link>
                  </li>

                  <li>
                    <Link to='/dashbord/employees'>
                      <MenuAvatar img={"employees"} />
                      {/* <span className='badge bg-info rounded-pill float-end'>
                        4
                      </span> */}
                      <span className='bold'> Employées </span>
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link to='/dashbord/students'>
                  <MenuAvatar img={"employees"} />
                  {/* <span className='badge bg-info rounded-pill float-end'>
                    4
                  </span> */}
                  <span className='bold'> Etudiants </span>
                </Link>
              </li>

              {user && user.role.role_name === "ADMIN" && (
                <li>
                  <Link to='/dashbord/faculties'>
                    <MenuAvatar img={"faculty"} />
                    {/* <span className='badge bg-info rounded-pill float-end'>
                    4
                  </span> */}
                    <span className='bold'> Les Facultés </span>
                  </Link>
                </li>
              )}
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
