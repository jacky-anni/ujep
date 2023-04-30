import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { GetFaculty } from "../../actions/FacultyActions";
import { EditFacultyForm } from "../../components/faculties/Ui/EditFacultyForm";
import { AppTitle } from "../../components/partials/AppTitle";
import { FacultyKey } from "../../ultils/keys";
import { NotFoundTemplate } from "./../../components/layout/NotFoundTemplate";
import { DataLoading } from "../../components/layout/DataLoading";

export const EditFaculty = () => {
  const { idFaculty } = useParams();
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
      <AppTitle title={"Modifier cette faculté"} img={"users"} />
      <div className='bg-white'>
        <div className='col-md-12 p-2'>
          {isLoading ? (
            <DataLoading />
          ) : isError ? (
            <NotFoundTemplate message={err.response.data.message} />
          ) : (
            <EditFacultyForm faculty={data} />
          )}
        </div>
      </div>
    </>
  );
};
