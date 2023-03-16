import React from "react";
import { Empty } from "antd";
import {
  EmployeesFetch,
  EmployeesFetchErrors,
} from "../../redux/EmployeeSlice";
import EmployeePagination from "./EmployeePagination";
import EmployeeSearchBar from "./EmployeeSearchBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import { ThreeDots } from "react-loader-spinner";
import { GetEmployees } from "../../actions/EmployeesAction";

const EmployeeList: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const employee = useAppSelector((state) => state.employee);

  useEffect(() => {
    (async () => {
      // fetch data
      const data = await GetEmployees();
      if (data.status === 404) {
        dispatch(EmployeesFetchErrors(data.message));
      } else {
        dispatch(EmployeesFetch(data));
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
                {/* {employee.employees.length > 0 && <EmployeeSearchBar />} */}
                <EmployeeSearchBar />
                <div className='col-sm-6'>
                  <div className=' text-sm-end'>
                    <button
                      type='button'
                      className='btn btn-primary'
                      data-bs-target='#custom-modal'
                    >
                      Ajouter un (e) employé (e)
                    </button>
                  </div>
                </div>
                {/* end col*/}
              </div>
              <div className='table-responsive'>
                {/* {employee.meta.total} employees */}
                <table className='table table-centered table-nowrap table-hover mb-0'>
                  {employee.employees.length > 0 && (
                    <thead>
                      <tr>
                        <th>Nom et Prenom Info</th>
                        <th>Fonction</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th> Salaire</th>
                        <th style={{ width: 82 }}>Action</th>
                      </tr>
                    </thead>
                  )}

                  <tbody>
                    {/* if the employees is not empty , thetch data*/}
                    {!employee.isLoading &&
                      employee.employees.length > 0 &&
                      employee.employees.map((employee: any) => (
                        <EmployeeItem employees={employee} key={employee.id} />
                      ))}
                  </tbody>
                </table>
                {/* loading state */}
                {employee.isLoading && (
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
                {!employee.isLoading && employee.errors != null && (
                  <p className='alert alert-danger'>Une erreur </p>
                )}

                {/* if the employees is empty */}
                {!employee.isLoading &&
                  employee.errors === null &&
                  employee.employees.length === 0 && (
                    <p className='mt-3 mb-0'>
                      <Empty description={"Pas de données pour l'instant"} />
                    </p>
                  )}
              </div>
              {employee.employees.length > 0 && (
                <EmployeePagination
                  meta={employee.meta}
                  total={employee.meta.total}
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

export default EmployeeList;
