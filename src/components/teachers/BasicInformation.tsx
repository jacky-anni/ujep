import moment from "moment";
import "moment/locale/fr";
import { Link } from "react-router-dom";

export const BasicInformation = ({ teacher }: any) => {
  return (
    <>
      <table className='table mb-2'>
        <tbody>
          <tr>
            <th className='table-light table-info'>Email</th>
            <th scope='row'>{teacher.person.email}</th>
          </tr>
          <tr>
            <th className='table-light table-info'>Sexe</th>
            <th scope='row'>{teacher.person.sexe}</th>
          </tr>
          <tr>
            <th className='table-light table-info'>Telephone</th>
            <th scope='row'>{teacher.person.telephone}</th>
          </tr>
          <tr>
            <th className='table-light table-info'>Date de naissance</th>
            <th scope='row'>
              {moment(teacher.date_naissance).format("DD MMMM YYYY")}
            </th>
          </tr>
          <tr>
            <th className='table-light table-info'>Date d'embauche</th>
            <th scope='row'>
              {moment(teacher.date_embauche).format("DD MMMM YYYY")}
            </th>
          </tr>
          <tr>
            <th className='table-light table-info'>Niveau</th>
            <th scope='row'>{teacher.niveau}</th>
          </tr>
        </tbody>
      </table>

      {teacher && (
        <>
          <Link to={`/dashbord/teacher/edit/${teacher.person.uuid}`}>
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
