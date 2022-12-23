import React from "react";
import { Link } from "react-router-dom";
// import DeleteEmployee from "./DeleteEmployee";
import DeleteStudent from "./DeleteStudent";

const StudentItem = ({ students }: any) => {
  return (
    <>
      <tr>
        <td className='table-user'>
          <span className='text-body fw-semibold'>
            {students.person.nom}&nbsp;
          </span>
        </td>
        <td>{students.person.prenom}</td>
        <td>{students.person.telephone}</td>
        <td>{students.person.email}</td>
        <td>{students.person.date_naissance}</td>
        <td>
          <div className='dropdown'>
            <Link to={`/dashbord/profile-students/${students.person.uuid}`}>
              <button
                className='btn btn-primary'
                type='button'
                style={{ fontWeight: "bold" }}
              >
                <i className='fa fa-user'></i>
              </button>
            </Link>{" "}
            &nbsp;
            <span></span>
            <button
              className='btn btn-danger btn-xs'
              type='button'
              style={{ fontWeight: "bold" }}
            >
              <DeleteStudent id={students.person.uuid} />
            </button>
            {/* <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <Link
                to={`/edit-employee/${employees.person.uuid}`}
                className='action-icon dropdown-item'
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <i className='fa fa-edit action-buttom' /> Modifier
                </span>
              </Link>
              <div className='dropdown-divider'></div>
              <span>
                <DeleteEmployee id={employees.person.uuid} />
              </span>{" "}
            </div> */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default StudentItem;
