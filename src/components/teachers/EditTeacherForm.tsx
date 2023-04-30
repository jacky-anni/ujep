import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateTeacherShema } from "../../shemaForms/teachers/CreateTeacherShema";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { Alert } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Toast } from "../layout/Toast";
import { TeacherKey } from "../../ultils/keys";
import { EditTeacher } from "../../actions/TeacherActions";
import { useNavigate } from "react-router";

export const EditTeacherForm = ({ teacher }: any) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateTeacherShema),
    defaultValues: {
      nom: teacher?.person.nom,
      prenom: teacher?.person.prenom,
      sexe: teacher?.person.sexe,
      email: teacher?.person.email,
      telephone: teacher?.person.date_naissance,
      date_naissance: teacher?.person.date_naissance,
      niveau: teacher?.niveau,
    },
  });

  const navigate = useNavigate();

  // initialize query client
  const queryClient = useQueryClient();

  // create teacher
  const { isLoading, mutate, error, isError } = useMutation(
    async (values) => {
      return await EditTeacher(values, teacher.person.uuid);
    },
    {
      onSuccess: (result) => {
        Toast("success", "Professeur (e) Modifié avec succès");
        queryClient.invalidateQueries([TeacherKey]);
        navigate(-1);
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
            {err.response.data?.message}
          </Alert>
        )}
        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le nom</label>
            <input
              {...register("nom")}
              className='form-control '
              placeholder='Anizaire'
            />

            <span className='errors-field'>
              {errors.nom?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le prenom</label>
            <input
              {...register("prenom")}
              className='form-control '
              placeholder='Anizaire'
            />

            <span className='errors-field'>
              {errors.prenom?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le sexe</label>
            <select className='form-control' {...register("sexe")}>
              <option value=''>Choisir une option</option>
              <option value={"masculin"}>Masculin</option>
              <option value={"feminin"}>Feminin</option>
            </select>

            <span className='errors-field'>
              {errors.sexe?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer l'email</label>
            <input
              {...register("email")}
              className='form-control '
              placeholder='anizairejacky@gmail.com'
            />

            <span className='errors-field'>
              {errors.email?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le telephone</label>
            <input
              className='form-control '
              {...register("telephone")}
              placeholder='+509 3454 34 32'
            />

            <span className='errors-field'>
              {errors.telephone?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer la date de naissance</label>
            <input
              className='form-control '
              {...register("date_naissance")}
              placeholder=''
              type='date'
            />

            <span className='errors-field'>
              {errors.date_naissance?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 position-relative mb-2'>
            <label>Niveau</label>
            <select className='form-control' {...register("niveau")}>
              <option value=''>Choisir une option</option>
              <option value={"certificat"}>certificat</option>
              <option value={"licence"}>licence</option>
              <option value={"master"}>master</option>
              <option value={"doctorat"}>doctorat</option>
            </select>

            <span className='errors-field'>
              {errors.niveau?.message?.toString()}
            </span>
          </div>
        </div>

        <SubmitButtom message={"Soumettre"} loading={isLoading} />
      </form>
    </>
  );
};
