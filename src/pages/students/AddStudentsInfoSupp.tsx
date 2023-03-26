import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { AppTitle } from "../../components/partials/AppTitle";
import SubmitButtom from "../../components/Ui/form/SubmitButtom";
import { ToastContainer, toast } from "react-toastify";
import { ShowStudents, AddStudentsSupp } from "../../actions/StudentAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import BannerStudents from "../../components/students/BannerStudents";
import { studentFetch } from "../../redux/StudentsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Bars, ThreeDots } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";
import { UserKey } from "../../ultils/keys";
import { StudentsLoading } from "../../components/students/StudentsLoading";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { AddStudentsInfoForm } from "../../components/students/AddStudentsInfoForm";
import { Divider } from "antd";

export const AddStudentsInfoSupp = () => {
  const { student } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [UserKey, student],
    () => ShowStudents(student),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Ajouter un (e) étudiant (e)"} img={"users"} />
      <div className='bg-white'>
        <div className='row p-3'>
          <h4>
            {" "}
            <i className='fa fa-circle'></i> &nbsp;
            {data && data.studentinfos
              ? `Modifier des informations comp.`
              : " Ajouter des informations comp."}{" "}
            de <b style={{ color: "#7d56c2" }}>{data && data.person.prenom}</b>
          </h4>
          <Divider />
          {isLoading ? (
            <StudentsLoading />
          ) : isError ? (
            <NotFoundTemplate message={err.response.data.message} />
          ) : (
            <>
              {/* <div className='col-md-4'>
                <BannerStudents student={data} />
              </div> */}
              <div className='col-md-12'>
                <AddStudentsInfoForm student={data} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddStudentsInfoSupp;
