import { Oval } from "react-loader-spinner";
export const DataLoading = () => {
  return (
    <>
      <center>
        <p style={{ padding: "10px", backgroundColor: "white" }}>
          <Oval
            height='30'
            width='30'
            color='#7d56c2'
            ariaLabel='audio-loading'
            wrapperClass='wrapper-class'
            wrapperStyle={{ display: "block" }}
            visible={true}
          />
          <h6>Chargment en cours...</h6>
        </p>
      </center>
    </>
  );
};
