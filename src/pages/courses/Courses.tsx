import { AppTitle } from "../../components/partials/AppTitle";
import { CourseList } from "./../../components/courses/CourseList";

export const Courses = () => {
  return (
    <>
      <div className='row'>
        <AppTitle title={"Les cours"} img={"course"} />
        <div className='card'>
          <div className='row justify-content-between mb-2'>
            <CourseList />
          </div>
        </div>
      </div>
    </>
  );
};
