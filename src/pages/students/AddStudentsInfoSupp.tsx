import { AppTitle } from "../../components/partials/AppTitle";
import { ShowStudents } from "../../actions/StudentAction";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserKey } from "../../ultils/keys";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { AddStudentsInfoForm } from "../../components/students/AddStudentsInfoForm";
import { Divider } from "antd";
import { DataLoading } from "../../components/layout/DataLoading";

export const AddStudentsInfoSupp = () => {
  const { student } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [UserKey, student],
    () => ShowStudents(student),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Ajouter un (e) étudiant (e)"} img={"users"} />
      <div className='bg-white'>
        <div className='row p-3'>
          <h4>
            {" "}
            <i className='fa fa-circle'></i> &nbsp;
            {data && data.studentinfos
              ? `Modifier des informations comp.`
              : " Ajouter des informations comp."}{" "}
            de <b style={{ color: "#7d56c2" }}>{data && data.person.prenom}</b>
          </h4>
          <Divider />
          {isLoading ? (
            <DataLoading />
          ) : isError ? (
            <NotFoundTemplate message={err.response.data.message} />
          ) : (
            <>
              {/* <div className='col-md-4'>
                <BannerStudents student={data} />
              </div> */}
              <div className='col-md-12'>
                <AddStudentsInfoForm student={data} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddStudentsInfoSupp;
