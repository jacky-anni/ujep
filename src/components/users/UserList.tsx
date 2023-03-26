import { Empty } from "antd";
import { useQuery } from "@tanstack/react-query";
import { UserKey } from "../../ultils/keys";
import { getUsers } from "../../actions/UserAction";
import { Header } from "./Header";
import { UserListItem } from "./UserListItem";
import { UsersLoading } from "./UsersLoading";

export const UserList = () => {
  const { data: users, isLoading } = useQuery([UserKey], () => getUsers());

  return (
    <>
      <Header />
      <div className='table-responsive'>
        <table className='table table-nowrap table-centered m-0'>
          {users && users.data.length > 0 && (
            <thead className='table-light'>
              <tr>
                <th colSpan={2}>Profile</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
          )}

          <tbody>
            {users &&
              users.data.length > 0 &&
              users.data.map((users: any) => (
                <UserListItem key={users.id} users={users} />
              ))}
          </tbody>
        </table>

        {isLoading && (
          <>
            <UsersLoading />
          </>
        )}
        {/* if the employees is empty */}
        {users && users.data.length === 0 && (
          <p className='mt-3 mb-0'>
            <Empty description={"Pas de données pour l'instant"} />
          </p>
        )}
      </div>
    </>
  );
};
