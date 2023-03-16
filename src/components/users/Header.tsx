import React from "react";
import { Link } from "react-router-dom";
import { AddUsers } from "./AddUsers";

export const Header = () => {
  return (
    <>
      <div className='row justify-content-between mb-2 p-2'>
        {/* {student.total> 0 && <EmployeeSearchBar />} */}
        <div className='col-md-6 col-sm-12 '>
          <h4>dsdsd</h4>
        </div>
        <div className='col-6 text-sm-end'>
          <AddUsers />
        </div>
      </div>
    </>
  );
};
