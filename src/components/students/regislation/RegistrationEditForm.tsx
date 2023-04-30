import { useForm } from "react-hook-form";
import SubmitButtom from "../../Ui/form/SubmitButtom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegislationKey } from "../../../ultils/keys";
import { Divider } from "antd";
import CreateRegistration from "../../../shemaForms/students/CreateRegistration";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditRegislation } from "../../../actions/RegisterAction";
import { Toast } from "../../layout/Toast";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { StudentsRegistrationEdit } from "./StudentsRegistrationEdit";

export const RegistrationEditForm = ({ registerData }: any) => {
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
    }
  }, [isSuccess]);

  // initialize query client
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateRegistration),
    defaultValues: {
      niveau: registerData.niveau,
      vacation: registerData.vacation,
      annee: registerData.annee,
      degree: "Licence",
    },
  });

  // select level for faculty
  const elements: Array<any> = [];

  for (let index = 1; index <= registerData.faculte.duree; index++) {
    elements.push(
      <option
        value={index}
        selected={index.toString() === registerData.niveau ? true : false}
      >
        {index === 1 ? index + "ère" : index + "ème"} année
      </option>
    );
  }

  // mutation
  const { isLoading, mutate, error, isError } = useMutation(
    async (values: any) => {
      return EditRegislation(registerData.id, values);
    },
    {
      onSuccess: (result, variables, context) => {
        setIsSuccess(true);
        reset();
        queryClient.invalidateQueries([
          RegislationKey,
          registerData.student.id,
        ]);
        Toast("success", "Immatriculation modifiée avec succès");
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
    <StudentsRegistrationEdit>
      {!isSuccess ? (
        <>
          <>
            <>
              <Divider orientation='left' plain>
                <h4>
                  <i className='fa fa-graduation-cap'></i>{" "}
                  {registerData.faculte.nom_faculte}
                </h4>
              </Divider>

              {isError && (
                <Alert variant='filled' severity='error' className='mb-3'>
                  {err.response.data?.message || "Probleme d'enregistrement"}
                </Alert>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group row'>
                  <div className='col-md-6 position-relative mb-2'>
                    <label>Niveau</label>
                    <select className='form-control' {...register("niveau")}>
                      <option value=''>Choisir une option</option>
                      {elements}
                    </select>

                    <span className='errors-field'>
                      {errors.niveau?.message?.toString()}
                    </span>
                  </div>

                  <div className='col-md-6 position-relative mb-2'>
                    <label>Vacation</label>
                    <select className='form-control' {...register("vacation")}>
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
                <SubmitButtom message={"Continuer"} loading={isLoading} />
                &nbsp; &nbsp;
              </form>
            </>
          </>
        </>
      ) : (
        isSuccess
      )}
    </StudentsRegistrationEdit>
  );
};
