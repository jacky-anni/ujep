import React from "react";

export const ShowFaculty = ({ faculty }: any) => {
  return (
    <>
      <div className='card-body p-3'>
        {/* project title*/}
        <h4 className='mt-0'>{faculty.nom_faculte}</h4>
        <p className='text-muted mb-2'>{faculty.description}</p>
        <div className='mb-4'>
          <div className='text-uppercase'>
            <span className='badge badge-soft-primary me-1 font-13 bold p-1'>
              {faculty.degree}
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='mb-4'>
              <h5>Durée</h5>
              <p>{faculty.duree} Ans</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='mb-4'>
              <h5>Nombre de matière</h5>
              <p>{faculty.nombre_matiere} matières</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='mb-4'>
              <h5>Nombre de passage</h5>
              <p>{faculty.note_de_passage} %</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end card-body*/}
    </>
  );
};
