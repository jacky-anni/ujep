import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              © Tous droits réservés | <span>2023</span>
            </div>
            {/* <div className='col-md-6'>
              <div className='text-md-end footer-links d-none d-sm-block'>
                <span>About Us</span>
                <span>Help</span>
                <span>Contact Us</span>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
      {/* end Footer */}
    </>
  );
};

export default Footer;
