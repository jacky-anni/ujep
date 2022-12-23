import { Empty } from "antd";
import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { GetStudents } from "../../redux/actions/StudentAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { studentsFetch } from "../../redux/StudentsSlice";
import StudentSearchBar from "./StudentSearchBar";
import StudentItem from "./StudentItem";
import StudentPagination from "./StudentPagination";

const StudentsList = () => {
  const dispatch = useAppDispatch();
  const student = useAppSelector((state) => state.student);

  useEffect(() => {
    (async () => {
      // fetch data
      const data = await GetStudents();
      if (data.status === 404) {
        console.log(data);
      } else {
        dispatch(studentsFetch(data));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='row justify-content-between mb-2'>
                {/* {student.total> 0 && <EmployeeSearchBar />} */}
                <StudentSearchBar />
                <div className='col-sm-6'>
                  <div className=' text-sm-end'>
                    <Link to='/dashbord/add-students'>
                      <button
                        type='button'
                        className='btn btn-primary'
                        data-bs-target='#custom-modal'
                      >
                        <i className='fa fa-plus'></i> Ajouter etudiant
                      </button>
                    </Link>
                  </div>
                </div>
                {/* end col*/}
              </div>
              <div className='table-responsive'>
                {student.total} etudiants
                <table className='table table-centered table-nowrap table-hover mb-0'>
                  {student.students.length > 0 && (
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Telephone</th>
                        <th>Email</th>
                        <th> Date de naissance</th>
                        <th style={{ width: 82 }}>Action</th>
                      </tr>
                    </thead>
                  )}

                  <tbody>
                    {/* if the employees is not empty , thetch data*/}
                    {!student.isLoading &&
                      student.students.length > 0 &&
                      student.students.map((student: any) => (
                        <StudentItem students={student} />
                      ))}
                  </tbody>
                </table>
                {/* loading state */}
                {student.isLoading && (
                  <>
                    <center>
                      <ThreeDots
                        height='90'
                        width='90'
                        radius='9'
                        color='#7d56c2'
                        ariaLabel='three-dots-loading'
                        wrapperStyle={{ display: "block" }}
                        visible={true}
                      />
                      <p style={{ marginTop: "-30px" }}>
                        Chargment en cours...
                      </p>
                    </center>
                  </>
                )}
                {/* errors */}
                {!student.isLoading && student.errors != null && (
                  <p className='alert alert-danger'>Une erreur </p>
                )}
                {/* if the employees is empty */}
                {!student.isLoading &&
                  student.errors === null &&
                  student.students.length === 0 && (
                    <p className='mt-3 mb-0'>
                      <Empty description={"Pas de données pour l'instant"} />
                    </p>
                  )}
              </div>
              {student.students.length > 0 && (
                <StudentPagination
                  meta={student.meta}
                  total={student.meta.total}
                />
              )}
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
    </>
  );
};

export default StudentsList;
