import { Link, useParams } from "react-router-dom";
import { AppTitle } from "../../components/partials/AppTitle";
import BannerStudents from "../../components/students/BannerStudents";
import { ShowStudents } from "../../actions/StudentAction";
import PersonalIformations from "./../../components/students/PersonalIformations";
import { Skeleton } from "antd";
import PersonalInformationSupp from "../../components/students/PersonalInformationSupp";
import { useQuery } from "@tanstack/react-query";
import { StudentKey } from "../../ultils/keys";
import { StudentsLoading } from "./../../components/students/StudentsLoading";
import { MenuAvatar } from "../../components/Ui/MenuAvatar";
import { NotFoundTemplate } from "./../../components/layout/NotFoundTemplate";
export const Profile = () => {
  const { student } = useParams();

  const { data, isLoading, error, isError } = useQuery(
    [StudentKey, student],
    () => ShowStudents(student)
  );

  return (
    <>
      <AppTitle title={"Profile"} img='profile' />

      {isError && <NotFoundTemplate title="Utilisateur n'existe pas" />}
      {!isError && (
        <div className='row'>
          <div className='col-md-4'>
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

          <div className='col-md-8'>
            <div className='card'>
              <div className='card-body'>
                <ul className='nav nav-tabs nav-bordered'>
                  <li className='nav-item'>
                    <Link
                      to='#home-b1'
                      data-bs-toggle='tab'
                      aria-expanded='false'
                      className='nav-link active bold'
                    >
                      <MenuAvatar img={"personal-information"} size={26} />
                      Informations Personnelles
                    </Link>
                  </li>
                  <li className='nav-item bold'>
                    <Link
                      to='#profile-b1'
                      data-bs-toggle='tab'
                      aria-expanded='true'
                      className='nav-link '
                    >
                      <MenuAvatar img={"comp-informations"} size={26} />{" "}
                      Informations supplementaires
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
      )}
    </>
  );
};
