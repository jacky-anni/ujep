import React from "react";
import moment from "moment";
import "moment/locale/fr";
import { Link } from "react-router-dom";

export const BasicInformation = ({ employee }: any) => {
  return (
    <>
      <table className='table mb-2'>
        <tbody>
          <tr>
            <th className='table-light table-info'>Email</th>
            <th scope='row'>{employee.person.email}</th>
          </tr>
          <tr>
            <th className='table-light table-info'>Sexe</th>
            <th scope='row'>{employee.person.sexe}</th>
          </tr>
          <tr>
            <th className='table-light table-info'>Telephone</th>
            <th scope='row'>{employee.person.telephone}</th>
          </tr>
          <tr>
            <th className='table-light table-info'>Date de naissance</th>
            <th scope='row'>
              {moment(employee.date_naissance).format("DD MMMM YYYY")}
            </th>
          </tr>
          <tr>
            <th className='table-light table-info'>Date d'embauche</th>
            <th scope='row'>
              {moment(employee.date_embauche).format("DD MMMM YYYY")}
            </th>
          </tr>
          <tr>
            <th className='table-light table-info'>Salaire</th>
            <th scope='row'>-</th>
          </tr>
        </tbody>
      </table>

      {employee && (
        <>
          <Link to={`/dashbord/edit-employee/${employee.person.uuid}`}>
            <button className='btn btn-primary'>
              {" "}
              <i className='fa fa-edit'></i> <b>Modifier</b>
            </button>
          </Link>
        </>
      )}
    </>
  );
};
