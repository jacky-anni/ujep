import SubmitButtom from "../Ui/form/SubmitButtom";
import { addUser } from "../../actions/UserAction";
import { Alert } from "@mui/material";
import { Toast } from "../layout/Toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupSchema from "../../shemaForms/account/SignupSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserKey } from "../../ultils/keys";

export const CreateUsersForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  // create navigate
  const navigate = useNavigate();
  // initialize query client
  const queryClient = useQueryClient();
  // create mutation
  const { isLoading, mutate, error, isError, isSuccess } = useMutation(
    async (values) => {
      await addUser(values);
    },
    {
      onMutate: (result) => {
        //Update the cache with the new user
        //queryClient.setQueryData([UserKey], () => [result, ...data]);
      },
      onSuccess: (result, variables, context) => {
        Toast("success", "Faculté enregistré avec succès");
        queryClient.invalidateQueries([UserKey]);
        reset();
        navigate("/dashbord/users");
      },
    }
  );

  const onSubmit = (data: any) => {
    const values: any = {
      email: data.email,
      username: data.username,
      password: data.password,
      role_name: data.role_name,
    };
    mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer l'email</label>
            <input
              {...register("email")}
              className='form-control'
              placeholder='contact@ujep.edu.ht'
            />

            <span className='errors-field'>
              {errors.email?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le nom d'utilisateur</label>
            <input
              {...register("username")}
              className='form-control '
              placeholder='@jacky'
            />

            <span className='errors-field'>
              {errors.username?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 position-relative mb-2'>
            <label>Choisir un role</label>
            <select className='form-control' {...register("role_name")}>
              <option value=''>Choisir une option</option>
              <option value={"user"}>Utilisateur</option>
              <option value={"admin"}>Administrateur</option>
            </select>

            <span className='errors-field'>
              {errors.role_name?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le mot de passe</label>
            <input
              {...register("password")}
              type='password'
              className='form-control '
              placeholder='Entrer le mot de passe'
            />

            <span className='errors-field'>
              {errors.password?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Répéter le mot de passe</label>
            <input
              {...register("password_confirm")}
              type='password'
              className='form-control '
              placeholder='Répéter le mot de passe'
            />

            <span className='errors-field'>
              {errors.password_confirm?.message?.toString()}
            </span>
          </div>
        </div>

        <SubmitButtom message={"Soumettre"} loading={isLoading} />
      </form>
    </>
  );
};
