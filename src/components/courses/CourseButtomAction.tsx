import { EditCourse } from "./EditCourse";

export const CourseButtomAction = ({ course }: any) => {
  return (
    <>
      <div className='dropdown float-end'>
        <span
          style={{ cursor: "pointer" }}
          className='dropdown-toggle card-drop arrow-none'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <i className='fa fa-grip-vertical m-0 text-muted h3' />
        </span>
        <div className='dropdown-menu dropdown-menu-end'>
          <EditCourse course={course} />
        </div>
      </div>
    </>
  );
};
