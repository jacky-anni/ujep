import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
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
                        <span className='logo logo-dark text-center'>
                          <span className='logo-lg'>
                            <img
                              src='/assets/images/logo.jpeg'
                              alt='sss'
                              height={100}
                            />
                          </span>
                        </span>
                        <a
                          href='index.html'
                          className='logo logo-light text-center'
                        >
                          <span className='logo-lg'>
                            <img
                              src='assets/images/logo-light.png'
                              alt='s'
                              height={22}
                            />
                          </span>
                        </a>
                      </div>
                      <h4
                        style={{
                          color: "#7d56c2",
                          fontWeight: "bold",
                          lineHeight: "22px",
                        }}
                      >
                        Université Jérusalem de Pignon Haïti
                      </h4>
                      <p className='text-muted mb-4 mt-3'>
                        Entrez votre non utilisateur et votre mot de passe
                      </p>
                    </div>
                    <Outlet />
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

export default LoginLayout;
