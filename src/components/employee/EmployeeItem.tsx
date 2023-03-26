import React from "react";
import { Link } from "react-router-dom";
import DeleteEmployee from "./DeleteEmployee";
import { Avatar } from "antd";

const EmployeeItem = ({ employees }: any) => {
  return (
    <>
      <tr>
        <td className='table-user'>
          <Avatar className='me-2 rounded-circle' />
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
            <Link to={`/dashbord/employee/profile/${employees.person.uuid}`}>
              <button
                className='btn btn-primary'
                type='button'
                style={{ fontWeight: "bold" }}
              >
                <i className='fa fa-user'></i>
              </button>
            </Link>
            &nbsp;
            <Link to={`/dashbord/edit-employee/${employees.person.uuid}`}>
              <button
                className='btn btn-info'
                type='button'
                style={{ fontWeight: "bold" }}
              >
                <i className='fa fa-edit'></i>
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default EmployeeItem;
