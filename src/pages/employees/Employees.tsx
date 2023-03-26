import EmployeeList from "../../components/employee/EmployeeList";
import { AppTitle } from "../../components/partials/AppTitle";
export const Employees = () => {
  return (
    <>
      <AppTitle title={"Liste des employées"} img={"employees"} />
      <EmployeeList />
    </>
  );
};
