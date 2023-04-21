import { AppTitle } from "./../../components/partials/AppTitle";
import { TeachersList } from "./../../components/teachers/TeachersList";

export const Teachers = () => {
  return (
    <>
      <div className='row'>
        <AppTitle title={"Professeurs"} img={"users"} />
        <div className='card'>
          <div className='row justify-content-between mb-2'>
            <TeachersList />
          </div>
        </div>
      </div>
    </>
  );
};
