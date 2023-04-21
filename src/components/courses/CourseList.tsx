import React from "react";
import { CreateCourse } from "./CreateCourse";
import { useQuery } from "@tanstack/react-query";
import { CourseKey } from "../../ultils/keys";
import { CourseLoading } from "./CourseLoading";
import { ListCourse } from "../../actions/CourseAction";
import { Divider, List } from "antd";
import { CoursePagination } from "./CoursePagination";
import { CourseItem } from "./CourseItem";

export const CourseList = () => {
  const { data, isLoading } = useQuery([CourseKey], () => ListCourse());

  return (
    <>
      <div className='row  mb-2 p-2'>
        {/* {student.total> 0 && <EmployeeSearchBar />} */}
        <div className='col-md-6 col-sm-12'>Search bar</div>
        <div className='col-6 text-sm-end'>
          <CreateCourse />
        </div>
      </div>
      <div className='col-md-12'>
        {/* <List_ /> */}
        <div className='row m-1'>
          {isLoading ? (
            <CourseLoading />
          ) : (
            <>
              <List
                itemLayout='horizontal'
                dataSource={data.data}
                renderItem={(item: any, index): any => (
                  <CourseItem course={item} />
                )}
              />
              <CoursePagination count={data.meta?.nextPage} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
