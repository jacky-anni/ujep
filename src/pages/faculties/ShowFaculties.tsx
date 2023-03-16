import { useQuery } from "@tanstack/react-query";
import { GetFaculty } from "../../actions/FacultyActions";
import { FacultyLoading } from "../../components/faculties/Ui/FacultyLoading";
import { AppTitle } from "../../components/partials/AppTitle";
import { FacultyKey } from "../../ultils/keys";
import { ShowFaculty } from "../../components/faculties/ShowFaculty";

import { useParams } from "react-router-dom";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";

export const ShowFaculties = () => {
  // facuty params
  const { idFaculty } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [FacultyKey, idFaculty],
    () => GetFaculty(idFaculty)
    // {
    //   cacheTime: 0,
    // }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Les facultes"} img={"faculty"} />
      <div className='bg-white'>
        <div className='row p-1'>
          <div className='col-md-12'>
            {isLoading ? (
              <FacultyLoading />
            ) : isError ? (
              <NotFoundTemplate message={err.response.data.message} />
            ) : (
              <ShowFaculty faculty={data} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
