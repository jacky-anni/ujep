import { FacultyList } from "../../components/faculties/FacultyList";
import { AppTitle } from "../../components/partials/AppTitle";

export const Faculties = () => {
  return (
    <>
      <AppTitle title={"Les facultes"} img={"users"} />
      <div className='bg-white'>
        <FacultyList />
      </div>
    </>
  );
};
