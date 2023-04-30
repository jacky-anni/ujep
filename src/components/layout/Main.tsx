import TopBar from "../partials/TopBar";
import LeftSideBar from "../partials/LeftSideBar";
import Footer from "../partials/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser } from "../../actions/UserAction";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { UserKey } from "../../ultils/keys";
import NetWorkConnection from "./NetWorkConnection";
import { Preloader } from "./Preloader";
import { ErrorBoundary } from "react-error-boundary";
import { errorBoundary } from "../../ultils/errorBoundary";
import { Suspense } from "react";
import { Loader } from "./Loader";
const Main = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery([UserKey, 1], () => getUser());
  const err: any = error;

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {err && err.response?.status === 401 ? (
            navigate("/")
          ) : err && err.message === "Network Error" ? (
            <NetWorkConnection />
          ) : (
            <div>
              <div id='wrapper'>
                <TopBar user={data} />
                <LeftSideBar user={data} />
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
                  theme='dark'
                />
                <div className='content-page'>
                  <div className='content'>
                    {/* Start Content*/}
                    <div className='container-fluid'>
                      {/* start page title */}
                      <div className='row'>
                        <div className='col-12'>
                          <div className='page-title-box'>
                            <ErrorBoundary
                              fallbackRender={errorBoundary}
                              onReset={() => {
                                // Reset the state of your app so the error doesn't happen again
                              }}
                            >
                              <Suspense fallback={<Loader />}>
                                <Outlet />
                                <Footer />
                              </Suspense>
                            </ErrorBoundary>
                            {/* {children} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Main;
