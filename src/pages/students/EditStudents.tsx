import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { ShowStudents } from "../../actions/StudentAction";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { AppTitle } from "../../components/partials/AppTitle";
import { StudentsLoading } from "../../components/students/StudentsLoading";
import { StudentKey, UserKey } from "../../ultils/keys";
import { EditStudentsForm } from "./../../components/students/EditStudentsForm";

export const EditStudents = () => {
  const { student } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [StudentKey, student],
    () => ShowStudents(student),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Modifier un (e) étudiant (e)"} img={"users"} />
      <div className='bg-white'>
        <div className='col-md-12 p-2'>
          {isLoading ? (
            <StudentsLoading />
          ) : isError ? (
            <NotFoundTemplate message={err.response.data.message} />
          ) : (
            <EditStudentsForm student={data} />
          )}
        </div>
      </div>
    </>
  );
};
