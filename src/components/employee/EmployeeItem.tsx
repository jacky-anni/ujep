import React from "react";
import { Link } from "react-router-dom";
import DeleteEmployee from "./DeleteEmployee";

const EmployeeItem = ({ employees }: any) => {
  return (
    <>
      <tr>
        <td className='table-user'>
          <img
            src='/assets/images/users/user-4.jpg'
            alt='table-user'
            className='me-2 rounded-circle'
          />
          <span className='text-body fw-semibold'>
            {employees.person.nom}&nbsp;
            {employees.person.prenom} {employees.person.id}{" "}
          </span>
        </td>
        <td>{employees.fonction}</td>
        <td>{employees.person.email}</td>
        <td>{employees.person.telephone}</td>
        <td>{employees.salaire}</td>
        <td>
          <div className='dropdown'>
            <button
              className='btn btn-primary'
              type='button'
              style={{ fontWeight: "bold" }}
            >
              Profile
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

export default EmployeeItem;
