import React from "react";
import { ThreeDots } from "react-loader-spinner";

export const UsersLoading = () => {
  return (
    <>
      <center>
        <ThreeDots
          height='90'
          width='90'
          radius='9'
          color='#7d56c2'
          ariaLabel='three-dots-loading'
          wrapperStyle={{ display: "block" }}
          visible={true}
        />
        <p style={{ marginTop: "-30px" }}>Chargment en cours...</p>
      </center>
    </>
  );
};
