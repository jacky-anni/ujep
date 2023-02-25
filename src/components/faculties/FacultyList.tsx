import { Link } from "react-router-dom";
import StudentSearchBar from "../students/StudentSearchBar";

export const FacultyList = () => {
  return (
    <>
      <div className='row justify-content-between mb-2 mt-2 '>
        {/* {student.total> 0 && <EmployeeSearchBar />} */}
        <StudentSearchBar />
        <div className='col-sm-6'>
          <div className=' text-sm-end'>
            <Link to='/dashbord/add-students'>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-target='#custom-modal'
              >
                <i className='fa fa-plus'></i> Ajouter etudiant
              </button>
            </Link>
          </div>
        </div>
        {/* end col*/}
      </div>
      <div className='col-lg-4'>
        <div className='card project-box'>
          <div className='card-body'>
            <div className='dropdown float-end'>
              <a
                href='#'
                className='dropdown-toggle card-drop arrow-none'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fa fa-grip-vertical m-0 text-muted h3' />
              </a>
              <div className='dropdown-menu dropdown-menu-end'>
                <a className='dropdown-item' href='#'>
                  Edit
                </a>
                <a className='dropdown-item' href='#'>
                  Delete
                </a>
                <a className='dropdown-item' href='#'>
                  Add Members
                </a>
                <a className='dropdown-item' href='#'>
                  Add Due Date
                </a>
              </div>
            </div>{" "}
            {/* end dropdown */}
            {/* Title*/}
            <h5 className='mt-0'>
              <span className='text-dark bold'>New Admin Design</span>
            </h5>
            <p className='text-muted text-uppercase'>
              <i className='fa fa-account-circle' />{" "}
              <small>Orange Limited</small>
            </p>
            <div className='badge bg-soft-success text-success mb-3'>
              Finished
            </div>
            {/* Desc*/}
            <p className='text-muted font-13 mb-3 sp-line-2'>
              With supporting text below as a natural lead-in to additional
              contenposuere erat a ante...
              <a href='javascript:void(0);' className='fw-bold text-muted'>
                view more
              </a>
            </p>
            {/* Task info*/}
            <p className='mb-1'>
              <span className='pe-2 text-nowrap mb-2 d-inline-block'>
                <i className='mdi mdi-format-list-bulleted-type text-muted' />
                <b>78</b> Tasks
              </span>
              <span className='text-nowrap mb-2 d-inline-block'>
                <i className='mdi mdi-comment-multiple-outline text-muted' />
                <b>214</b> Comments
              </span>
            </p>
            {/* Team*/}
            <div className='avatar-group mb-3' id='tooltips-container'>
              <a href='javascript: void(0);' className='avatar-group-item'>
                <img
                  src='assets/images/users/user-1.jpg'
                  className='rounded-circle avatar-sm'
                  alt='friend'
                  data-bs-container='#tooltips-container'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='Mat Helme'
                />
              </a>
              <a href='javascript: void(0);' className='avatar-group-item'>
                <img
                  src='assets/images/users/user-2.jpg'
                  className='rounded-circle avatar-sm'
                  alt='friend'
                  data-bs-container='#tooltips-container'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='Michael Zenaty'
                />
              </a>
              <a href='javascript: void(0);' className='avatar-group-item'>
                <img
                  src='assets/images/users/user-3.jpg'
                  className='rounded-circle avatar-sm'
                  alt='friend'
                  data-bs-container='#tooltips-container'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='James Anderson'
                />
              </a>
              <a href='javascript: void(0);' className='avatar-group-item'>
                <img
                  src='assets/images/users/user-4.jpg'
                  className='rounded-circle avatar-sm'
                  alt='friend'
                  data-bs-container='#tooltips-container'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='Mat Helme'
                />
              </a>
              <a href='javascript: void(0);' className='avatar-group-item'>
                <img
                  src='assets/images/users/user-5.jpg'
                  className='rounded-circle avatar-sm'
                  alt='friend'
                  data-bs-container='#tooltips-container'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='Username'
                />
              </a>
            </div>
            {/* Progress*/}
            <p className='mb-2 fw-semibold'>
              Task completed: <span className='float-end'>28/78</span>
            </p>
            <div className='progress mb-1' style={{ height: 7 }}>
              <div
                className='progress-bar'
                role='progressbar'
                aria-valuenow={34}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "34%" }}
              ></div>
              {/* /.progress-bar .progress-bar-danger */}
            </div>
            {/* /.progress .no-rounded */}
          </div>
        </div>{" "}
        {/* end card box*/}
      </div>
      {/* end col*/}
    </>
  );
};
