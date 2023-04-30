import { List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AddCourseCatalog } from "./AddCourseCatalog";

export const CourseItemCatelog = ({ course }: any) => {
  return (
    <>
      <List.Item>
        <List.Item.Meta
          title={
            <Link to={`/dashbord/course/${course.id}`}>
              <b>{course.nom_cours}</b>
            </Link>
          }
          description={course.description}
        />
      </List.Item>

      <AddCourseCatalog course={course} />
    </>
  );
};
