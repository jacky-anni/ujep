import { Link } from "react-router-dom";
import { GetFaculties } from "../../actions/FacultyActions";
import { Divider, Empty } from "antd";
import { useQuery } from "@tanstack/react-query";
import { FacultyKey } from "../../ultils/keys";
import { DataLoading } from "../layout/DataLoading";
import { CreateCatalog } from "./CreateCatalog";
import { FacultyItemList } from "./FacultyItemList";

export const FacultyListForCatalog = () => {
  // select faculties
  const { data, isLoading } = useQuery([FacultyKey], GetFaculties);

  return (
    <>
      {data && data.length === 0 && (
        <div className='row'>
          {" "}
          <Empty />
        </div>
      )}
      <div className='row'>
        {isLoading ? (
          <DataLoading />
        ) : (
          <>
            {data &&
              data.map((faculty: any) => (
                <div className='col-md-4' key={faculty.id}>
                  <FacultyItemList faculty={faculty} />
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};
