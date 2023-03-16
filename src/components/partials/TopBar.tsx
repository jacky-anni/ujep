import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/UserAction";
import { logoutUser } from "../../redux/UserSlice";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks/hooks";

const TopBar = () => {
  const { user } = useAppSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState<any>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser("Chrgement...");
    }
  }, [user]);

  const onClick = async () => {
    const data = await logout();
    if (data.status !== 401) {
      dispatch(logoutUser());
      return navigate("/");
    }
  };

  return (
    <>
      {/* Topbar Start */}
      <div className='navbar-custom'>
        <div className='container-fluid'>
          <ul className='list-unstyled topnav-menu float-end mb-0'>
            <li className='d-none d-lg-block'>
              <form className='app-search'>
                <div className='app-search-box dropdown'>
                  <div className='input-group'>
                    <input
                      type='search'
                      className='form-control'
                      placeholder='Search...'
                      id='top-search'
                    />
                    <button className='btn input-group-text' type='submit'>
                      <i className='fa fa-search' />
                    </button>
                  </div>
                </div>
              </form>
            </li>

            <li className='dropdown notification-list topbar-dropdown'>
              <span
                className='nav-link dropdown-toggle waves-effect waves-light'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'
              >
                <i className='fa fa-bell' />
                <span className='badge bg-danger rounded-circle noti-icon-badge'>
                  9
                </span>
              </span>
              <div className='dropdown-menu dropdown-menu-end dropdown-lg'>
                {/* item*/}
                <div className='dropdown-item noti-title'>
                  <h5 className='m-0'>
                    <span className='float-end'>
                      <span className='text-dark'>
                        <small>Clear All</small>
                      </span>{" "}
                    </span>
                    Notification
                  </h5>
                </div>
                <div className='noti-scroll' data-simplebar>
                  {/* item*/}
                  <span className='dropdown-item notify-item active'>
                    <div className='notify-icon'>
                      <img
                        src='/assets/images/users/user-1.jpg'
                        className='img-fluid rounded-circle'
                        alt=''
                      />
                    </div>
                    <p className='notify-details'>Cristina Pride</p>
                    <p className='text-muted mb-0 user-msg'>
                      <small>
                        Hi, How are you? What about our next meeting
                      </small>
                    </p>
                  </span>
                  {/* item*/}
                  <span className='dropdown-item notify-item'>
                    <div className='notify-icon bg-primary'>
                      <i className='mdi mdi-comment-account-outline' />
                    </div>
                    <p className='notify-details'>
                      Caleb Flakelar commented on Admin
                      <small className='text-muted'>1 min ago</small>
                    </p>
                  </span>
                  {/* item*/}
                  <span className='dropdown-item notify-item'>
                    <div className='notify-icon'>
                      <img
                        src='assets/images/users/user-4.jpg'
                        className='img-fluid rounded-circle'
                        alt=''
                      />
                    </div>
                    <p className='notify-details'>Karen Robinson</p>
                    <p className='text-muted mb-0 user-msg'>
                      <small>
                        Wow ! this admin looks good and awesome design
                      </small>
                    </p>
                  </span>
                  {/* item*/}
                  <span className='dropdown-item notify-item'>
                    <div className='notify-icon bg-warning'>
                      <i className='mdi mdi-account-plus' />
                    </div>
                    <p className='notify-details'>
                      New user registered.
                      <small className='text-muted'>5 hours ago</small>
                    </p>
                  </span>
                  {/* item*/}
                  <span className='dropdown-item notify-item'>
                    <div className='notify-icon bg-info'>
                      <i className='mdi mdi-comment-account-outline' />
                    </div>
                    <p className='notify-details'>
                      Caleb Flakelar commented on Admin
                      <small className='text-muted'>4 days ago</small>
                    </p>
                  </span>
                  {/* item*/}
                  <span className='dropdown-item notify-item'>
                    <div className='notify-icon bg-secondary'>
                      <i className='mdi mdi-heart' />
                    </div>
                    <p className='notify-details'>
                      Carlos Crouch liked
                      <b>Admin</b>
                      <small className='text-muted'>13 days ago</small>
                    </p>
                  </span>
                </div>
                {/* All*/}
                <span className='dropdown-item text-center text-primary notify-item notify-all'>
                  View all
                  <i className='fe-arrow-right' />
                </span>
              </div>
            </li>
            <li className='dropdown notification-list topbar-dropdown'>
              <span
                className='nav-link dropdown-toggle nav-user me-0 waves-effect waves-light'
                data-bs-toggle='dropdown'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'
              >
                <img
                  src='/assets/images/users/user-1.jpg'
                  alt=''
                  className='rounded-circle'
                />
                <span className='pro-user-name ms-1'>
                  {currentUser.prenom} {currentUser.nom}{" "}
                  <i className='fa fa-chevron-down' />
                </span>
              </span>
              <div className='dropdown-menu dropdown-menu-end profile-dropdown'>
                {/* item*/}
                <div className='dropdown-header noti-title'>
                  <h6 className='text-overflow m-0'>Welcome !</h6>
                </div>
                {/* item*/}
                <span className='dropdown-item notify-item'>
                  <i className='fa fa-user' />
                  <span>My Account</span>
                </span>
                <div className='dropdown-divider' />
                {/* item*/}
                <span
                  className='dropdown-item notify-item'
                  style={{ cursor: "pointer" }}
                  onClick={onClick}
                >
                  <i className='fa fa-signout' />
                  <span>Logout</span>
                </span>
              </div>
            </li>
            {/* <li className='dropdown notification-list'>
              <a
                href='javascript:void(0);'
                className='nav-link right-bar-toggle waves-effect waves-light'
              >
                <i className='fe-settings noti-icon' />
              </a>
            </li> */}
          </ul>
          {/* LOGO */}

          <div className='logo-box'>
            <span className='logo logo-dark text-center'>
              <span className='logo-sm'>
                <img src='assets/images/logo-sm.png' alt='' height={22} />
                {/* <span class="logo-lg-text-light">UBold</span> */}
              </span>
              <span className='logo-lg'>
                <img src='/assets/images/logo-dark.png' alt='' height={20} />
                {/* <span class="logo-lg-text-light">U</span> */}
              </span>
            </span>
            <span className='logo logo-light text-center'>
              <span className='logo-sm'>
                <img src='/assets/images/logo-sm.png' alt='' height={22} />
              </span>
              <span className='logo-lg'>
                <img src='/assets/images/logo-light.png' alt='' height={20} />
              </span>
            </span>
          </div>
          <ul className='list-unstyled topnav-menu topnav-menu-left m-0'>
            <li>
              {/* Mobile menu toggle (Horizontal Layout)*/}
              <span
                className='navbar-toggle nav-link'
                data-bs-toggle='collapse'
                data-bs-target='#topnav-menu-content'
              >
                <div className='lines'>
                  <span />
                  <span />
                  <span />
                </div>
              </span>
              {/* End mobile menu toggle*/}
            </li>
            <li className='dropdown d-none d-xl-block'>
              <span
                className='nav-link dropdown-toggle waves-effect waves-light'
                data-bs-toggle='dropdown'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'
              >
                Ajouter un nouveau &nbsp;
                <i className='fa fa-chevron-down' />
              </span>
              <div className='dropdown-menu'>
                {/* item*/}
                <Link to='/add-employee' className='dropdown-item'>
                  <i className='fa fa-briefcase me-1' />
                  <span>Employé</span>
                </Link>
              </div>
            </li>
          </ul>

          <div className='clearfix' />
          {/* <div>
            <LoadingBar
              color='#f11946'
              progress={progress}
              loaderSpeed={100}
              onLoaderFinished={() => setProgress(0)}
            />
            <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
            <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
            <button onClick={() => setProgress(100)}>Complete</button>
            <br />
          </div> */}
        </div>
      </div>

      {/* end Topbar */}
    </>
  );
};

export default TopBar;
