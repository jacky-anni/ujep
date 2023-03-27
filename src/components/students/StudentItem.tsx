import { Link } from "react-router-dom";
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
          </div>
        </td>
      </tr>
    </>
  );
};

export default StudentItem;
