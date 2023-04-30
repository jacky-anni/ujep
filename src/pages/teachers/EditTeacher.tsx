import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";

import { EditTeacherForm } from "../../components/teachers/EditTeacherForm";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GetTeacher } from "../../actions/TeacherActions";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { TeacherKey } from "../../ultils/keys";
import { DataLoading } from "../../components/layout/DataLoading";

export const EditTeacher = () => {
  const { idTeacher } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [TeacherKey, idTeacher],
    () => GetTeacher(idTeacher),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Modifer professeur (e)"} img={"users"} />
      <div className='col-md-12 bg-white p-2'>
        {isLoading ? (
          <DataLoading />
        ) : isError ? (
          <NotFoundTemplate message={err.response.data.message} />
        ) : (
          <EditTeacherForm teacher={data} />
        )}
      </div>
    </>
  );
};
