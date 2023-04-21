import React from "react";
import { EditCourse } from "./EditCourse";
import { Divider } from "antd";

export const CourseBanner = ({ course }: any) => {
  return (
    <>
      <div className='card-body p-3'>
        {/* project title*/}
        <h4 className='mt-0'>{course.nom_cours}</h4>
        <p className='text-muted mb-2'>{course.description}</p>
        <Divider />

        <div className='col-md-12'>
          <div className='button-list'>
            <EditCourse course={course} />
            <button
              type='button'
              className='btn btn-outline-success waves-effect waves-light'
            >
              <i className='fa fa-check'></i> Attribution
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
