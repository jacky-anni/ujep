import { StudentsRegistration } from "./StudentsRegistration";
import { useForm } from "react-hook-form";
import SubmitButtom from "../../Ui/form/SubmitButtom";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RegislationKey, StudentKey } from "../../../ultils/keys";
import { ShowStudents } from "../../../actions/StudentAction";
import { DataLoading } from "../../layout/DataLoading";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { FacultyListForResgistration } from "../Ui/FacultyListForResgistration";
import { activeFacultyRegistration } from "../../../redux/StudentsSlice";
import { Divider } from "antd";
import CreateRegistration from "../../../shemaForms/students/CreateRegistration";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddRegister } from "../../../actions/RegisterAction";
import { Toast } from "../../layout/Toast";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

export const RegistrationForm = () => {
  const { student } = useParams();
  const studentState = useAppSelector((state) => state.student);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
    }
  }, [isSuccess]);

  // dispatch
  const dispatch = useAppDispatch();
  // select student informations
  const { data, isLoading } = useQuery(
    [StudentKey, student],
    () => ShowStudents(student),
    {
      cacheTime: 0,
    }
  );

  // initialize query client
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CreateRegistration) });

  // select level for faculty
  const elements: Array<any> = [];

  if (studentState.activeFaculty?.faculty?.level) {
    for (
      let index = 1;
      index <= studentState.activeFaculty.faculty.level;
      index++
    ) {
      elements.push(
        <option value={index}>
          {index === 1 ? index + "ère" : index + "ème"} année
        </option>
      );
    }
  }

  // mutation
  const {
    isLoading: loading,
    mutate,
    error,
    isError,
  } = useMutation(
    async (values: any) => {
      return AddRegister(
        data.id,
        studentState.activeFaculty.faculty.id,
        values
      );
    },
    {
      onSuccess: (result, variables, context) => {
        setIsSuccess(true);
        reset();
        queryClient.invalidateQueries([RegislationKey, data.id]);
        Toast("success", "Immatriculation enregistré avec succès");
      },
    }
  );

  // submit function
  const onSubmit = (data: any) => {
    mutate(data);
  };

  // define error
  const err: any = error;

  return (
    <StudentsRegistration>
      {!isSuccess ? (
        <>
          {isLoading ? (
            <>
              <div className='card-body bg-light'>
                <DataLoading />
              </div>
            </>
          ) : (
            <>
              {studentState.activeFaculty.active ? (
                <FacultyListForResgistration />
              ) : (
                <>
                  <Divider orientation='left' plain>
                    <h4>
                      <i className='fa fa-graduation-cap'></i>{" "}
                      {studentState.activeFaculty?.faculty?.name}
                    </h4>
                  </Divider>

                  {isError && (
                    <Alert variant='filled' severity='error' className='mb-3'>
                      {err.response.data?.message ||
                        "Probleme d'enregistrement"}
                    </Alert>
                  )}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group row'>
                      <div className='col-md-6 position-relative mb-2'>
                        <label>Niveau</label>
                        <select
                          className='form-control'
                          {...register("niveau")}
                        >
                          <option value=''>Choisir une option</option>
                          {elements}
                        </select>

                        <span className='errors-field'>
                          {errors.niveau?.message?.toString()}
                        </span>
                      </div>

                      <div className='col-md-6 position-relative mb-2'>
                        <label>Vacation</label>
                        <select
                          className='form-control'
                          {...register("vacation")}
                        >
                          <option value=''>Choisir une option</option>
                          <option value={"am"}>AM</option>
                          <option value={"pm"}>PM</option>
                          <option value={"week-end"}>Week-end</option>
                        </select>

                        <span className='errors-field'>
                          {errors.vacation?.message?.toString()}
                        </span>
                      </div>

                      <div className='col-md-12 position-relative mb-2'>
                        <label>Année Académique</label>
                        <select className='form-control' {...register("annee")}>
                          <option value=''>Choisir une option</option>
                          <option value={"2020-2021"}>2020-2021</option>
                          <option value={"2021-2022"}>2021-2022</option>
                          <option value={"2022-2023"}>2022-2023</option>
                          <option value={"2023-2024"}>2023-2024</option>
                        </select>

                        <input
                          type='hidden'
                          {...register("degree")}
                          value='Licence'
                        />

                        <span className='errors-field'>
                          {errors.annee?.message?.toString()}
                        </span>
                      </div>
                    </div>
                    <SubmitButtom message={"Continuer"} loading={loading} />
                    &nbsp; &nbsp;
                    <button
                      type='submit'
                      className='btn btn-secondary'
                      onClick={() => {
                        dispatch(
                          activeFacultyRegistration({
                            active: true,
                            faculty: null,
                          })
                        );
                      }}
                    >
                      <span
                        className={`spinner-border-sm me-1`}
                        role='status'
                        aria-hidden='true'
                      />
                      <b>Retouner</b>
                    </button>
                  </form>
                </>
              )}
            </>
          )}
        </>
      ) : (
        isSuccess
      )}
    </StudentsRegistration>
  );
};
