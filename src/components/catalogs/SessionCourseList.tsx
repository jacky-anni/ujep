import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { CourseListCatalogBysesion } from "./ui/CourseListCatalogBysesion";
import { CatalogKey } from "../../ultils/keys";
import { getCourseCatalog } from "../../actions/CatalogAction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataLoading } from "../layout/DataLoading";

export const SessionCourseList = ({ faculty }: any) => {
  // initialize query client
  const queryClient = useQueryClient();

  const data: any = queryClient.getQueryData([CatalogKey, "courseList"]);

  const { isLoading, mutate } = useMutation(
    async (values: any) => {
      return getCourseCatalog(faculty.id, values.sem || "I", values.year || 1);
    },
    {
      onSuccess: (result, variables, context) => {
        queryClient.setQueryData([CatalogKey, "courseList"], () => result);
        queryClient.invalidateQueries([CatalogKey, "courseList"]);
      },
    }
  );

  useEffect(() => {
    mutate({
      sem: "I",
      year: 1,
    });
  }, [mutate, faculty]);

  const onChange = (key: string) => {
    mutate({
      sem: key,
      year: 1,
    });
  };

  const render = isLoading ? (
    <DataLoading />
  ) : (
    data &&
    data.map((course: any) => (
      <CourseListCatalogBysesion course={course} key={course.id} />
    ))
  );

  const items: any = [
    {
      key: "I",
      label: `Session 1`,
      children: render,
    },

    {
      key: "II",
      label: `Session 2`,
      children: render,
    },
  ];

  return (
    <div className='col-md-8'>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
    </div>
  );
};
