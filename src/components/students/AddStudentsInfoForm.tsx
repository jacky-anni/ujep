import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AddStudentsSupp, EditStudentsSupp } from "../../actions/StudentAction";
import CreateAndEditInfoSuppShema from "../../shemaForms/students/CreateAndEditInfoSuppShema";
import { UserKey } from "../../ultils/keys";
import { Toast } from "../layout/Toast";
import SubmitButtom from "../Ui/form/SubmitButtom";

export const AddStudentsInfoForm = ({ student }: any) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateAndEditInfoSuppShema),
    defaultValues: {
      ocupation: student.studentinfos?.ocupation,
      personne_resp: student.studentinfos?.personne_resp,
      telephone_resp: student.studentinfos?.telephone_resp,
      maladie: student.studentinfos?.maladie,
      personne_contact: student.studentinfos?.personne_contact,
      annee_fin_etude: student.studentinfos?.annee_fin_etude,
      nom_etablissemet: student.studentinfos?.nom_etablissemet,
      etude_precedente: student.studentinfos?.etude_precedente,
      option_precendente: student.studentinfos?.option_precendente,
      annee_etude_precedente: student.studentinfos?.annee_etude_precedente,
      maladie_check:
        student.studentinfos?.maladie && student.studentinfos?.studentId
          ? "Oui"
          : !student.studentinfos?.maladie && student.studentinfos?.studentId
          ? "Non"
          : "",
      etablissement_check:
        student.studentinfos?.nom_etablissemet &&
        student.studentinfos?.studentId
          ? "Oui"
          : !student.studentinfos?.nom_etablissemet &&
            student.studentinfos?.studentId
          ? "Non"
          : "",
    },
  });

  // define query client
  const queryClient = useQueryClient();
  // get all faculties
  const { isLoading, mutate, error, isError } = useMutation(
    async (values) => {
      if (student.studentinfos) {
        return await EditStudentsSupp(values, student.id);
      } else {
        return await AddStudentsSupp(values, student.id);
      }
    },
    {
      onMutate: (result: any) => {
        queryClient.invalidateQueries([UserKey]);
      },
      onSuccess: (result) => {
        Toast("success", "Informations modifié avec succès");
        navigate(-1);
      },
    }
  );

  // on submit function
  const onSubmit = (data: any) => {
    const values = {
      ocupation: data.ocupation,
      personne_resp: data.personne_resp,
      telephone_resp: data.telephone_resp,
      maladie: data.maladie,
      personne_contact: data.personne_contact,
      annee_fin_etude: data.annee_fin_etude,
      nom_etablissemet: data.nom_etablissemet,
      etude_precedente: data.etude_precedente,
      option_precendente: data.option_precendente,
      annee_etude_precedente: data.annee_etude_precedente,
    };

    mutate(values);
  };

  const err: any = error;

  console.log(err);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isError && (
          <Alert variant='filled' severity='error' className='mb-3'>
            {err.response.data?.message || "Erreur lors de l'enregsitrement"}
          </Alert>
        )}
        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Occupation</label>
            <input
              {...register("ocupation")}
              className='form-control '
              name='ocupation'
              placeholder='Medecin'
            />

            <span className='errors-field'>
              {errors.ocupation?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Personne responsable</label>
            <input
              {...register("personne_resp")}
              className='form-control '
              placeholder='Jacky'
            />

            <span className='errors-field'>
              {errors.personne_resp?.message?.toString()}
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Personne de contact</label>
            <input
              {...register("personne_contact")}
              className='form-control '
              placeholder='Jacky Anizaire'
            />

            <span className='errors-field'>
              {errors.personne_contact?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Telephone du personne responsable</label>
            <input
              {...register("telephone_resp")}
              className='form-control '
              placeholder='4872-9922'
            />

            <span className='errors-field'>
              {errors.telephone_resp?.message?.toString()}
            </span>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Annee fin d'etude</label>
              <input
                {...register("annee_fin_etude")}
                className='form-control '
                placeholder='2010'
              />
              <span className='errors-field'>
                {errors.annee_fin_etude?.message?.toString()}
              </span>
            </div>
            <div className='col-md-6 position-relative mb-2'>
              <label className='mb-1'>Souffrez-vous une maladie ? </label>{" "}
              <div className='form-check'>
                <label>
                  &nbsp;
                  <input
                    {...register("maladie_check")}
                    type='radio'
                    value='Oui'
                    className='form-check-input'
                  />
                  Oui &nbsp;
                </label>
              </div>
              <div className='form-check'>
                <label>
                  &nbsp;
                  <input
                    {...register("maladie_check")}
                    type='radio'
                    value='Non'
                    className='form-check-input'
                  />
                  Non &nbsp;
                </label>
              </div>
              <span className='errors-field'>
                {errors.maladie_check?.message?.toString()}
              </span>
            </div>

            {watch("maladie_check") === "Oui" && (
              <div className='row'>
                <div className='col-md-12 position-relative mb-2'>
                  <label>Mentionnez la maladie</label>
                  <input
                    {...register("maladie")}
                    className='form-control '
                    name='maladie'
                    placeholder='Ecrivez ici...'
                  />
                </div>
              </div>
            )}
          </div>

          <div className='row'>
            <div className='col-md-12 position-relative mb-2'>
              <label className='mb-1'>
                avez vous fait une etude universitaire precedemement ?{" "}
              </label>{" "}
              <div className='form-check'>
                <label>
                  &nbsp;
                  <input
                    {...register("etablissement_check")}
                    type='radio'
                    value='Oui'
                    className='form-check-input'
                  />
                  Oui &nbsp;
                </label>
              </div>
              <div className='form-check'>
                <label>
                  &nbsp;
                  <input
                    {...register("etablissement_check")}
                    type='radio'
                    value='Non'
                    className='form-check-input'
                  />
                  Non &nbsp;
                </label>
              </div>
              <span className='errors-field'>
                {errors.etablissement_check?.message?.toString()}
              </span>
            </div>
          </div>

          {watch("etablissement_check") === "Oui" && (
            <>
              <div className='row'>
                <div className='col-md-6 position-relative mb-2'>
                  <label>Nom de l'etablissement</label>
                  <input
                    {...register("nom_etablissemet")}
                    className='form-control '
                    placeholder='2010-2011'
                  />
                </div>

                <div className='col-md-6 position-relative mb-2'>
                  <label>Etude Precedente</label>
                  <input
                    {...register("etude_precedente")}
                    className='form-control '
                    placeholder='Mentionnez ici..'
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6 position-relative mb-2'>
                  <label>Option precedente</label>
                  <input
                    {...register("option_precendente")}
                    className='form-control '
                    placeholder='Mentionnez ici....'
                  />
                </div>

                <div className='col-md-6 position-relative mb-2'>
                  <label>Annee precedente</label>
                  <input
                    {...register("annee_etude_precedente")}
                    className='form-control '
                    placeholder='Mentionnez ici....'
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <>
          <SubmitButtom
            message={
              student && student.studentinfos ? "Modifier" : "Enregistrer"
            }
            loading={isLoading}
          />
          &nbsp;&nbsp;
          <Link to={`/dashbord/profile-students/${student.person.uuid}`}>
            <button className='btn btn-outline-primary bold'>
              {" "}
              Sauter cette etape
            </button>
          </Link>
        </>
      </form>
    </>
  );
};
