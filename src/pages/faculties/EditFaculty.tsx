import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { GetFaculty } from "../../actions/FacultyActions";
import { EditFacultyForm } from "../../components/faculties/Ui/EditFacultyForm";
import { FacultyLoading } from "../../components/faculties/Ui/FacultyLoading";
import { AppTitle } from "../../components/partials/AppTitle";
import { FacultyKey } from "../../ultils/keys";
import { NotFoundTemplate } from "./../../components/layout/NotFoundTemplate";

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
            <FacultyLoading />
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
