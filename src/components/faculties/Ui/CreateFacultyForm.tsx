import React, { useEffect, useState } from "react";
import SubmitButtom from "../../Ui/form/SubmitButtom";
import { useForm } from "react-hook-form";
import validationSchema from "../../../shemaForms/ShemaFaculty";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateFaculty } from "../../../actions/FacultyActions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert } from "@mui/material";
import { Toast } from "../../layout/Toast";
import { FacultyKey } from "./../../../ultils/keys";
import { useNavigate } from "react-router-dom";

export const CreateFacultyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  // initialize query client
  const queryClient = useQueryClient();
  // create navigate
  const navigate = useNavigate();
  const data: any = queryClient.getQueryData([FacultyKey]);
  // create mutation
  const { isLoading, mutate, error, isError, isSuccess } = useMutation(
    async (values) => {
      await CreateFaculty(values);
    },
    {
      onMutate: (result) => {
        //Update the cache with the new user
        queryClient.setQueryData([FacultyKey], () => [result, ...data]);
      },
      onSuccess: (result, variables, context) => {
        Toast("success", "Faculté enregistré avec succès");
        queryClient.invalidateQueries([FacultyKey]);
        reset();
        navigate("/dashbord/faculties");
      },
    }
  );

  // define error
  const err: any = error;
  // submit form
  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isError && (
          <Alert variant='filled' severity='error' className='mb-3'>
            {err.response.data.message}
          </Alert>
        )}
        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le nom faculté</label>
            <input {...register("nom_faculte")} className='form-control' />

            <span className='errors-field'>
              {errors.nom_faculte?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le niveau</label>
            <select {...register("degree")} className='form-control'>
              <option value=''>Choisir une option</option>
              <option value='Certificat'>Certificat</option>
              <option value='Licence'>Licence</option>
              <option value='Maitrise'>Maitrise</option>
              <option value='Doctorat'>Doctorat</option>
              <option value='Post Doctorat'>Post Doctorat</option>
            </select>
            <span className='errors-field'>
              {errors.degree?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer la duree</label>
            <input
              {...register("duree")}
              className='form-control'
              type='number'
            />
            <span className='errors-field'>
              {errors.duree?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer la note de passage</label>
            <input
              {...register("note_de_passage")}
              className='form-control'
              type='number'
            />
            <span className='errors-field'>
              {errors.note_de_passage?.message?.toString()}
            </span>
          </div>

          <div className='col-md-12 position-relative mb-2'>
            <label>Entrer la nombre de matiere</label>
            <input
              {...register("nombre_matiere")}
              className='form-control'
              type='number'
            />
            <span className='errors-field'>
              {errors.nombre_matiere?.message?.toString()}
            </span>
          </div>

          <div className='col-md-12 position-relative mb-2'>
            <label>Entrer la description</label>
            <textarea
              {...register("description")}
              className='form-control'
            ></textarea>
            <span className='errors-field'>
              {errors.description?.message?.toString()}
            </span>
          </div>
        </div>
        <SubmitButtom message={"Soumettre"} loading={isLoading} />
        <button
          onClick={() => reset()}
          className='btn btn-danger'
          style={{ fontWeight: "bold", marginLeft: "6px" }}
        >
          Annuler
        </button>
      </form>
    </>
  );
};
