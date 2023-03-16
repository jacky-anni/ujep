import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { AppTitle } from "../../components/partials/AppTitle";
import BannerStudents from "../../components/students/BannerStudents";
import { showStudents } from "../../actions/StudentAction";
import PersonalIformations from "./../../components/students/PersonalIformations";
import { Skeleton } from "antd";
import PersonalInformationSupp from "../../components/students/PersonalInformationSupp";
import { useQuery } from "@tanstack/react-query";
import { StudentKey } from "../../ultils/keys";
import { StudentsLoading } from "./../../components/students/StudentsLoading";
const Profile = () => {
  const { student } = useParams();

  const { data, isLoading } = useQuery([StudentKey, student], () =>
    showStudents(student)
  );

  return (
    <>
      <AppTitle title={"Profile"} img='sdds' />
      <div className='row'>
        <div className='col-md-3'>
          {isLoading ? (
            <>
              <div className='card-body bg-light'>
                <StudentsLoading />
              </div>
            </>
          ) : (
            <BannerStudents student={data} />
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
                  {isLoading ? (
                    <Skeleton active />
                  ) : (
                    <PersonalIformations student={data} />
                  )}
                </div>
                <div className='tab-pane' id='profile-b1'>
                  {isLoading ? (
                    <Skeleton active />
                  ) : (
                    <PersonalInformationSupp student={data} id={student} />
                  )}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Profile;
