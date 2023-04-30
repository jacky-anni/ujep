import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { openModal } from "../../redux/CatalogState";
import { CreateCatalogShema } from "../../shemaForms/catalogs/CreateCatalogShema";
import { useNavigate } from "react-router-dom";

export const CreateCatalogForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const catalog = useAppSelector((state) => state.catalog);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateCatalogShema),
  });

  // use disptach
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    setLoading(false);
    navigate(
      `?sem=${data.semestre}&year=${data.annee_academique}&fac=${catalog.faculty.id}`
    );

    dispatch(openModal(false));
    reset();
  };

  const elements: Array<any> = [];

  for (let index = 1; index <= catalog.faculty.duree; index++) {
    elements.push(
      <option value={index}>
        {index === 1 ? index + "ère" : index + "ème"} année
      </option>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group row'>
          <div className='col-md-6 position-relative mb-2'>
            <label>Session</label>
            <select className='form-control' {...register("semestre")}>
              <option value=''>Choisir une option</option>
              <option value={"I"}>Session I</option>
              <option value={"II"}>Session II</option>
            </select>

            <span className='errors-field'>
              {errors.semestre?.message?.toString()}
            </span>
          </div>

          <div className='col-md-6 position-relative mb-2'>
            <label>Année Académique</label>
            <select className='form-control' {...register("annee_academique")}>
              <option value=''>Choisir une option</option>
              {elements}

              {/* <option value={"2020-2021"}>2020-2021</option>
              <option value={"2021-2022"}>2021-2022</option>
              <option value={"2022-2023"}>2022-2023</option> */}
            </select>

            <span className='errors-field'>
              {errors.annee_academique?.message?.toString()}
            </span>
          </div>
        </div>
        <SubmitButtom message={"Continuer"} loading={loading} />
      </form>
    </>
  );
};
