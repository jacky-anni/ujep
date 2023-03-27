import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { showEmployee } from "../../actions/EmployeesAction";
import { BannerEmployee } from "../../components/employee/BannerEmployee";
import { EmployeeLoading } from "../../components/employee/EmployeeLoading";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { AppTitle } from "../../components/partials/AppTitle";
import { EmployeeKey } from "../../ultils/keys";
import { BasicInformation } from "./../../components/employee/BasicInformation";

export const EmployeeProfile = () => {
  const { employee } = useParams();
  const { data, isLoading, error, isError } = useQuery(
    [EmployeeKey, employee],
    () => showEmployee(employee),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;
  return (
    <>
      <AppTitle title={"Profile Employé"} img='profile' />
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              {isLoading ? (
                <EmployeeLoading />
              ) : isError ? (
                <NotFoundTemplate message={err.response.data.message} />
              ) : (
                <>
                  <div className='row'>
                    <div className='col-md-4'>
                      <BannerEmployee employee={data} />
                    </div>
                    <div className='col-md-8'>
                      <BasicInformation employee={data} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
