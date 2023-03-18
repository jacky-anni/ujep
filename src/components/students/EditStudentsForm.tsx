import { useNavigate } from "react-router-dom";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { addStudents, GetStudents } from "../../actions/StudentAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateAndEditShemaStudents from "../../shemaForms/students/CreateAndEditShema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StudentKey } from "../../ultils/keys";
import { Toast } from "../layout/Toast";
import Alert from "@mui/material/Alert";

export const EditStudentsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateAndEditShemaStudents),
  });

  const navigate = useNavigate();
  // initialize query client
  const queryClient = useQueryClient();
  // create navigate
  //const navigate = useNavigate();
  // select the students list
  const { data: students } = useQuery([StudentKey], () => GetStudents());

  const { isLoading, mutate, error, isError } = useMutation(
    async (values) => {
      const response = await addStudents(values);
      return response;
    },
    {
      onMutate: (result) => {
        //Update the cache with the new user
        queryClient.setQueryData([StudentKey], () => [
          result,
          ...students.data,
        ]);
      },
      onSuccess: (result) => {
        Toast("success", "Faculté enregistré avec succès");
        queryClient.invalidateQueries([StudentKey]);
        reset();
        navigate(`/dashbord/add-students-infos/${result.person.uuid}`);
      },
    }
  );

  // define error
  const err: any = error;

  // on submit function
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
          <div className='col-md-6 position-relative mb-2'>
            <label>Lieu de naissance</label>
            <input
              className='form-control '
              {...register("lieu_naissance")}
              placeholder='Port-Margot'
            />

            <span className='errors-field'>
              {errors.lieu_naissance?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Groupe sanguin</label>
            <select className='form-control' {...register("groupe_sanguin")}>
              <option value=''>Choisir une option</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B++</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
            </select>

            <span className='errors-field'>
              {errors.groupe_sanguin?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Etat Matrimonial</label>
            <select
              className='form-control'
              {...register("statut_matrimonial")}
            >
              <option value=''>Choisir une option</option>
              <option value={"Célibataire"}>Célibataire</option>
              <option value={"Marié (e)"}>Marié (e)</option>
              <option value={"Divocé (e)"}>Divocé (e)</option>
              <option value={"Union Libre"}>Union Libre</option>
            </select>

            <span className='errors-field'>
              {errors.statut_matrimonial?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le NIF</label>
            <input
              className='form-control '
              {...register("nif")}
              placeholder='+9494-939-0'
            />

            <input
              type='hidden'
              value='233232-323'
              className='form-control '
              {...register("cin")}
            />

            <span className='errors-field'>
              {errors.nif?.message?.toString()}
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
