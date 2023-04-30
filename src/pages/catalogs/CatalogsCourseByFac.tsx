import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { useQuery } from "@tanstack/react-query";
import { GetFaculty } from "../../actions/FacultyActions";
import { useParams } from "react-router-dom";
import { FacultyKey } from "../../ultils/keys";
import { DataLoading } from "../../components/layout/DataLoading";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { Divider } from "antd";
import { SessionCourseList } from "../../components/catalogs/SessionCourseList";

export const CatalogsCourseByFac = () => {
  const { idFaculty } = useParams();
  // select faculties
  const { data, isLoading, isError, error } = useQuery(
    [FacultyKey, idFaculty],
    () => GetFaculty(idFaculty),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;
  return (
    <>
      <AppTitle title={"Catalogue Cours"} img={"catalogue"} />

      <div className='col-md-12 mb-2'>
        {isLoading ? (
          <DataLoading />
        ) : isError ? (
          <NotFoundTemplate message={err.response.data.message} />
        ) : (
          <>
            <div className='col-md-12'>
              {/* project card */}
              <div className='card d-block'>
                <div className='card-body'>
                  <div className='clearfix' />
                  <h4 className='text-primary bold'>
                    {" "}
                    <i className='fa fa-graduation-cap'></i> {data.nom_faculte}
                  </h4>
                  <p>{data.description}</p>
                  <Divider />
                  <SessionCourseList faculty={data} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
