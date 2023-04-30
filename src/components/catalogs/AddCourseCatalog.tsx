import { Divider, Modal } from "antd";
import { useState } from "react";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { useForm } from "react-hook-form";
import { AddCourCatalogShema } from "../../shemaForms/catalogs/AddCourCatalogShema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CatalogKey, TeacherKey } from "../../ultils/keys";
import { TeacherList } from "../../actions/TeacherActions";
import { DataLoading } from "../layout/DataLoading";
import { AddCourseForCatalog } from "../../actions/CatalogAction";
import { Toast } from "../layout/Toast";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Alert } from "@mui/material";
export const AddCourseCatalog = ({ course }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // detructuring
  const location = useLocation();
  const parsed: any = queryString.parse(location.search);

  // select teachers
  const { data: teachers, isLoading: teachLoading } = useQuery(
    [TeacherKey],
    () => TeacherList()
  );

  // configuration of form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddCourCatalogShema),
  });

  // initialize query client
  // initialize query client
  const queryClient = useQueryClient();
  // create mutation
  const {
    isLoading: addLoading,
    mutate,
    isError,
    error,
  } = useMutation(
    async (values: any) => {
      return AddCourseForCatalog(
        values.teacher,
        parseInt(parsed.fac),
        course.id,
        values
      );
    },
    {
      onSuccess: (result, variables, context) => {
        setIsModalOpen(false);
        queryClient.invalidateQueries([CatalogKey]);

        Toast("success", "Cours enregistré avec succès");
        reset();
      },
    }
  );
  // define error
  const err: any = error;

  // submit function
  const onSubmit = (data: any) => {
    const obj = {
      semestre: parsed.sem,
      matiere_base: parseInt(data.matiere_base),
      note_passage: parseInt(data.note_passage),
      annee_academique: parsed.year,
      teacher: parseInt(data.teacher),
    };

    mutate(obj);
  };

  const form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!teachLoading ? (
        <>
          {isError && (
            <Alert variant='filled' severity='error' className='mb-3'>
              {err.response.data.message || "Probleme d'enregistrement"}
            </Alert>
          )}
          <div className='form-group row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Professeur</label>
              <select className='form-control' {...register("teacher")}>
                <option value=''>Choisir une option</option>
                {!teachLoading &&
                  teachers.data.map((teacher: any) => (
                    <option value={teacher.id} key={teacher.id}>
                      {teacher.person.prenom} {teacher.person.nom}
                    </option>
                  ))}
              </select>

              <span className='errors-field'>
                {errors.teacher?.message?.toString()}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Un matière de base ? </label>
              <select className='form-control' {...register("matiere_base")}>
                <option value=''>Choisir une option</option>
                <option value={1}>Oui</option>
                <option value={0}>Non</option>
              </select>

              <span className='errors-field'>
                {errors.matiere_base?.message?.toString()}
              </span>
            </div>

            <div className='col-md-12'>
              <label htmlFor=''>Note de passage</label>
              <input
                className='form-control '
                {...register("note_passage")}
                placeholder='Entrer la note de passage'
              />
              <span className='errors-field'>
                {errors.note_passage?.message?.toString()}
              </span>
            </div>
          </div>
          <SubmitButtom message={"Ajouter"} loading={addLoading} />
        </>
      ) : (
        <DataLoading />
      )}
    </form>
  );

  return (
    <>
      <button
        className='btn btn-primary btn-xs'
        onClick={showModal}
        style={{
          position: "absolute",
          right: "0px",
          top: "17px",
          marginLeft: "15px",
        }}
      >
        <i className='fa fa-plus'></i>
      </button>
      <Modal
        title={
          <>
            <h4>Ajouter {course.nom_cours}</h4>
            <Divider />
          </>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
        width={700}
      >
        {form}
      </Modal>
    </>
  );
};
