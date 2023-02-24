import StudentsList from "../../components/students/StudentsList";
import AppTitle from "../../components/partials/AppTitle";
export const Students = () => {
  return (
    <>
      <AppTitle title={"Ajouter etudiant"} />
      <StudentsList />
    </>
  );
};
