import React, { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const Loader = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.continuousStart();
  }, []);
  return (
    <>
      <LoadingBar color='#f11946' ref={ref} shadow={true} />
      <div className='bg-white p-3'>
        <Box>
          <Skeleton variant='rectangular' height={60} />
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
      </div>
    </>
  );
};
