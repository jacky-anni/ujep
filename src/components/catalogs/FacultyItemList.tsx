import React from "react";
import { CreateCatalog } from "./CreateCatalog";
import { Divider } from "antd";
import { Link } from "react-router-dom";

export const FacultyItemList = ({ faculty }: any) => {
  return (
    <div className='card project-box'>
      <div className='card-body'>
        <Link to={`/dashbord/faculty/${faculty.id}`}>
          <h5 className='mt-0'>
            <span className='text-dark bold'>{faculty.nom_faculte}</span>
          </h5>
        </Link>
        <p className='text-muted text-uppercase'>
          <i className='fa fa-account-circle' /> <small>{faculty.degree}</small>
        </p>

        <p className='mb-1'>
          <span className='pe-2 text-nowrap mb-2 d-inline-block'>
            <i className='mdi mdi-format-list-bulleted-type text-muted' />
            <b>78</b> Tasks
          </span>
          <span className='text-nowrap mb-2 d-inline-block'>
            <i className='mdi mdi-comment-multiple-outline text-muted' />
            <b>214</b> Comments
          </span>
        </p>
        <Divider />

        <div className='button-list'>
          <Link to={`/dashbord/catalogs/faculty/${faculty.id}`}>
            <button
              type='button'
              className='btn btn-outline-info waves-effect waves-light btn-sm'
            >
              <i className='fa fa-book'></i> Cours
            </button>
          </Link>

          <CreateCatalog faculty={faculty} />
        </div>
      </div>
    </div>
  );
};
