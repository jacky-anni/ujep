import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { CreateCourse } from "../../shemaForms/course/CreateCourse";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddCourse } from "../../actions/CourseAction";
import { Alert } from "@mui/material";
import { CourseKey } from "../../ultils/keys";
import { Toast } from "../layout/Toast";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { openModal } from "../../redux/CourseState";

export const CreateCourseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateCourse),
  });

  // use disptach
  const dispatch = useAppDispatch();

  // initialize query client
  const queryClient = useQueryClient();
  // select data keys
  const data: any = queryClient.getQueryData([CourseKey]);

  // create mutation
  const { isLoading, mutate, error, isError } = useMutation(
    async (values: any) => {
      return AddCourse(values);
    },
    {
      onMutate: (result) => {
        queryClient.setQueryData([CourseKey], () => [result, ...data.data]);
      },
      onSuccess: (result, variables, context) => {
        queryClient.invalidateQueries([CourseKey]);
        Toast("success", "Cours enregistré avec succès");
        dispatch(openModal(false));
        reset();
      },
    }
  );

  const onSubmit = (data: any) => {
    mutate({
      code_cours: "POW232",
      nom_cours: data.nom_cours,
      description: data.description,
    });
  };
  // define error
  const err: any = error;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isError && (
          <Alert variant='filled' severity='error' className='mb-3'>
            {err.response.data.message || "Probleme d'enregistrement"}
          </Alert>
        )}
        <div className='form-group row'>
          <div className='col-md-12'>
            <label htmlFor=''>Entrer le nom du cours</label>
            <input
              className='form-control '
              {...register("nom_cours")}
              placeholder='Entrer le nom du cours'
            />
            <span className='errors-field'>
              {errors.nom_cours?.message?.toString()}
            </span>
          </div>

          <div className='col-md-12 mb-2 '>
            <label htmlFor=''>Entrer la description du cours</label>
            <textarea
              className='form-control '
              {...register("description")}
              placeholder='Entrer le nom du cours'
            ></textarea>
            <span className='errors-field'>
              {errors.description?.message?.toString()}
            </span>
          </div>
        </div>
        <SubmitButtom message={"Soumettre"} loading={isLoading} />
      </form>
    </>
  );
};
