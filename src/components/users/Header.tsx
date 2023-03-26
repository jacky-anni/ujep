import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className='row justify-content-between mb-2 p-2'>
        {/* {student.total> 0 && <EmployeeSearchBar />} */}
        <div className='col-md-6 col-sm-12 '></div>

        <div className='col-6 text-sm-end'>
          <Link to='/dashbord/add-users'>
            <button className='btn btn-primary'>Ajouter Utilisateurs</button>
          </Link>
        </div>
      </div>
    </>
  );
};
