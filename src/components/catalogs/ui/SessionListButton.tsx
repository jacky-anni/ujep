import React from "react";
import { useNavigate } from "react-router-dom";

type DataProps = {
  sem: string;
  year: number;
  fac: number;
};

export const SessionListButton = ({ detail }: { detail: DataProps }) => {
  const navigate = useNavigate();
  const onChange = (e: any) => {
    if (e.target.value !== "") {
      navigate(`?sem=${e.target.value}&year=${detail.year}&fac=${detail.fac}`);
    }
  };
  return (
    <>
      <div className='dropdown float-end'>
        <select className='form-select form-select-sm' onChange={onChange}>
          <option value=''>Sessions</option>
          <option value={"I"}>Session I</option>
          <option value={"II"}>Session II</option>
        </select>
      </div>{" "}
    </>
  );
};
