import { Avatar, Empty, Table } from "antd";
import React, { useEffect } from "react";
import { Header } from "./Header";
import { getUsers_ } from "../../redux/actions/UserAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getUsers } from "../../redux/UserSlice";
import { UserListItem } from "./UserListItem";
import { ThreeDots } from "react-loader-spinner";

export const UserList = () => {
  // dispatch users
  const dispatch = useAppDispatch();
  // user state
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      // fetch data
      const data = await getUsers_();
      if (data.status === 404) {
        console.log(data);
      } else {
        dispatch(getUsers(data));
      }
    })();
  }, [dispatch]);

  const { users }: any = user.users;

  return (
    <>
      <div className='col-md-12 p-2'>
        <Header />
        {user.users.length}
        <div className='table-responsive'>
          <table className='table table-nowrap table-centered m-0'>
            {user.users.length > 0 && (
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
              {!user.isLoading &&
                user.users.length > 0 &&
                user.users.map((users: any) => <UserListItem users={users} />)}
            </tbody>
          </table>

          {user.isLoading && (
            <>
              <center>
                <ThreeDots
                  height='90'
                  width='90'
                  radius='9'
                  color='#7d56c2'
                  ariaLabel='three-dots-loading'
                  wrapperStyle={{ display: "block" }}
                  visible={true}
                />
                <p style={{ marginTop: "-30px" }}>Chargment en cours...</p>
              </center>
            </>
          )}
          {/* errors */}
          {!user.isLoading && user.errors != null && (
            <p className='alert alert-danger'>Une erreur </p>
          )}
          {/* if the employees is empty */}
          {!user.isLoading &&
            user.errors === null &&
            user.users.length === 0 && (
              <p className='mt-3 mb-0'>
                <Empty description={"Pas de données pour l'instant"} />
              </p>
            )}
        </div>
      </div>
    </>
  );
};
