import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { DeleteUser } from "./DeleteUser";
import { EditUsers } from "./EditUsers";

export const UserListItem = ({ users }: any) => {
  return (
    <>
      <tr>
        <td style={{ width: 36 }}>
          <Avatar size={40} icon={<UserOutlined />} />
        </td>
        <td>
          <h5 className='m-0 fw-normal font-13'>
            {users.person.prenom} {users.person.nom}
          </h5>
          <p className='mb-0 text-muted'>
            <small
              className={`badge badge-soft-${
                users.isActive ? "success" : "danger"
              }`}
            >
              {users.isActive ? "Activer" : "Desactiver"}
            </small>
          </p>
        </td>
        <td>{users.person.email}</td>
        <td>{users.role.role_name}</td>
        <td>
          <a href='javascript: void(0);' className='btn btn-xs btn-light m-1'>
            <i className='fa fa-user' />
          </a>

          <EditUsers user={users} />

          <DeleteUser user={users} />
        </td>
      </tr>
    </>
  );
};
