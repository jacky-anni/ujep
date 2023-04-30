import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { GetTeacher } from "../../actions/TeacherActions";
import { TeacherKey } from "../../ultils/keys";
import { AppTitle } from "../../components/partials/AppTitle";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { BannerTeacher } from "../../components/teachers/BannerTeacher";
import { BasicInformation } from "../../components/teachers/BasicInformation";
import { DataLoading } from "../../components/layout/DataLoading";

export const ShowTeacher = () => {
  const { idTeacher } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [TeacherKey, idTeacher],
    () => GetTeacher(idTeacher),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;
  return (
    <>
      <AppTitle title={"Professeurs"} img={"teacher"} />
      <div className='bg-white'>
        <div className='row p-1'>
          <div className='col-md-12'>
            {isLoading ? (
              <DataLoading />
            ) : isError ? (
              <NotFoundTemplate message={err.response.data.message} />
            ) : (
              <div className='row'>
                <div className='col-md-4'>
                  <BannerTeacher teacher={data} />
                </div>
                <div className='col-md-8'>
                  <BasicInformation teacher={data} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
