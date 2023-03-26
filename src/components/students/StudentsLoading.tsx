import React from "react";
import { Audio } from "react-loader-spinner";

export const StudentsLoading = () => {
  return (
    <>
      <center>
        <p style={{ padding: "10px", backgroundColor: "white" }}>
          <Audio
            height='90'
            width='90'
            color='#7d56c2'
            ariaLabel='audio-loading'
            wrapperClass='wrapper-class'
            wrapperStyle={{ display: "block" }}
            visible={true}
          />
          <h6>Chargement en cours...</h6>
        </p>
      </center>
    </>
  );
};
