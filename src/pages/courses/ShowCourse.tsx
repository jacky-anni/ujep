import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { CourseBanner } from "../../components/courses/CourseBanner";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CourseKey } from "../../ultils/keys";
import { GetCourse } from "../../actions/CourseAction";
import { DataLoading } from "../../components/layout/DataLoading";

export const ShowCourse = () => {
  // facuty params
  const { idCourse } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [CourseKey, idCourse],
    () => GetCourse(idCourse),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;
  return (
    <>
      <AppTitle title={"Cours"} img={"course"} />
      <div className='bg-white'>
        <div className='row p-1'>
          <div className='col-md-12'>
            {isLoading ? (
              <DataLoading />
            ) : isError ? (
              <NotFoundTemplate message={err.response.data.message} />
            ) : (
              <CourseBanner course={data} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
