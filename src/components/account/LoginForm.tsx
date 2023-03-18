import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { login } from "../../actions/UserAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "@mui/material";
import LoginSchema from "../../shemaForms/account/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserKey } from "../../ultils/keys";
import { Toast } from "../layout/Toast";

const LoginForm = () => {
  const navigate = useNavigate();

  // shema validation for login login user
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // initialize query client
  const queryClient = useQueryClient();

  // mutation
  const { isLoading, mutate, error, isError } = useMutation(
    async (values) => {
      const response = await login(values);
      return response;
    },
    {
      onSuccess: (result) => {
        localStorage.setItem("wpwuab", result.access_token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + result.access_token;
        queryClient.invalidateQueries([UserKey]);
        Toast("success", "Vous êtes connecté (e)");
        reset();
        return navigate("/dashbord");
      },
      onError: () => {
        reset();
      },
    }
  );

  // define error
  const err: any = error;

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isError && (
          <Alert variant='filled' severity='error' className='mb-3'>
            {/* {err.response.data.message} */}
            Email ou mot de passe incorrect
          </Alert>
        )}

        <div className='row'>
          <div className='col-md-12 position-relative mb-2'>
            <label>Nom d'utilisateur</label>
            <input
              {...register("username")}
              className='form-control '
              placeholder='@jacky'
            />

            <span className='errors-field'>
              {errors.username?.message?.toString()}
            </span>
          </div>

          <div className='col-md-12 position-relative mb-2'>
            <label>Mot de passe</label>
            <input
              {...register("password")}
              type='password'
              className='form-control '
              placeholder='Votre mot de passe'
            />

            <span className='errors-field'>
              {errors.password?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='text-center d-grid'>
          <SubmitButtom message={"Soumettre"} loading={isLoading} />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
