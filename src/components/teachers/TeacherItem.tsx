import { Link } from "react-router-dom";
import { Avatar } from "antd";
import moment from "moment";
import "moment/locale/fr";

export const TeacherItem = ({ teacher }: any) => {
  return (
    <>
      <tr>
        <td className='table-user'>
          <Avatar className='me-2 rounded-circle' />
          <span className='text-body fw-semibold'>
            {teacher.person.nom}&nbsp;
            {teacher.person.prenom}
          </span>
        </td>
        <td>{teacher.person.email}</td>
        <td>{teacher.person.telephone}</td>
        <td>{teacher.niveau}</td>
        <td> {moment(teacher.date_naissance).format("DD MMMM YYYY")}</td>
        <td>
          <div className='dropdown'>
            <Link to={`/dashbord/teacher/profile/${teacher.person.uuid}`}>
              <button
                className='btn btn-primary'
                type='button'
                style={{ fontWeight: "bold" }}
              >
                <i className='fa fa-user'></i>
              </button>
            </Link>
            &nbsp;
            <Link to={`/dashbord/teacher/edit/${teacher.person.uuid}`}>
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
