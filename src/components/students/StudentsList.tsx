import { Empty } from "antd";
import { Link } from "react-router-dom";
import { GetStudents } from "../../actions/StudentAction";
import StudentSearchBar from "./StudentSearchBar";
import StudentItem from "./StudentItem";
import StudentPagination from "./StudentPagination";
import { useQuery } from "@tanstack/react-query";
import { StudentKey } from "../../ultils/keys";
import { StudentsLoading } from "./StudentsLoading";

const StudentsList = () => {
  const { data: students, isLoading } = useQuery([StudentKey], () =>
    GetStudents()
  );

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
                {students && students.meta.total} etudiants
                <table className='table table-centered table-nowrap table-hover mb-0'>
                  {students && students.data.length > 0 && (
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
                    {isLoading ? (
                      <StudentsLoading />
                    ) : (
                      <>
                        {students.data.map((student: any) => (
                          <StudentItem students={student} key={student.id} />
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
                {/* if the employees is empty */}
                {students && students.data.length === 0 && (
                  <div className='row'>
                    {" "}
                    <Empty />
                  </div>
                )}
              </div>
              {students && students.data.length > 0 && (
                <StudentPagination
                  meta={students.meta}
                  total={students.meta.total}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsList;
