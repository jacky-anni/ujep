import StudentsList from "../../components/students/StudentsList";
import AppTitle from "../../components/partials/AppTitle";
const Students = () => {
  return (
    <>
      <AppTitle title={"Ajouter etudiant"} />
      <StudentsList />
    </>
  );
};

export default Students;
