import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { editEmployee, GetEmployees } from "../../actions/EmployeesAction";
import AddEditEmplyeesSchema from "../../shemaForms/employees/AddEditEmplyeesSchema";
import { EmployeeKey } from "../../ultils/keys";
import { Toast } from "../layout/Toast";
import SubmitButtom from "../Ui/form/SubmitButtom";

export const EditEmployeeForm = ({ employee }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddEditEmplyeesSchema),
    defaultValues: {
      nom: employee?.person.nom,
      prenom: employee?.person.prenom,
      sexe: employee?.person.sexe,
      email: employee?.person.email,
      telephone: employee?.person.date_naissance,
      fonction: employee?.fonction,
      date_naissance: employee?.person.date_naissance,
      date_embauche: employee?.date_embauche,
      salaire: employee?.salaire,
    },
  });

  // initialize query client
  const queryClient = useQueryClient();
  // create navigate
  const navigate = useNavigate();

  // select data
  const { data } = useQuery([EmployeeKey], () => GetEmployees());

  // create mutation
  const { isLoading, mutate, error, isError, isSuccess } = useMutation(
    async (values: any) => {
      return await editEmployee(employee.person.uuid, values);
    },
    {
      onMutate: (result) => {
        return queryClient.setQueryData(
          [EmployeeKey],
          () =>
            data &&
            data.data.map((employee: any) =>
              employee.id === employee.id ? result : employee
            )
        );
      },
      onSuccess: (result, variables, context) => {
        Toast("success", "Faculté enregistré avec succès");
        queryClient.invalidateQueries([EmployeeKey]);
        navigate(`/dashbord/employee/profile/${result.person.uuid}`);
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
            {(err && err.response?.data?.message) ||
              "Probleme avec la modification"}
          </Alert>
        )}
        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le nom</label>
            <input
              className='form-control '
              {...register("nom")}
              placeholder='Jacky'
            />

            <span className='errors-field'>
              {errors.nom?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le prenom</label>
            <input
              className='form-control '
              {...register("prenom")}
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
              className='form-control '
              {...register("email")}
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
              className='form-control'
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
            <label>Entrer la fonction</label>
            <input
              className='form-control '
              {...register("fonction")}
              placeholder='Secretaire'
            />

            <span className='errors-field'>
              {errors.fonction?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer la date d'embauche</label>
            <input
              className='form-control '
              {...register("date_embauche")}
              type='date'
              placeholder=''
            />

            <span className='errors-field'>
              {errors.date_embauche?.message?.toString()}
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 position-relative mb-2'>
            <label>Entrer le salaire</label>
            <input
              className='form-control'
              {...register("salaire")}
              placeholder='200'
            />

            <span className='errors-field'>
              {errors.salaire?.message?.toString()}
            </span>
          </div>
        </div>
        <SubmitButtom message={"Soumettre"} loading={isLoading} />
      </form>
    </>
  );
};
