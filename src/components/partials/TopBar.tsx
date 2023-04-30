import { Box, LinearProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/UserAction";
import { Avatar } from "antd";
import { PictureOutlined } from "@ant-design/icons";

const TopBar = ({ user }: any) => {
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(
    async () => {
      return await logout();
    },
    {
      onSuccess: (result) => {
        localStorage.removeItem("wpwuab");
        delete axios.defaults.headers.common["Authorization"];
        return navigate("/");
      },
    }
  );

  const onClick = async () => {
    mutate();
  };

  return (
    <>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color='secondary' />
        </Box>
      )}

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
                <Avatar icon={<PictureOutlined />} />
                <span className='pro-user-name ms-1'>
                  {user.person?.prenom} {user.person?.nom}{" "}
                  <i className='fa fa-chevron-down' />
                </span>
              </span>
              <div className='dropdown-menu dropdown-menu-end profile-dropdown'>
                {/* item*/}
                <div className='dropdown-header noti-title'>
                  <h6 className='text-overflow m-0'>Bienvenue !</h6>
                </div>
                {/* item*/}
                <span className='dropdown-item notify-item'>
                  <i className='fa fa-user' />
                  <span>Mon compte</span>
                </span>
                <div className='dropdown-divider' />
                {/* item*/}
                <span
                  className='dropdown-item notify-item'
                  style={{ cursor: "pointer" }}
                  onClick={onClick}
                >
                  <i className='fa fa-signup' />
                  <span>Déconnexion</span>
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
                <span style={{ color: "red", fontWeight: "bold" }}>U</span>JEPH
              </span>
              <span className='logo-lg'>
                <span style={{ color: "red", fontWeight: "bold" }}>U</span>JEPH
                {/* <span class="logo-lg-text-light">U</span> */}
              </span>
            </span>
            <span className='logo logo-light text-center'>
              <span className='logo-lg-text-light'>
                <span style={{ color: "red", fontWeight: "bold" }}>U</span>JEPH
              </span>
              {/* <span className='logo-sm'>
                <img src='/assets/images/logo-sm.png' alt='' height={22} />
              </span>
              <span className='logo-lg'>
                <img src='/assets/images/logo-light.png' alt='' height={20} />
              </span> */}
            </span>
          </div>

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
