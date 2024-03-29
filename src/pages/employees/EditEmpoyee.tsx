import { AppTitle } from "../../components/partials/AppTitle";
import { showEmployee } from "../../actions/EmployeesAction";
import { EditEmployeeForm } from "../../components/employee/EditEmployeeForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EmployeeKey } from "../../ultils/keys";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { DataLoading } from "../../components/layout/DataLoading";

export const EditEmpoyee: React.FC<{}> = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [EmployeeKey, id],
    () => showEmployee(id),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;
  return (
    <>
      <AppTitle title={"Modifier cet employee"} />
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              {isLoading ? (
                <DataLoading />
              ) : isError ? (
                <NotFoundTemplate message={err.response.data.message} />
              ) : (
                <EditEmployeeForm employee={data} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
