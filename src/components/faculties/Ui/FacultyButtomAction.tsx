import { Link } from "react-router-dom";

export const FacultyButtomAction = ({ faculty }: any) => {
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
          <Link to={`/dashbord/faculty/${faculty.id}`}>
            <span
              className='dropdown-item'
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              <i className='fa fa-edit'></i> Modifier
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
