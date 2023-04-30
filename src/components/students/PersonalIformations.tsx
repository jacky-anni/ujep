import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";

const PersonalIformations = ({ student }: any) => {
  return (
    <>
      {student && (
        <table className='table mb-2'>
          <tbody>
            <tr>
              <th className='table-light table-info'>Telephone</th>
              <th scope='row'>{student.person.telephone}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Email</th>
              <th scope='row'>{student.person.email}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Lieu de naissance</th>
              <th scope='row'>{student.lieu_naissance}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>date de naissance</th>
              <th scope='row'>
                {" "}
                {moment(student.date_naissance).format("DD MMMM YYYY")}
              </th>
            </tr>

            <tr>
              <th className='table-light table-info'>Groupe sanguin</th>
              <th scope='row'>{student.groupe_sanguin}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Statut matrimonial</th>
              <th scope='row'>{student.statut_matrimonial}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>NIF</th>
              <th scope='row'>{student.nif}</th>
            </tr>
          </tbody>
        </table>
      )}

      {student && (
        <>
          <Link to={`/dashbord/edit-students/${student.person.uuid}`}>
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

export default PersonalIformations;
