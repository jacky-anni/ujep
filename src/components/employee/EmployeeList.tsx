import { Divider, Empty } from "antd";
import EmployeePagination from "./EmployeePagination";
import EmployeeSearchBar from "./EmployeeSearchBar";
import EmployeeItem from "./EmployeeItem";
import { GetEmployees } from "../../actions/EmployeesAction";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EmployeeKey } from "../../ultils/keys";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { DataLoading } from "../layout/DataLoading";

const EmployeeList: React.FC = (props) => {
  const location = useLocation();
  const { page }: any = queryString.parse(location.search);

  // const page = parseInt(query.page);
  const { data, isLoading, isError } = useQuery([EmployeeKey], () =>
    GetEmployees(page)
  );

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
                    <Link to='/dashbord/add-employee'>
                      <button
                        type='button'
                        className='btn btn-primary'
                        data-bs-target='#custom-modal'
                      >
                        Ajouter un (e) employé (e)
                      </button>
                    </Link>
                  </div>
                </div>
                {/* end col*/}
              </div>
              <Divider />
              {data && data.data.length === 0 && (
                <div className='row'>
                  {" "}
                  <Empty />
                </div>
              )}
              <div className='table-responsive'>
                {/* {employee.meta.total} employees */}
                <table className='table table-centered table-nowrap table-hover mb-0'>
                  {data && data.data.length > 0 && (
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
                    {!isLoading &&
                      data.data.length > 0 &&
                      data.data.map((employee: any) => (
                        <EmployeeItem employees={employee} key={employee.id} />
                      ))}
                  </tbody>
                </table>
                {/* loading state */}
                {isLoading && (
                  <>
                    <DataLoading />
                  </>
                )}

                {/* if the employees is empty */}
                {isError && (
                  <p className='mt-3 mb-0'>
                    <Empty description={"Pas de données pour l'instant"} />
                  </p>
                )}
              </div>

              {data && data.data.length > 0 && (
                <EmployeePagination meta={data.meta} total={data.meta.total} />
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
