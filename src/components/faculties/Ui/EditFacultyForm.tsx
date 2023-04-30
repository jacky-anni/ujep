import SubmitButtom from "../../Ui/form/SubmitButtom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetFaculties, UpdateFaculty } from "../../../actions/FacultyActions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Alert } from "@mui/material";
import { Toast } from "../../layout/Toast";
import { FacultyKey } from "../../../ultils/keys";
import { useNavigate } from "react-router-dom";
import ShemaFaculty from "../../../shemaForms/faculty/ShemaFaculty";

export const EditFacultyForm = ({ faculty }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ShemaFaculty),
    defaultValues: {
      nom_faculte: faculty?.nom_faculte,
      degree:
        faculty?.degree.charAt(0).toUpperCase() + faculty?.degree.slice(1),
      duree: faculty?.duree,
      note_de_passage: faculty?.note_de_passage,
      nombre_matiere: faculty?.nombre_matiere,
      description: faculty?.description,
    },
  });

  // define query client
  const queryClient = useQueryClient();
  // get all faculties
  const { data } = useQuery([FacultyKey], GetFaculties);
  // initialize navigate
  const navigate = useNavigate();
  // create mutation
  const { isLoading, mutate, error, isError } = useMutation(
    async (values) => {
      await UpdateFaculty(values, faculty.id);
    },
    {
      onMutate: (result: any) => {
        return queryClient.setQueryData([FacultyKey], () =>
          data.map((faculty: any) =>
            faculty.id === result.id ? result : faculty
          )
        );
      },
      onSuccess: (result) => {
        Toast("success", "Faculté enregistré avec succès");
        queryClient.invalidateQueries([FacultyKey]);
        navigate(`/dashbord/faculty/${faculty.id}`);
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
            Une erreur s’est produite lors de la modification de cette faculté
            {/* {err.response.data.message} */}
          </Alert>
        )}
        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Entrer le nom faculte</label>
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
      </form>
    </>
  );
};
