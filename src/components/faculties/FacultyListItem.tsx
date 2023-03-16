import React from "react";
import { Link } from "react-router-dom";

export const FacultyListItem = ({ faculty }: any) => {
  return (
    <>
      <Link to={`/dashbord/faculty/${faculty.id}`}>
        <h5 className='mt-0'>
          <span className='text-dark bold'>{faculty.nom_faculte}</span>
        </h5>
      </Link>
      <p className='text-muted text-uppercase'>
        <i className='fa fa-account-circle' /> <small>{faculty.degree}</small>
      </p>
      <div className='badge bg-soft-success text-success mb-3'>Finished</div>
      {/* Desc*/}
      <p
        className='text-muted font-13 mb-3 sp-line-2'
        style={{ height: "20px" }}
      >
        {faculty.description}
      </p>

      {/* <p className='mb-1'>
        <span className='pe-2 text-nowrap mb-2 d-inline-block'>
          <i className='mdi mdi-format-list-bulleted-type text-muted' />
          <b>78</b> Tasks
        </span>
        <span className='text-nowrap mb-2 d-inline-block'>
          <i className='mdi mdi-comment-multiple-outline text-muted' />
          <b>214</b> Comments
        </span>
      </p> */}
    </>
  );
};
