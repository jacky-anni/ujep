import { useQuery } from "@tanstack/react-query";
import { Divider, Empty } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { TeacherKey } from "../../ultils/keys";
import { TeacherList } from "../../actions/TeacherActions";
import { Alert } from "@mui/material";
import { TeacherItem } from "./TeacherItem";
import { DataLoading } from "../layout/DataLoading";

export const TeachersList = () => {
  const { data, isLoading, isError, error } = useQuery([TeacherKey], () =>
    TeacherList()
  );

  // define error
  const err: any = error;

  return (
    <>
      <div className='row  mb-2 p-2'>
        {/* {student.total> 0 && <EmployeeSearchBar />} */}
        <div className='col-md-6 col-sm-12'>
          <h4>Search Bar</h4>
        </div>
        <div className='col-6 text-sm-end'>
          <Link to='/dashbord/teacher/create'>
            <button type='button' className='btn btn-primary bold'>
              <i className='fa fa-user'></i> Ajouter professeur
            </button>
          </Link>
        </div>
        <Divider />

        <div className='row m-1'>
          {isError && (
            <Alert variant='filled' severity='error' className='mb-3'>
              {err.response.data.message || "Probleme d'enregistrement"}
            </Alert>
          )}
          {isLoading ? (
            <DataLoading />
          ) : (
            <>
              <div className='table-responsive'>
                {/* {employee.meta.total} employees */}
                <table className='table table-centered table-nowrap table-hover mb-0'>
                  {data && data.data.length > 0 && (
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th> Niveau</th>
                        <th> Date de naissance</th>
                        <th style={{ width: 82 }}>Action</th>
                      </tr>
                    </thead>
                  )}

                  <tbody>
                    {/* if the employees is not empty , thetch data*/}
                    {!isLoading &&
                      data.data.length > 0 &&
                      data.data.map((teacher: any) => (
                        <TeacherItem teacher={teacher} key={teacher.id} />
                      ))}
                  </tbody>
                </table>
                {/* loading state */}
                {isLoading && <>Loading.....</>}

                {/* if the employees is empty */}
                {isError && (
                  <p className='mt-3 mb-0'>
                    <Empty description={"Pas de données pour l'instant"} />
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
