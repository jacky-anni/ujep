import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks/hooks";

export const YearListButtom = ({ detail }: any) => {
  const navigate = useNavigate();
  const onChange = (e: any) => {
    if (e.target.value !== "") {
      navigate(`?sem=${detail.sem}&year=${e.target.value}&fac=${detail.fac}`);
    }
  };
  const catalog = useAppSelector((state) => state.catalog);

  const elements: Array<any> = [];

  for (let index = 1; index <= catalog.faculty?.duree; index++) {
    elements.push(
      <option value={index}>
        {index === 1 ? index + "ère" : index + "ème"} année
      </option>
    );
  }
  return (
    <>
      <div className='dropdown float-end'>
        <select className='form-select form-select-sm' onChange={onChange}>
          <option value='' selected>
            Années
          </option>
          {elements}
        </select>
      </div>{" "}
    </>
  );
};
