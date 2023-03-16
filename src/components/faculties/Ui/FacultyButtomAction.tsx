import React from "react";
import { Link } from "react-router-dom";
import { DeleteFaculty } from "./DeleteFaculty";

export const FacultyButtomAction = ({ faculty }: any) => {
  return (
    <>
      <div className='dropdown float-end'>
        <span
          style={{ cursor: "pointer" }}
          className='dropdown-toggle card-drop arrow-none'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <i className='fa fa-grip-vertical m-0 text-muted h3' />
        </span>
        <div className='dropdown-menu dropdown-menu-end'>
          <Link
            className='dropdown-item'
            to={`/dashbord/faculty/edit/${faculty.id}`}
          >
            <i className='fa fa-edit'></i> Modifier
          </Link>

          {/* <EditFaculty faculty={faculty} /> */}
          <DeleteFaculty faculty={faculty} />
        </div>
      </div>
    </>
  );
};
