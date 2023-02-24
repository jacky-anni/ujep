import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { Skeleton } from "antd";
import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.continuousStart();
  }, []);
  return (
    <>
      <LoadingBar color='#f11946' ref={ref} shadow={true} />
      <Skeleton active />
      {/* <center>
        <RotatingLines
          strokeColor='#7d56c2'
          strokeWidth='6'
          animationDuration='0.75'
          width='65'
          visible={true}
        />
        <Skeleton active />
        <p>Chajman....</p>
      </center> */}
    </>
  );
};
