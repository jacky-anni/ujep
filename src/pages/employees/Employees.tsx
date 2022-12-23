import EmployeeList from "../../components/employee/EmployeeList";
import AppTitle from "../../components/partials/AppTitle";
const Employees = () => {
  return (
    <>
      <AppTitle title={"Liste des employées"} />
      <EmployeeList />
    </>
  );
};

export default Employees;
