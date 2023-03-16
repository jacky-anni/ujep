import React from "react";

const CustomInput = (props: any) => {
  console.log(props);

  return (
    <div className={`col-md-${props.col} position-relative mb-2`}>
      <label>Entrer le nom faculte</label>
      <input className='form-control ' {...props} />
    </div>
  );
};

export default CustomInput;
