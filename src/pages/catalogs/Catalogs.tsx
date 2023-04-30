import React, { useEffect } from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { FacultyListForCatalog } from "./../../components/catalogs/FacultyListForCatalog";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { AddCourseCatalog } from "./AddCourseCatalog";
import { BannerCourseCatalog } from "./../../components/catalogs/BannerCourseCatalog";
import { useQuery } from "@tanstack/react-query";
import { FacultyKey } from "../../ultils/keys";
import { GetFaculty } from "../../actions/FacultyActions";
import { DataLoading } from "../../components/layout/DataLoading";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";

export const Catalogs = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  // select faculties
  const { data, isLoading, isError, error } = useQuery(
    [FacultyKey, parsed.fac],
    () => GetFaculty(parsed.fac),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Catalogue Cours"} img={"catalogue"} />

      <div className='col-md-12 mb-2'>
        {parsed.fac && parsed.sem && parsed.year ? (
          <>
            {isLoading ? (
              <DataLoading />
            ) : isError ? (
              <NotFoundTemplate message={err.response.data.message} />
            ) : (
              <>
                <BannerCourseCatalog faculty={data} detail={parsed} />
                <AddCourseCatalog />
              </>
            )}
          </>
        ) : (
          <FacultyListForCatalog />
        )}
      </div>
    </>
  );
};
