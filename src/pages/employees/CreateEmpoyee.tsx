import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { AppTitle } from "../../components/partials/AppTitle";
import SubmitButtom from "../../components/Ui/form/SubmitButtom";
import { addEmployee } from "../../actions/EmployeesAction";
import { ToastContainer, toast } from "react-toastify";
import { CreateEmployeeForm } from "../../components/employee/CreateEmployeeForm";

export const CreateEmpoyee = () => {
  return (
    <>
      <AppTitle title={"Ajouter un employee"} />
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <CreateEmployeeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
