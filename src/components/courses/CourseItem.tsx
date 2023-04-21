import { Avatar, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { MenuAvatar } from "../Ui/MenuAvatar";
// import { CourseButtomAction } from "./CourseButtomAction";

export const CourseItem = ({ course }: any) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<MenuAvatar img={"course"} />}
        title={
          <Link to={`/dashbord/course/${course.id}`}>
            <b>{course.nom_cours}</b>
          </Link>
        }
        description={course.description}
      />
      <div>{/* <CourseButtomAction course={course} /> */}</div>
    </List.Item>
  );
};
