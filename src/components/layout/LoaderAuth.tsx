import React from "react";
import { Audio } from "react-loader-spinner";

export const LoaderAuth = () => {
  return (
    <>
      <div className='authentication-bg authentication-bg-pattern'>
        <div className='account-pages mt-5 mb-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-8 col-lg-6 col-xl-4'>
                <div className='card bg-pattern'>
                  <div className='card-body p-4'>
                    <div className='text-center w-75 m-auto'>
                      <div className='auth-logo'>
                        <a
                          href='index.html'
                          className='logo logo-dark text-center'
                        >
                          <span className='logo-lg'>
                            <img
                              src='assets/images/logo-dark.png'
                              alt='sss'
                              height={22}
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                    <center>
                      <p style={{ padding: "10px", backgroundColor: "white" }}>
                        <Audio
                          height='100'
                          width='100'
                          color='#7d56c2'
                          ariaLabel='audio-loading'
                          wrapperClass='wrapper-class'
                          wrapperStyle={{ display: "block" }}
                          visible={true}
                        />
                        <h6>Chargment en cours...</h6>
                      </p>
                    </center>
                  </div>{" "}
                  {/* end card-body */}
                </div>
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
      </div>
    </>
  );
};
