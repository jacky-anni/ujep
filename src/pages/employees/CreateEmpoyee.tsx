import { AppTitle } from "../../components/partials/AppTitle";
import { CreateEmployeeForm } from "../../components/employee/CreateEmployeeForm";

export const CreateEmpoyee = () => {
  return (
    <>
      <AppTitle title={"Ajouter un employee"} />
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <CreateEmployeeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
