import { FacultyKey } from "../../../ultils/keys";
import { GetFaculties } from "../../../actions/FacultyActions";
import { useQuery } from "@tanstack/react-query";
import { DataLoading } from "../../layout/DataLoading";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { activeFacultyRegistration } from "../../../redux/StudentsSlice";

export const FacultyListForResgistration = () => {
  // select faculty liss
  const { data, isLoading } = useQuery([FacultyKey], GetFaculties);
  const dispatch = useAppDispatch();

  return (
    <div className='row position-relative mb-1'>
      {isLoading ? (
        <DataLoading />
      ) : (
        data.map((faculty: any) => (
          <>
            <div
              key={faculty.id}
              className='col-md-6'
              onClick={() => {
                dispatch(
                  activeFacultyRegistration({
                    active: false,
                    faculty: {
                      id: faculty.id,
                      name: faculty.nom_faculte,
                      level: faculty.duree,
                    },
                  })
                );
              }}
              style={{ cursor: "pointer" }}
            >
              <div className='widget-rounded-circle card'>
                <div className='card-body'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h5 className='mb-1 mt-2 bold'>{faculty.nom_faculte}</h5>
                      <p className='mb-2 text-muted '>
                        {faculty.degree.charAt(0).toUpperCase() +
                          faculty.degree.slice(1)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
};
