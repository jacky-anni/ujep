import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import AppTitle from "../../components/partials/AppTitle";
import BannerStudents from "../../components/students/BannerStudents";
import { showStudents } from "../../redux/actions/StudentAction";
import { studentFetch, clearLoading } from "../../redux/StudentsSlice";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks/hooks";
import PersonalIformations from "./../../components/students/PersonalIformations";
import { Skeleton } from "antd";
import PersonalInformationSupp from "../../components/students/PersonalInformationSupp";
const Profile = () => {
  const dispatch = useAppDispatch();
  // fetch studendts
  const currentStudent = useAppSelector((state) => state.student);
  const { student } = useParams();

  // useeffects
  useEffect(() => {
    (async () => {
      // set loading
      dispatch(clearLoading());
      // fetch data
      const data = await showStudents(student);
      if (data.status === 404) {
        console.log(data);
      } else {
        dispatch(studentFetch(data));
      }
    })();
  }, [student]);

  return (
    <>
      <AppTitle title={"Profile"} />
      <div className='row'>
        <div className='col-md-3'>
          {!currentStudent.isLoading ? (
            <BannerStudents student={currentStudent.student} />
          ) : (
            <div className='card card-body'>
              <center>
                <Bars
                  height='50'
                  width='50'
                  color='#7d56c2'
                  ariaLabel='bars-loading'
                  wrapperStyle={{ display: "block" }}
                  wrapperClass=''
                  visible={true}
                />
                <p style={{ marginTop: "0px" }}>Chargment en cours...</p>
              </center>
            </div>
          )}
        </div>

        <div className='col-md-9'>
          <div className='card'>
            <div className='card-body'>
              <ul className='nav nav-tabs nav-bordered'>
                <li className='nav-item'>
                  <Link
                    to='#home-b1'
                    data-bs-toggle='tab'
                    aria-expanded='false'
                    className='nav-link active'
                  >
                    <i className='fa fa-user'></i> Informations Personnelles
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='#profile-b1'
                    data-bs-toggle='tab'
                    aria-expanded='true'
                    className='nav-link '
                  >
                    <i className='fa fa-file'></i> Informations supplementaires
                  </Link>
                </li>
              </ul>
              <div className='tab-content'>
                <div className='tab-pane show active' id='home-b1'>
                  {currentStudent && !currentStudent.isLoading ? (
                    <PersonalIformations student={currentStudent.student} />
                  ) : (
                    <Skeleton active />
                  )}
                </div>
                <div className='tab-pane' id='profile-b1'>
                  {currentStudent &&
                  !currentStudent.isLoading &&
                  currentStudent.student ? (
                    <PersonalInformationSupp
                      student={currentStudent.student}
                      id={student}
                    />
                  ) : (
                    <Skeleton active />
                  )}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card*/}
        </div>
      </div>
    </>
  );
};

export default Profile;
