import React, { useEffect } from "react";
import TopBar from "../partials/TopBar";
import LeftSideBar from "../partials/LeftSideBar";
import Footer from "../partials/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser } from "../../actions/UserAction";
import { ToastContainer } from "react-toastify";
import { Loader } from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { UserKey } from "../../ultils/keys";
import NetWorkConnection from "./NetWorkConnection";
const Main = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery([UserKey], () =>
    getUser()
  );
  const err: any = error;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        // <LoaderAuth />
        <>
          {err && err.response?.status === 401 ? (
            navigate("/")
          ) : err && err.message == "Network Error" ? (
            <NetWorkConnection />
          ) : (
            <div>
              <div id='wrapper'>
                <TopBar user={data} />
                <LeftSideBar />
                <ToastContainer
                  position='bottom-right'
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
          )}
        </>
      )}
    </>
  );
};

export default Main;
