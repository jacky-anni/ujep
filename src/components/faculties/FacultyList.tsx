import { Link } from "react-router-dom";
import { GetFaculties } from "../../actions/FacultyActions";
import { FacultyButtomAction } from "./Ui/FacultyButtomAction";
import { FacultyListItem } from "./FacultyListItem";
import { FacultySearBar } from "./Ui/FacultySearchBar";
import { Divider, Empty } from "antd";
import { useQuery } from "@tanstack/react-query";
import { FacultyKey } from "./../../ultils/keys";
import { DataLoading } from "../layout/DataLoading";

export const FacultyList = () => {
  // select faculties
  const { data, isLoading } = useQuery([FacultyKey], GetFaculties);

  return (
    <>
      {/* {isFetching && <p>Data is load here...</p>} */}
      <div className='row  mb-2 p-2'>
        {/* {student.total> 0 && <EmployeeSearchBar />} */}
        <div className='col-md-6 col-sm-12'>
          <FacultySearBar />
        </div>
        <div className='col-6 text-sm-end'>
          <Link to='/dashbord/faculty/create'>
            <button
              type='button'
              className='btn btn-primary bold'
              data-bs-target='#custom-modal'
            >
              Ajouter faculté
            </button>
          </Link>
        </div>
        <Divider />
      </div>

      {data && data.length === 0 && (
        <div className='row'>
          {" "}
          <Empty />
        </div>
      )}
      <div className='row m-1'>
        {isLoading ? (
          <DataLoading />
        ) : (
          <>
            {data &&
              data.map((faculty: any) => (
                <div className='col-md-4' key={faculty.id}>
                  <div className='card project-box'>
                    <div className='card-body'>
                      <FacultyButtomAction faculty={faculty} />
                      <FacultyListItem faculty={faculty} />
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};
