import React from "react";
import { Oval } from "react-loader-spinner";

export const Preloader = () => {
  return (
    <>
      <div id='prelosader' className='preloader'>
        <center>
          <Oval
            height={60}
            width={60}
            color='#7d56c2'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='#7d56c2'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </center>
      </div>
    </>
  );
};
