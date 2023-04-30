import React from "react";

export const CourseListCatalogBysesion = ({ course }: any) => {
  console.log(course);

  return (
    <>
      <ul
        className='sortable-list tasklist list-unstyled bg-white mb-1 m-1'
        id='upcoming'
      >
        <li id='task1 ' className='mb-2'>
          <span className='badge bg-soft-danger text-danger float-end'>
            {course.matiere_base ? "Basic" : "Ordinaire"}
          </span>
          <h5 className='mt-0'>{course.courses.nom_cours}</h5>
          <p>{course.courses.description}</p>
          <div className='clearfix' />
          {/* <div className='row'>
            <Divider />
            <div className='inbox-widget'>
              <div className='inbox-item'>
                <div className='inbox-item-img'>
                  <Avatar className='rounded-circle' size={40} />
                </div>
                <p className='inbox-item-author'>Stillnotdavid</p>
                <p className='inbox-item-text'>Professur</p>
              </div>
            </div>
          </div> */}
        </li>
      </ul>
    </>
  );
};
