import { Link } from "react-router-dom";

const PersonalInformationSupp = ({ student, id }: any) => {
  return (
    <>
      {!student.studentinfos && (
        <>
          <p className='alert alert-danger'>
            Pas d'informations suplementaire{" "}
          </p>
          <Link to={`/dashbord/add-students-infos/${id}`}>
            <button className='btn btn-primary bold'>
              <i className='fa fa-plus'></i> Ajouter les informations
            </button>
          </Link>
        </>
      )}
      <table className='table mb-2'>
        {student.studentinfos && (
          <tbody>
            <tr>
              <th className='table-light table-info'>Occupation</th>
              <th scope='row'>{student.studentinfos.ocupation}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Personne Responsable</th>
              <th scope='row'>{student.studentinfos.personne_resp}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>
                Telephone du Responsable
              </th>
              <th scope='row'>{student.studentinfos.telephone_resp}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>
                Contact du personne responsable
              </th>
              <th scope='row'>{student.studentinfos.personne_contact}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Maladie souffert</th>
              <th scope='row'>{student.studentinfos.maladie}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Annee fin d'etude</th>
              <th scope='row'>{student.studentinfos.annee_fin_etude}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Nom etablissement</th>
              <th scope='row'>{student.studentinfos.nom_etablissemet}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Precedente</th>
              <th scope='row'>{student.studentinfos.etude_precedente}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>Option Precedente</th>
              <th scope='row'>{student.studentinfos.option_precendente}</th>
            </tr>

            <tr>
              <th className='table-light table-info'>
                Annee option Precedente
              </th>
              <th scope='row'>{student.studentinfos.annee_etude_precedente}</th>
            </tr>
          </tbody>
        )}
      </table>

      {student.studentinfos && (
        <>
          <Link to={`/dashbord/add-students-infos/${id}`}>
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

export default PersonalInformationSupp;
