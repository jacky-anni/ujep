import React, { useEffect } from "react";
import TopBar from "../partials/TopBar";
import LeftSideBar from "../partials/LeftSideBar";
import Footer from "../partials/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks/hooks";
import { setCurrentUser } from "../../actions/UserAction";
import { getCurrentUser, logoutUser } from "../../redux/UserSlice";
import { ToastContainer } from "react-toastify";
import { Loader } from "./Loader";
const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      // fetch data
      const data = await setCurrentUser();
      if (data.status === 401) {
        dispatch(logoutUser());
        return navigate("/");
      } else {
        dispatch(getCurrentUser(data));
      }
    })();
  }, [location.pathname]);

  return (
    <>
      <div>
        <div id='wrapper'>
          <TopBar />
          <LeftSideBar />
          <ToastContainer
            position='bottom-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />

          {/* ============================================================== */}
          {/* Start Page Content here */}
          {/* ============================================================== */}
          <div className='content-page'>
            <div className='content'>
              {/* Start Content*/}
              <div className='container-fluid'>
                {/* start page title */}
                <div className='row'>
                  <div className='col-12'>
                    <div className='page-title-box'>
                      {/* {children} */}
                      <Outlet />
                      <Footer />
                    </div>
                  </div>
                </div>
                {/* end page title */}
              </div>
              {/* container */}
            </div>
            {/* content */}
          </div>
          {/* ============================================================== */}
          {/* End Page content */}
          {/* ============================================================== */}
        </div>
        {/* END wrapper */}
        {/* Right Sidebar */}
      </div>
    </>
  );
};

export default Main;
