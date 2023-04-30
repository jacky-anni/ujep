import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CourseKey } from "../../ultils/keys";
import { ListCourseWithoutPagination } from "../../actions/CourseAction";
import { CourseItemCatelog } from "./CourseItemCatelog";
import { DataLoading } from "../layout/DataLoading";
import { Divider, Table } from "antd";
import { CourseCatalogSearchBar } from "./CourseCatalogSearchBar";
import { useAppSelector } from "../../redux/hooks/hooks";

export const CourseListCatalog = () => {
  const { data, isLoading } = useQuery(
    [CourseKey, "courseWihoutPagination"],
    () => ListCourseWithoutPagination()
  );

  // field list
  const catalog = useAppSelector((state) => state.catalog);

  const columns = [
    {
      key: "id",
      render: (_: any, data: any) => <CourseItemCatelog course={data} />,
    },
  ];

  return (
    <>
      <div className='col-md-12'>
        <div className='row m-1'>
          <h4 className='p-2'>
            <i className='fa fa-book'></i> Liste de cours disponible
          </h4>
          <Divider />
          <CourseCatalogSearchBar />

          {isLoading ? (
            <DataLoading />
          ) : (
            <>
              <Table
                columns={columns}
                dataSource={catalog.filtered !== null ? catalog.filtered : data}
                rowKey='id'
                showHeader={false}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
